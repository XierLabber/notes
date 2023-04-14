from typing import List
from typing import Mapping
from typing import Tuple

class TimeStamp:
    second: int

class Switch:
    id: int
    
class RecordPerSwitch:
    IPid: int
    time_stamp: TimeStamp
    
class PathRecord:
    # 长度和对应的Flow.path相同
    record: List[RecordPerSwitch]

class Flow:
    id: int
    # 标识每一跳
    path: List[Switch]
    # 标识每次记录
    record: List[PathRecord]

class RecordOnSwitch:
    # Map: flow_id->( Map: ipid-> time_stamp或标识不存在 )
    Mapping[int, Mapping[int, TimeStamp]]

class Link:
    # 也许可以换成两端的名字？反正是个好用的码
    id: int
    record_of_input_node: RecordOnSwitch
    record_of_output_node: RecordOnSwitch