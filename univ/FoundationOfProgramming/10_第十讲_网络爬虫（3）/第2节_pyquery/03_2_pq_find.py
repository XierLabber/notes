"""
Date: 2023.04.10

要点说明：
用pyquery库的find函数，通过CSS选择器进行解析
"""

from pyquery import PyQuery as pq

pq_doc = pq(filename='./data/css_example.html')  # 读取本地文件，生成PyQuery对象

print('='*20)

pq_items = pq_doc('.highlight_text')
print(type(pq_items))
print('-'*10)
print(pq_items)
#for item in pq_items.items():
#    print(item.text())

pq_ps = pq_items.find('p')
print(type(pq_ps))      
print('-'*20)        
print(pq_ps)
#for item in pq_ps:
#    print(item.text)
