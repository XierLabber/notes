import json
from typing import List
import math
import random

# 输出文件
output_file_name: str = './topology_output/topo.json'

# 配置节点名
edge_name: str = "EDGE"
aggregation_name: str = "AGGREGATION"
core_name: str = "CORE"
pod_name: str = "POD"
plane_name: str = "PLANE"
server_name: str = "SERVER"

# 这里是可配置的参数
ecmp: bool = True
server_port: int = 9
epoch_length: int = 5 # 单位：秒
log_components: List[str] = []

# ===== 拓扑，k = 0 则忽视后面的部分 =====
k: int = 32 # 如果k不为0则认为使用胖树，否则手动配置各层节点数目
pod_no: int = 3
plane_no: int = 4
edge_no: int = 10
core_no: int = 2
aggregation_no: int = plane_no
# ====================================

# ============ 配置node ============
node_d2c_latency: str = ""
node_d2c_loss_rate: float = 0.1
node_error_model: str = ""
# 默认值，与默认值相同的项将会被忽略
default_node_d2c_latency: str = ""
default_node_d2c_loss_rate: float = 0
default_node_error_model: str = ""
# ==================================

# ============ 配置 link ============
link_data_rate: str = ""
link_delay: str = ""
link_error_model: str = ""
# 子网掩码长度
subnet_mask_length: int = 30
subnet_mask_suffix: str # 会自动转成'/{subnet_mask_length}'
# 起始ip地址
running_ip = "10.0.1.0"
# 默认值，与默认值相同的项将会被忽略
default_link_data_rate: str = ""
default_link_delay: str = ""
default_link_error_model: str = ""
# ==================================

# ============ 配置 任务 ============
# 播测多少path
# 如果想默认地配置task_no可以把init()注释掉的代码改掉
# 现在如果是fattree构架则会在init()中生成一个值覆盖掉它
task_no: int = 10
# 目标覆盖次数，将在init()构造默认拨测任务数时使用
coverage: int = 2
# 任务的开始时间
task_start_time: str = "0s"
task_probe_rate: str = "1Mbps"
task_packet_size: int = 128
# ==================================

# ============ 其他 配置 ===========
# 随机选择任务，每次选择中冲突超过此值会报错
max_choose_time = 20
# ==================================

# 配置参数
def init():
    global pod_no, plane_no, edge_no, \
           core_no, aggregation_no, \
           subnet_mask_suffix, task_no, \
           coverage
    
    subnet_mask_suffix = '/' + str(subnet_mask_length)
    
    if k != 0:
        pod_no = int(k)
        plane_no = int(k / 2)
        edge_no = int(k / 2)
        core_no = int(k / 2)
        aggregation_no = plane_no
        tmp = (k**3 / 8)
        task_no = math.ceil(tmp * math.log(tmp) + (coverage - 1) * tmp * math.log(math.log(tmp)))
    
    # 如果想默认地配置task_no可以把这块代码改掉
    # if task_no == 0:
    #     m = max(
    #         pod_no * aggregation_no * edge_no, 
    #         plane_no * pod_no * core_no
    #     )
    #     task_no = math.ceil(m * math.log(m))

def get_server_name(pod_id: int, edge_id: int):
    return "%s[%d]-%s[%d]-%s" % (pod_name, pod_id, edge_name, edge_id, server_name)

def get_edge_name(pod_id: int, edge_id: int):
    return "%s[%d]-%s[%d]" % (pod_name, pod_id, edge_name, edge_id)

def get_aggregation_name(pod_id: int, aggregation_id: int):
    return "%s[%d]-%s[%d]" % (pod_name, pod_id, aggregation_name, aggregation_id)

def get_core_name(plane_id: int, core_id: int):
    return "%s[%d]-%s[%d]" % (plane_name, plane_id, core_name, core_id)

def gen_node_attr():
    ret = {}
    if node_d2c_latency != default_node_d2c_latency:
        ret["d2c-latency"] = node_d2c_latency
    if node_d2c_loss_rate != default_node_d2c_loss_rate:
        ret["d2c-loss-rate"] = node_d2c_loss_rate
    if node_error_model != default_node_error_model:
        ret["error-model"] = node_error_model
    return ret

def gen_hosts():
    host_attr = gen_node_attr()
    ret = {}
    # 生成server层
    for i in range(pod_no):
        for j in range(edge_no):
            ret[get_server_name(i, j)] = host_attr
    return ret

def gen_switches():
    node_attr = gen_node_attr()
    ret = {}
    # 生成edge层
    for i in range(pod_no):
        for j in range(edge_no):
            ret[get_edge_name(i, j)] = node_attr
    # 生成aggregation层
    for i in range(pod_no):
        for j in range(aggregation_no):
            ret[get_aggregation_name(i, j)] = node_attr
    # 生成core层
    for i in range(plane_no):
        for j in range(core_no):
            ret[get_core_name(i, j)] = node_attr
    return ret

def ip_to_int(ip: str):
    tmp = [int(x) for x in ip.split('.')]
    sum = 0
    for i in range(len(tmp)):
        sum += 256 ** i * tmp[-(i + 1)]
    return sum

def int_to_ip(sum: int):
    my_list = []
    for i in range(4):
        my_list.append(sum % 256)
        sum = sum // 256
    my_list = my_list[::-1]
    ret = '.'.join([str(x) for x in my_list])
    return ret

def gen_next_ip():
    global running_ip
    cur_ip = running_ip
    step = 2 ** (32 - subnet_mask_length)
    sum = ip_to_int(cur_ip)
    sum += step
    running_ip = int_to_ip(sum)
    return cur_ip

