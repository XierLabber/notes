"""
Date: 2021.2.10
Author: Justin

要点说明：
用DataFrame方法生成二维表格数据
设定每行的标签
"""

import pandas as pd

# 声明一个字典，记录最近三天不同水果的存货箱数
fruit_dict = {'apple': [30, 30, 50],
              'banana': [10, 40, 20],              
              'orange': [40, 20, 20],
              'cherry': [10, 50, 20],
              'grape': [50, 30, 20],
              }
date_list = ['2021-01-01', '2021-01-02', '2021-01-03']

df = pd.DataFrame(fruit_dict, index=date_list)  # 生成表格
# index参数指定各行的标签，即表格的首列
print(df)

print('-'*50)

# --------------------
# 用date_range方法生成日期，指定起始日期和数量
dates = pd.date_range('20210301', periods=3)

df = pd.DataFrame(fruit_dict, index=dates)  # 再次生成表格，效果一样
print(df)

print('-'*50)

# --------------------
# 用date_range方法生成日期，指定起始日期和结束日期
dates = pd.date_range('20210501', '20210503')

df = pd.DataFrame(fruit_dict, index=dates)  # 再次生成表格，效果一样
print(df)