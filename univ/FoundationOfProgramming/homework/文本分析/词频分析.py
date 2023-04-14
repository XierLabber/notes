import jieba
import jieba.posseg as pseg
from pyecharts import options as opts
from pyecharts.charts import Graph
from pyecharts.charts import WordCloud

display_num = 108

list_file_name = './data/水浒传108将.txt'
text_file_name = './data/水浒传_施耐庵.txt'
node_file_name = './output/水浒传-词频.csv'
link_file_name = './output/水浒传-共现.csv'

do_analysis = False

if do_analysis:
    test = open(node_file_name, 'w')
    test.close()

    text_file = open(text_file_name, 'r')
    line_lists = text_file.readlines()
    text_file.close()

    print("开始生成人名集合")

    list_file = open(list_file_name, 'r')
    name_list = list_file.readline().split(',')
    name_list_set = set(name_list)

    print("生成结束")

    line_name_list_raw = []
    name_cnt_dict = {}
    print("开始切词&统计信息")

    for line in line_lists:
        word_gen = pseg.cut(line)
        line_name_list_raw.append([])
        
        for one in word_gen:
            word = one.word
            flag = one.flag

            if word not in name_list_set:
                continue

            if flag == 'nr':
                line_name_list_raw[-1].append(word)
                if word in name_cnt_dict.keys():
                    name_cnt_dict[word] += 1
                else:
                    name_cnt_dict[word] = 1

    print("切词完毕")
    print("开始排序&加工列表")

    name_cnt_list = list(name_cnt_dict.items())
    name_cnt_list.sort(key=lambda x:x[1], reverse=True)
    name_cnt_list = name_cnt_list[:display_num]
    name_set = set(x[0] for x in name_cnt_list)
    name_cnt_dict = {}
    for x in name_cnt_list:
        name_cnt_dict[x[0]] = x[1]

    relation_dict = {}

    line_name_list = []
    for line_name in line_name_list_raw:
        line_name_list.append([])
        occur_set = set()
        for x in line_name:
            if x in name_set and x not in occur_set:
                line_name_list[-1].append(x)
                occur_set.add(x)

    print("加工完毕")
    print("开始统计共现关系")

    for line_name in line_name_list_raw:
        for name1 in line_name:
            relation_dict[name1] = {}
            for name2 in line_name:
                if name2 == name1:
                    continue
                if name2 in relation_dict[name1]:
                    relation_dict[name1][name2] += 1
                else:
                    relation_dict[name1][name2] = 1

    print("统计完毕")
    print("开始写入")

    node_file = open(node_file_name, 'w')
    # node_file.write('Name, Weight')
    for name, cnt in name_cnt_dict.items():
        node_file.write(name + ',' + str(cnt) + '\n')
    node_file.close()

    link_file = open(link_file_name, 'w')
    for name1, link_dict in relation_dict.items():
        for name2, link in link_dict.items():
            link_file.write(name1 + ',' + name2 + ',' + str(link) + '\n')
    link_file.close()

    print("写入完毕")
# print("开始准备边与点")

# node_file = open(node_file_name, 'r')
# nodes = []
# node_lines = node_file.readlines()
# for node_line in node_lines:
#     name, size = node_line.split(',')
#     size = int(size)
    
#     def get_size():
#         cur_size = size
#         cur_size /= 10
#         cur_size += 5
#         if cur_size >= 50:
#             cur_size = 50 + (cur_size - 50) / 10
#         return cur_size

#     nodes.append(opts.GraphNode(
#         name=name, value=size, symbol_size=get_size()
#     ))


# link_file = open(link_file_name, 'r')
# links = []
# link_lines = link_file.readlines()
# for link_line in link_lines:
#     name1, name2, value = link_line.split(',')
#     value = int(value)
    
#     def get_value():
#         return int(100 / value)
    
#     links.append(opts.GraphLink(
#         source=name1, target=name2, value=get_value()
#     ))

# print("准备完毕")
# print("开始画图")

# c = Graph()

# c.add("水浒传人物关系图",
#       nodes,
#       links,
#       edge_length=[10, 100],
#       repulsion=1000
#       )

# c.set_global_opts(title_opts=opts.TitleOpts(title="水浒传人物关系图"))

# c.render('./output/水浒传人物关系图.html')

# print("画图完毕")

node_file = open(node_file_name, 'r')
nodes = []
node_lines = node_file.readlines()
for node_line in node_lines:
    name, size = node_line.split(',')
    size = int(size)
    nodes.append((name, size))

cloud = WordCloud()

cloud.add('水浒传人物出现词云图',
          nodes, 
          shape='pentagon',
          is_draw_out_of_bound=False, #允许词云超出画布边界
          word_size_range=[10, 100], #字体大小范围
          textstyle_opts=opts.TextStyleOpts(font_family="华文行楷"),
          )

cloud.set_global_opts(title_opts=opts.TitleOpts(title="水浒人物词云"))

out_filename = './output/水浒传人物出现词云图.html'
cloud.render(out_filename)