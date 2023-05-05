"""
Date: 2020.04.26
Author: Justin

要点说明：
用pyquery库的items函数，转换成“生成器”
"""

from pyquery import PyQuery as pq

pq_doc = pq(filename='./data/css_example.html',parser="html")  # 读取本地文件，生成PyQuery对象

print('='*20)
## 解析：选取所有p节点中的a节点，并转换成“生成器”
pq_items = pq_doc('p a')
item_list = pq_items.items()
print(type(item_list))

print('-'*10)
## 遍历“生成器”中的所有节点元素，获取节点的属性
for item in item_list:
#    print(item)
    print(item.attr('href'))
    print(item.attr('target'))
    print(item.text())
    print('-'*5)

