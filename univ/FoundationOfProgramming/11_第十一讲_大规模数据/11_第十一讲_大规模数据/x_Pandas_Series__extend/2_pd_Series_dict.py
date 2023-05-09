"""
Date: 2021.2.10
Author: Justin

要点说明：
基于字典，生成一维表格数据
"""

import pandas as pd

# 声明一个字典，记录水果店里不同的水果和对应存货箱数
fruit_dict = {'apple': 30,
              'grape': 10,              
              'banana': 10,
              'pear': 50,
              'cherry': 40,
              }

s = pd.Series(fruit_dict)
print(s)

# 可以用类似列表的方式，访问Series对象内部的元素
print('-'*20)
print(s[0])  

print('-'*20)
print(s[1:3])  

print('-'*20)
print(s > 30)  # 检查存货是否超过30箱