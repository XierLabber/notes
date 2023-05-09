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
server_name: str = "SERVER"

# 这里是可配置的参数
epoch_length: int = 100 # 单位：秒
log_components: List[str] = []
coverage_requirement: int = 2
noise_loss: float = 1e-4

# ===== 拓扑，k = 0 则忽视后面的部分 =====
pod_no: int = 3
edge_no: int = 10
core_no: int = 2
aggregation_no: int = 4
# ====================================

# ============== d2c ==============
d2c_latency: str = "1ms"
d2c_loss_rate: float = 1e-4
# =================================

# =========== data-plane ===========
data_plane_delay: str = "2ms"
data_plane_data_rate: str = "512Mbps"
# ==================================

# ======= probe-application =======
probe_application_packet_size: int = 100
probe_application_probe_rate: str = "800bps"
# =================================

# =========== phase-ii ===========
phase_ii_transition_time: str = "10s"
phase_ii_counting_phase_I_coverage_time: str = "5s"
# ================================

# =========== bulk-sender ===========
bulk_senders : List[List[any]] = []
# ===================================

# ============ lossy-links ============
# 此变量置位True会自动读取lossy_links，否则需要手动指定
# 需要同时指定读取的文件
read_lossy_links_from_file: bool = True
lossy_links_file_name = './falty_links_output/falty_links_vl2.txt'
lossy_links: List[List[any]] = []
# =====================================

# ========== bursty-traffics ==========
bursty_traffics : List[List[any]] = []
# =====================================

# ============ 配置 link ============
# 子网掩码长度
subnet_mask_length: int = 30
subnet_mask_suffix: str # 会自动转成'/{subnet_mask_length}'
# 起始ip地址
running_ip = "10.0.1.0"
# ==================================

# ============ 配置 任务 ============
# 脚本中任务将自动计算，无需配置
# ==================================

# ============ 其他 配置 ===========
# 随机选择任务，每次选择中冲突超过此值会报错
max_choose_time = 20
# ==================================

# 配置参数
def init():
    global pod_no, edge_no, \
           core_no, aggregation_no, \
           subnet_mask_suffix
    
    subnet_mask_suffix = '/' + str(subnet_mask_length)

def get_server_name(pod_id: int, edge_id: int):
    return "%s[%d]-%s[%d]-%s" % (pod_name, pod_id, edge_name, edge_id, server_name)

def get_edge_name(pod_id: int, edge_id: int):
    return "%s[%d]-%s[%d]" % (pod_name, pod_id, edge_name, edge_id)

def get_aggregation_name(pod_id: int, aggregation_id: int):
    return "%s[%d]-%s[%d]" % (pod_name, pod_id, aggregation_name, aggregation_id)

def get_core_name(core_id: int):
    return "%s[%d]" % (core_name, core_id)

def gen_hosts():
    ret = []
    # 生成server层
    for i in range(pod_no):
        for j in range(edge_no):
            ret.append(get_server_name(i, j))
    return ret

def gen_switches():
    ret = []
    # 生成edge层
    for i in range(pod_no):
        for j in range(edge_no):
            ret.append(get_edge_name(i, j))
    # 生成aggregation层
    for i in range(pod_no):
        for j in range(aggregation_no):
            ret.append(get_aggregation_name(i, j))
    # 生成core层
    for i in range(core_no):
        ret.append(get_core_name(i))
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
    for core_id in range(core_no):
        node_node_ip_map[get_core_name(core_id)] = {}