# 根据前两个node的名字决定链路，返回子网的ip
node_node_ip_map = {}
# 把所有node对应的表项置为{}
def init_node_node_ip_map():
    global node_node_ip_map
    # 初始化map
    for pod_id in range(pod_no):
        for edge_id in range(edge_no):
            node_node_ip_map[get_server_name(pod_id, edge_id)] = {}
    for pod_id in range(pod_no):
        for edge_id in range(edge_no):
            node_node_ip_map[get_edge_name(pod_id, edge_id)] = {}
    for pod_id in range(pod_no):
        for aggregation_id in range(aggregation_no):
            node_node_ip_map[get_aggregation_name(pod_id, aggregation_id)] = {}
    for plane_id in range(plane_no):
        for core_id in range(core_no):
            node_node_ip_map[get_core_name(plane_id, core_id)] = {}

def gen_links():
    
    def gen_link_attr():
        ret = {}
        if link_data_rate != default_link_data_rate:
            ret["data-rate"] = link_data_rate
        if link_delay != default_link_delay:
            ret["delay"] = link_delay
        if link_error_model != default_link_error_model:
            ret["error-model"] = link_error_model
        return ret
    
    link_attr = gen_link_attr()
    
    global node_node_ip_map, running_ip
    init_node_node_ip_map()
    ret = []
    # 生成server-edge的链路
    for pod_id in range(pod_no):
        for edge_id in range(edge_no):
            cur_server_name = get_server_name(pod_id, edge_id)
            cur_edge_name = get_edge_name(pod_id, edge_id)
            cur_ip = gen_next_ip()
            ret.append(
                [cur_server_name, cur_edge_name, cur_ip, subnet_mask_suffix, link_attr]
            )
            # 记录
            node_node_ip_map[cur_server_name][cur_edge_name] = cur_ip
            node_node_ip_map[cur_edge_name][cur_server_name] = cur_ip
    # 生成edge-aggregation的链路
    for pod_id in range(pod_no):
        for edge_id in range(edge_no):
            cur_edge_name = get_edge_name(pod_id, edge_id)
            for aggregation_id in range(aggregation_no):
                cur_aggregation_name = get_aggregation_name(pod_id, aggregation_id)
                cur_ip = gen_next_ip()
                ret.append(
                    [cur_edge_name, cur_aggregation_name, cur_ip, subnet_mask_suffix, link_attr]
                )
                # 记录
                node_node_ip_map[cur_edge_name][cur_aggregation_name] = cur_ip
                node_node_ip_map[cur_aggregation_name][cur_edge_name] = cur_ip
    # 生成aggregation-core的链路
    for pod_id in range(pod_no):
        for aggregation_id in range(aggregation_no):
            plane_id = aggregation_id
            cur_aggregation_name = get_aggregation_name(pod_id, aggregation_id)
            for core_id in range(core_no):
                cur_core_name = get_core_name(plane_id, core_id)
                cur_ip = gen_next_ip()
                ret.append(
                    [cur_aggregation_name, cur_core_name, cur_ip, subnet_mask_suffix, link_attr]
                )
                # 记录
                node_node_ip_map[cur_aggregation_name][cur_core_name] = cur_ip
                node_node_ip_map[cur_core_name][cur_aggregation_name] = cur_ip
    return ret

def gen_topology():
    ret = {
        "links": gen_links(),
        "hosts": gen_hosts(),
        "switches": gen_switches()
    }
    return ret

def gen_probe_tasks():
    
    def gen_task_attr():
        ret = {}
        ret["probe-rate"] = task_probe_rate
        ret["packet-size"] = task_packet_size
        return ret
    
    task_attr = gen_task_attr()
    chosen_tasks = set()
    
    def randomly_choose_a_task():
        got_a_task = False
        random_time = 0
        ret = []
        while not got_a_task:
            random_time += 1
            if random_time > max_choose_time:
                raise RuntimeError(
                    "There are too many conflicts!"
                    " I think the topology is too small"
                    " while the number of tasks is too large."
                )
            pod_id = random.randrange(0, pod_no)
            edge_id = random.randrange(0, edge_no)
            host_name = get_server_name(pod_id, edge_id)
            ano_pod_id = random.randrange(0, pod_no - 1)
            if ano_pod_id >= pod_id:
                ano_pod_id += 1
            ano_edge_id = random.randrange(0, edge_no)
            if (pod_id, edge_id, ano_pod_id, ano_edge_id) in chosen_tasks:
                continue
            got_a_task = True
            chosen_tasks.add((pod_id, edge_id, ano_pod_id, ano_edge_id))
            ano_edge_name = get_edge_name(ano_pod_id, ano_edge_id)
            ano_server_name = get_server_name(ano_pod_id, ano_edge_id)
            map_ip = node_node_ip_map[ano_server_name][ano_edge_name]
            dst_addr = int_to_ip(ip_to_int(map_ip) + 1)
            ret = [host_name, dst_addr, task_start_time, task_attr]
        return ret
    
    ret = []
    
    for i in range(task_no):
        ret.append(randomly_choose_a_task())
    return ret

if __name__ == '__main__':
    
    init()

    jsontext = {
        "ecmp": ecmp,
        "log-components": log_components,
        "topology": gen_topology(),
        "epoch-length": str(epoch_length) + "s",
        "server-port": server_port, 
        "probe-tasks": gen_probe_tasks()
    }

    output_file = open(output_file_name, 'w')
    output_file.write(json.dumps(jsontext, ensure_ascii=False, indent=4))
    output_file.close()