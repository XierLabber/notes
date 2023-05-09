"""
Date: 2021.2.15
Author: Justin

本程序仅用于展示Pandas快速处理大规模数据的能力
大致了解步骤和功能即可，无需掌握细节。细节后续会逐步学习
要点说明：
1. 生成大规模数据的表格
2. 进行计算，插入表格
3. 对表格中数据排序
4. 筛选符合条件的数据

需要说明的是，Excel打开和保存大规模数据速度慢，是文件读写的速度，Pandas也会如此
Pandas的优势在于处理数据的速度比Excel快，规模也比Excel大
"""

import pandas as pd
import numpy as np

# =============================================================================
# 假想场景：某大规模电商的仓库，记录水果存货箱数每秒钟的变化
# =============================================================================

num = 5000000  # 生成表格的行数，尝试500万，远超Excel的处理能力
# 注：目前Excel支持的最大行列数为：1048576, 16384

# 生成时间序列，指定起始时间和数量。用作表格的首列
dates = pd.date_range('2021-01-01 00:00:00', periods=num, freq='S')  
# print(len(dates))

# 水果名称，用作表格的列标签（表格的标题行）
fruit_list = ['apple', 'banana', 'orange', 'cherry', 'grape']

# 生成二维表格
df = pd.DataFrame(np.random.randint(0,1000,size=(len(dates),len(fruit_list))), 
                  # 参数含义为：下限，上限，数量
                  index=dates,
                  columns=fruit_list
                  )
print(df)  # 此处会自动简略打印

# --------------------
# 计算每行的累加和，插到第0列之后，名称为“SUM”
# 可以在100万行的Excel中尝试这个操作，会明显感觉到延迟，但还可以接受
sum_col = df.sum(axis=1)
df.insert(0, 'SUM', sum_col)
print(df)

print('-'*50)
# --------------------
# 按'SUM'列排序
# 可以在100万行的Excel中尝试这个操作，会特别慢，很可能会卡死
print(df.sort_values('SUM'))  

print('-'*50)
# --------------------
# 筛选出'apple'列小于3的行，即苹果数量少于3箱的时刻
# 可以在100万行的Excel中尝试这个操作，……
print(df[df['apple'] < 3])

# 注意，上面有两层df[]
# 内层的df[]是按判断条件把每行标记成True或False。可以试试只打印内层df[]，看是什么效果
# 外层的df[]把是True的行筛选出来
