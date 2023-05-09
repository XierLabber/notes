"""
Date: 2021.2.14
Author: Justin

要点说明：
pandas.to_excel()函数
生成Excel文件，只包含一个工作表
"""

import pandas as pd

# 用字典生成一个DataFrame
fruit_dict = {'apple': [30, 30, 50],
              'banana': [10, 40, 20],              
              'orange': [40, 20, 20],
              'cherry': [10, 50, 20],
              'grape': [50, 30, 20],
              }

df = pd.DataFrame(fruit_dict)  

# ------------------------------
# 输出到Excel文件
trgt_filename = './output/fruit_store.xlsx'
df.to_excel(trgt_filename)

# 输出时，可以指定工作表的名称
df.to_excel(trgt_filename, sheet_name='总店-节选1')

# 注：如果多次输出到同一个文件，只会保存最后一次输出的工作表（Sheet）