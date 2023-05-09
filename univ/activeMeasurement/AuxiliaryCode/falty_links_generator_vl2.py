import random

# ============= 参数 =============
# 输出文件
output_file_name: str = './falty_links_output/falty_links_vl2.txt'
# 随机种子
my_random_seed = 20230507
# 有问题的链路的比例
faulty_link_ratio: float = 0.001
# 三个等级的故障链路的占比
minorly_faulty_link_ratio: float = 0.4
moderately_faulty_link_ratio: float = 0.4
severely_faulty_link_ratio: float = 0.2
# 四个等级（包含随机误差）的误差上下界
error_rates_bound = [[0, 1e-4], [0.001, 0.01], [0.02, 0.05], [0.1, 1]]
# 配置节点名
edge_name: str = "EDGE"
aggregation_name: str = "AGGREGATION"
core_name: str = "CORE"
pod_name: str = "POD"
plane_name: str = "PLANE"
server_name: str = "SERVER"
# ============= 拓扑==============
pod_no: int = 3
edge_no: int = 10
core_no: int = 2
aggregation_no: int = 4
# ================================

first_tier_n_links = 0
second_tier_n_links = 0

class LinkErrorType():
    NORMAL = 0
    MINOR = 1
    MODERATE = 2
    SEVERE = 3

def get_random_val(lower_bound: float, upper_bound: float):
    return lower_bound + random.random() * (upper_bound - lower_bound)

def get_random_error_rate(level: LinkErrorType):
    return get_random_val(error_rates_bound[level][0], error_rates_bound[level][1])

def get_server_name(pod_id: int, edge_id: int):
    return "%s[%d]-%s[%d]-%s" % (pod_name, pod_id, edge_name, edge_id, server_name)

def get_edge_name(pod_id: int, edge_id: int):
    return "%s[%d]-%s[%d]" % (pod_name, pod_id, edge_name, edge_id)

def get_aggregation_name(pod_id: int, aggregation_id: int):
    return "%s[%d]-%s[%d]" % (pod_name, pod_id, aggregation_name, aggregation_id)

def get_core_name(plane_id: int, core_id: int):
    return "%s[%d]-%s[%d]" % (plane_name, plane_id, core_name, core_id)

def init():
    global pod_no, plane_no, edge_no, \
           core_no, aggregation_no,   \
           first_tier_n_links,        \
           second_tier_n_links
    random.seed(my_random_seed)
    first_tier_n_links = pod_no * edge_no * aggregation_no
    second_tier_n_links = pod_no * aggregation_no * core_no

def gen_first_tier_falty_links():
    ret = []
    visited = set()
    n_falty_links = int(first_tier_n_links * faulty_link_ratio)
    n_minorly_faulty_link = int(n_falty_links * minorly_faulty_link_ratio)
    n_moderately_faulty_link = int(n_falty_links * moderately_faulty_link_ratio)
    n_severely_faulty_link = n_falty_links - n_minorly_faulty_link - n_moderately_faulty_link

    nLinks = 0
    def get_error_rate():
        if nLinks >= n_falty_links:
            return get_random_error_rate(LinkErrorType.NORMAL)
        elif nLinks >= n_minorly_faulty_link + n_moderately_faulty_link:
            return get_random_error_rate(LinkErrorType.SEVERE)
        elif nLinks >= n_minorly_faulty_link:
            return get_random_error_rate(LinkErrorType.MODERATE)
        else:
            return get_random_error_rate(LinkErrorType.MINOR)
    
    def get_random_link():
        nonlocal visited, nLinks
        test_time = 0
        while test_time < 50:
            test_time += 1
            pod_id = random.randrange(0, pod_no)
            edge_id = random.randrange(0, edge_no)
            aggregation_id = random.randrange(0, aggregation_no)
            tmp = (pod_id, edge_id, aggregation_id)
            if tmp in visited:
                continue
            visited.add(tmp)
            result = [get_edge_name(pod_id, edge_id), get_aggregation_name(pod_id, aggregation_id), get_error_rate()]
            nLinks += 1
            return result
        raise RuntimeError(
            "There are too many conflicts!"
            " I think the topology is too small"
            " while the number of tasks is too large."
        )
    
    for i in range(n_falty_links):
        ret.append(get_random_link())
    
    # for pod_id in range(pod_no):
    #     for edge_id in range(edge_no):
    #         for aggregation_id in range(aggregation_no):
    #             tmp = (pod_id, edge_id, aggregation_id)
    #             if tmp not in visited:
    #                 ret.append([get_edge_name(pod_id, edge_id), get_aggregation_name(pod_id, aggregation_id), get_error_rate()])
    #                 nLinks += 1
    
    return ret

def gen_second_tier_falty_links():
    ret = []
    visited = set()
    n_falty_links = int(second_tier_n_links * faulty_link_ratio)
    n_minorly_faulty_link = int(n_falty_links * minorly_faulty_link_ratio)
    n_moderately_faulty_link = int(n_falty_links * moderately_faulty_link_ratio)
    n_severely_faulty_link = n_falty_links - n_minorly_faulty_link - n_moderately_faulty_link

    nLinks = 0
    def get_error_rate():
        if nLinks >= n_falty_links:
            return get_random_error_rate(LinkErrorType.NORMAL)
        elif nLinks >= n_minorly_faulty_link + n_moderately_faulty_link:
            return get_random_error_rate(LinkErrorType.SEVERE)
        elif nLinks >= n_minorly_faulty_link:
            return get_random_error_rate(LinkErrorType.MODERATE)
        else:
            return get_random_error_rate(LinkErrorType.MINOR)
    
    def get_random_link():
        nonlocal visited, nLinks
        test_time = 0
        while test_time < 50:
            test_time += 1
            pod_id = random.randrange(0, pod_no)
            aggregation_id = random.randrange(0, aggregation_no)
            core_id = random.randrange(0, core_no)
            tmp = (pod_id, aggregation_id, core_id)
            if tmp in visited:
                continue
            visited.add(tmp)
            result = [get_aggregation_name(pod_id, aggregation_id), get_core_name(aggregation_id, core_id), get_error_rate()]
            nLinks += 1
            return result
        raise RuntimeError(
            "There are too many conflicts!"
            " I think the topology is too small"
            " while the number of tasks is too large."
        )
    
    for i in range(n_falty_links):
        ret.append(get_random_link())
    
    # for pod_id in range(pod_no):
    #     for aggregation_id in range(aggregation_no):
    #         for core_id in range(core_no):
    #             tmp = (pod_id, aggregation_id, core_id)
    #             if tmp not in visited:
    #                 ret.append([get_aggregation_name(pod_id, aggregation_id), get_core_name(aggregation_id, core_id), get_error_rate()])
    #                 nLinks += 1
    
    return ret

if __name__ == '__main__':
    
    init()

    links = gen_first_tier_falty_links() + gen_second_tier_falty_links()
    output_file = open(output_file_name, 'w')
    for link in links:
        output_file.write("%s, %s, %f\n" % (link[0], link[1], link[2]))
    output_file.close()