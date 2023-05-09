"""
Date: 2021.2.10
Author: Justin

要点说明：
Series对象的运算
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

print(s + s)  # 将每项数据加倍
print(s * 10)  # 将每项数据乘以10
