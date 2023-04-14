"""
Date: 2020.04.26
Author: Justin

要点说明：
用pyquery库的items函数，转换成“生成器”
遍历“生成器”，获取每个节点元素的各项属性
"""

from pyquery import PyQuery as pq

pq_doc = pq(filename='./data/css_example.html')  # 读取本地文件，生成PyQuery对象

print('='*20)
## 解析：选取所有p节点中的a节点中的img节点，并转换成“生成器”
item_list = pq_doc('p a img').items()
print(type(item_list))

print('-'*10)
img_url_list = []
## 遍历“生成器”中的所有节点元素，获取节点的属性
for item in item_list:
    img_url_list.append(item.attr('src'))
    #print(item)
    print(item.attr('src'))
    print(item.attr('width'))
    print(item.attr('height'))
    print('-'*5)

print('='*20)    
print(img_url_list)        

