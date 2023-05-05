"""
Date: 2020.04.26
Author: Justin

要点说明：
用pyquery库，通过CSS选择器进行解析
pyquery:Python的HTML/XML解析库
"""

from pyquery import PyQuery as pq

pq_doc = pq(filename='./data/css_example.html')#filename='./data/css_example.html')  # 读取本地文件，生成PyQuery对象

## 解析：先选取id=Tom的节点，再选取其内部所有p节点，不限于直属的层次。
pq_items = pq_doc('#Tom p') 
print(type(pq_items))
print('-'*20)
print(pq_items)
for item in pq_items:
    print(item.text)

'''
## 解析：先选取id=Tom的节点，再选取其内部直属的所有p节点。
##      即：只选“子节点”，不选“孙节点”、“曾孙节点”
print('-'*20)
pq_items = pq_doc('#Tom > p')
#print(pq_items)
for item in pq_items:
    print(item.text)



## 解析：1、先选取id=Tom的节点
##      2、再选取其内部所有class="highlight_text"的节点
##      3、然后选取其内部所有的p节点
print('-'*20) 
pq_items = pq_doc('#Tom .highlight_text p')
#print(pq_items)
for item in pq_items:
    print(item.text)
'''