"""
Date: 2021.2.10
Author: Justin

要点说明：
1. 加载Pandas库
2. 基于字典，生成一维表格数据
"""

import pandas as pd

# 声明一个字典，记录水果店里不同的水果和对应存货箱数
fruit_dict = {'apple': 30,
              'banana': 10,              
              'orange': 40,
              'cherry': 10,
              'grape': 50,
              }

s = pd.Series(fruit_dict)
print(s)

# 可以用类似列表的方式，用编号访问Series对象内部的元素
print('-'*20)
print(s[0])  # 指定单个元素

print()
print(s[1:3])  # 指定多个元素

# 可以用类似字典的方式，用名称访问Series对象内部的元素
print('-'*20)
print(s['cherry'])  # 指定单个元素

print()
print(s[['banana','grape']])  # 指定多个元素
# 注意上面有两层方括号。这表示只传了一个参数，这个参数是列表类型
