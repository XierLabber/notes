"""
Date: 2021.2.10
Author: Justin

要点说明：
用类似字典的方式访问Series对象的数据
"""

import pandas as pd

# 声明一个字典，不同的水果和对应存货箱数
fruit_dict = {'apple': 30,
              'grape': 10,              
              'banana': 10,
              'pear': 50,
              'cherry': 40,
              }

s = pd.Series(fruit_dict)

print(s['pear'])
print('cherry' in s)

# 与字典一样，访问不存在的标签会报错，如下面的代码
# print(s['olive'])  