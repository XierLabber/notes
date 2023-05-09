"""
Date: 2021.2.10
Author: Justin

要点说明：
练习生成大规模数据
"""

import pandas as pd
import numpy as np

# 水果名称，用作表格的列标签（表格的标题行）
fruit_list = ['apple', 'banana', 'orange', 'cherry', 'grape']
# 生成日期，指定起始日期和数量
dates = pd.date_range('20010101', '20201231')  # 二十年，七千多天
print(len(dates))

print('-'*50)

# # 生成二维表格，填充随机生成的整数，数值范围是0~100（不包括100）
df = pd.DataFrame(np.random.randint(0,100,size=(len(dates),len(fruit_list))), 
                  # 参数含义为：下限，上限，数量
                  index=dates,
                  columns=fruit_list
                  )
print(df)  # 数据很多，输出时可能会省略

print('-'*50)

print(df.head(3))  # 输出开头指定数量的行，这里是3行
print(df.tail(3))  # 输出结尾指定数量的行，这里是3行

