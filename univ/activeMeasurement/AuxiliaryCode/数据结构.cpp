#include <map>
#include <vector>

typedef uint32_t TimeStamp;
typedef uint32_t LinkID;
typedef uint32_t SwitchID;
typedef uint32_t FlowID;
typedef uint32_t IPID;

class RecordPerSwitch{
    IPID IP_id;
    TimeStamp time_stamp;
};

class PathRecord{
    // 长度和对应的Flow.path相同
    std::vector<RecordPerSwitch> record;
};

class Flow{
    FlowID flow_id;
    // 标识每一跳交换机的id
    std::vector<SwitchID> path;
    // 标识每次路径的信息
    std::vector<PathRecord> records;
};

class RecordOnSwitch{
    std::map<FlowID, std::map<IPID, TimeStamp> > record;
};

class Link{
    LinkID link_id;
    RecordOnSwitch record_of_input_node;
    RecordOnSwitch record_of_output_node;
};