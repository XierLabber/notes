"""
Date: 2021.2.10
Author: Justin

要点说明：
读取CSV文件，生成DataFrame
"""

import pandas as pd

src_filename = './output/big_CSV_5000000.csv'  # 该文件由前一个程序示例生成

df = pd.read_csv(src_filename)
# 注意read_csv是pd的方法，写文件的to_csv是df的方法

print(df)  # 打印整个表格
