"""
Date: 2021.2.14
Author: Justin

要点说明：
pandas.read_excel()函数的参数详解：
1. io，要读取的Excel文件的路径
2. sheet_name，要读取的工作表名称或编号
3. header， 指定某一行作为各列的名称
4. names， 自定义各列的名称
5. index_col， 指定某一列作为索引
6. usecols，指定需要读取哪些列
7. squeeze，当数据仅包含一列，是否存为Series类型
8. converters ，强制规定指定列的数据类型
9. skiprows，跳过开头的n行或者指定的行
10. nrows ，指定读取的行数（从头开始）
11. skipfooter ， 跳过末尾的n行

本程序重点展示如何读取Excel的一部分而非全部内容，以提高数据分析效率
该函数的参数众多，其他功能可自行探索
"""

import pandas as pd

src_filename = './data/fruit_store.xlsx'
sht_name = '总店' 

# ------------------------------
# 读取前n行数据（标题行不占n的计数）
df = pd.read_excel(src_filename, 
                   sheet_name=sht_name,
                   nrows=3,  # 读取标题行和前3行数据
                   )  
print(df)
print('-'*50)


# ------------------------------
# 跳过前n行，行号从0开始，包括标题行
df = pd.read_excel(src_filename, 
                   sheet_name='总店',
                   skiprows=2,  # 跳过前2行。注意，此时标题行也被跳过了
                   )  
print(df)
print('-'*50)


# ------------------------------
# 跳过指定的行，行号从0开始，包括标题行
df = pd.read_excel(src_filename, 
                   sheet_name='总店',
                   skiprows=[1,3],  # 跳过第1、3行
                   )  
print(df)
print('-'*50)


# ------------------------------
# 读取指定“编号”的列，列号从0开始
df = pd.read_excel(src_filename, 
                   sheet_name='总店',
                   usecols=[0,1,3,4],
                   )  
print(df)
print('-'*50)

# ------------------------------
# 读取指定“名称”的列
df = pd.read_excel(src_filename, 
                   sheet_name='总店',
                   usecols=['date','orange','grape'],
                   )  
print(df)
print('-'*50)
