"""
Date: 2021.2.14
Author: Justin

要点说明：
读取Excel文件时，强制转换数据类型
使用pandas.read_excel()函数的converters参数
"""

import pandas as pd

src_filename = './data/fruit_store.xlsx'
sht_name = '总店' 

# ------------------------------
# 强制规定指定列的数据类型
# Pandas读取到数字时，默认设为整形，可以强制规定成字符串或其它类型
# 注意，Pandas是基于numpy库，用的数据类型都是numpy中规定的
df = pd.read_excel(src_filename, 
                   sheet_name='总店',
                   converters={'apple':str, 'grape':float},
                   # 将'apple'列强制规定为字符串类型，'grape'列强制规定成浮点数类型
                   )  
print(df)
print('-'*50)

# 检查指定单元格的数据类型
print(type(df['apple'][0]))  # 字符串类型
print(type(df['grape'][0]))  # numpy库规定的浮点数类型
print(type(df['orange'][0]))  # numpy库规定的整数类型
print()

# 还可以用DataFrame自带的属性dtype，检查指定列的数据类型
print(df['apple'].dtype)
print(df['grape'].dtype)
print(df['orange'].dtype)

print('-'*50)