def gen_links():

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
                [cur_server_name, cur_edge_name, cur_ip, subnet_mask_suffix]
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
                    [cur_edge_name, cur_aggregation_name, cur_ip, subnet_mask_suffix]
                )
                # 记录
                node_node_ip_map[cur_edge_name][cur_aggregation_name] = cur_ip
                node_node_ip_map[cur_aggregation_name][cur_edge_name] = cur_ip
    # 生成aggregation-core的链路
    for pod_id in range(pod_no):
        for aggregation_id in range(aggregation_no):
            cur_aggregation_name = get_aggregation_name(pod_id, aggregation_id)
            for core_id in range(core_no):
                cur_core_name = get_core_name(core_id)
                cur_ip = gen_next_ip()
                ret.append(
                    [cur_aggregation_name, cur_core_name, cur_ip, subnet_mask_suffix]
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

def gen_phase_i_tasks():

    chosen_tasks = set()
    d1 = pod_no * edge_no
    p1 = aggregation_no
    n1 = d1 * p1 * (math.log(p1) + (coverage_requirement - 1) * math.log(math.log(p1)))
    d2 = pod_no * aggregation_no
    p2 = core_no
    n2 = d2 * p2 * (math.log(p2) + (coverage_requirement - 1) * math.log(math.log(p2)))
    task_no = int(max(n1, n2))

    def randomly_choose_a_task(task_no: int):
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
            pod_id = task_no % pod_no
            edge_id = (task_no // pod_no) % edge_no
            host_name = get_server_name(pod_id, edge_id)
            ano_pod_id = random.randrange(0, pod_no - 1)
            if ano_pod_id >= pod_id:
                ano_pod_id += 1
            ano_edge_id = random.randrange(0, edge_no)
            if (pod_id, edge_id, ano_pod_id, ano_edge_id) in chosen_tasks:
                continue
            got_a_task = True
            chosen_tasks.add((pod_id, edge_id, ano_pod_id, ano_edge_id))
            # ano_edge_name = get_edge_name(ano_pod_id, ano_edge_id)
            ano_server_name = get_server_name(ano_pod_id, ano_edge_id)
            # map_ip = node_node_ip_map[ano_server_name][ano_edge_name]
            # dst_addr = int_to_ip(ip_to_int(map_ip) + 1)
            # ret = [host_name, dst_addr]
            ret = [host_name, ano_server_name]
        return ret

    ret = []

    for i in range(task_no):
        ret.append(randomly_choose_a_task(i))
    return ret

def gen_data_plane_to_control_plane():
    return {
        "latency": d2c_latency, 
        "loss-rate": d2c_loss_rate
    }

def gen_data_plane():
    return {
        "delay": data_plane_delay,
        "data-rate": data_plane_data_rate
    }

def gen_probe_application():
    return {
        "packet-size": probe_application_packet_size,
        "probe-rate": probe_application_probe_rate
    }

def gen_phase_ii():
    return {
        "transition-time": phase_ii_transition_time,
        "counting-phase-I-coverage-time": phase_ii_counting_phase_I_coverage_time
    }

def gen_lossy_links():
    global lossy_links
    if not read_lossy_links_from_file:
        return lossy_links
    lossy_links_tmp = []
    try:
        lossy_links_file = open(lossy_links_file_name, 'r')
        lossy_links_tmp = lossy_links_file.readlines()
    except Exception as e:
        print("不能打开文件%s" % lossy_links_file_name)
    finally:
        lossy_links_file.close()
    lossy_links_tmp = [x.split(', ') for x in lossy_links_tmp]
    lossy_links = [[x[0], x[1], float(x[2])] for x in lossy_links_tmp]
    return lossy_links

def gen_bulk_sender():
    return bulk_senders

def gen_bursty_traffic():
    return bursty_traffics

if __name__ == '__main__':
    
    init()

    jsontext = {
        "epoch-length": str(epoch_length) + "s",
        "coverage-requirement": coverage_requirement,
        "noise-loss": noise_loss,
        "log-components": log_components,
        "data-to-control-plane": gen_data_plane_to_control_plane(),
        "data-plane": gen_data_plane(),
        "probe-application": gen_probe_application(),
        "phase-ii": gen_phase_ii(),
        "topology": gen_topology(),
        "phase-I-tasks": gen_phase_i_tasks(),
        "lossy-link": gen_lossy_links(),
        "bulk-sender": gen_bulk_sender(),
        "bursty-traffic": gen_bursty_traffic()
    }

    output_file = open(output_file_name, 'w')
    output_file.write(json.dumps(jsontext, ensure_ascii=False, indent=4))
    output_file.close()