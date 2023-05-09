"""
Date: 2021.2.13
Author: Justin

要点说明：
读取Excel文件中的指定工作表，生成DataFrame
多种指定方法，按名字、按编号等

"""

import pandas as pd

src_filename = './data/fruit_store.xlsx'

# 读取Excel文件，按名称指定工作表
df = pd.read_excel(src_filename, sheet_name='城南分店')  
print(df)  

print('-'*50)

# 读取Excel文件，按编号指定工作表
df = pd.read_excel(src_filename, sheet_name=0) # 工作表编号从0开始
print(df)  


