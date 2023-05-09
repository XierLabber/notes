"""
Date: 2021.2.17
Author: Justin

要点说明：
生成500万行大规模数据，Excel保存不下，尝试保存到CSV格式文件
"""

import pandas as pd
import numpy as np

# =============================================================================
# 假想场景：某大规模电商的仓库，记录水果存货箱数每秒钟的变化
# =============================================================================

num = 5000000  # 准备生成500万行数据
# 目前Excel支持的最大行列数为：1048576, 16384

# 生成时间序列，指定起始时间和数量
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
# 写入CSV文件
trgt_filename = './output/big_CSV_{}.csv'.format(num)
df.to_csv(trgt_filename)