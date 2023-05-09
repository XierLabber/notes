"""
Date: 2021.2.13
Author: Justin

要点说明：
读取Excel文件，生成DataFrame
"""

import pandas as pd

src_filename = './data/fruit_store.xlsx'
df = pd.read_excel(src_filename)  # 读取Excel文件，默认读取Sheet1

print(df)  # 打印整个表格