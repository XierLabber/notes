"""
Date: 2021.2.14
Author: Justin

要点说明：
1. 生成大规模数据，写入Excel文件
2. Excel处理大规模数据（如100万行以上）会很慢，此时适合用Pandas处理
"""

import pandas as pd
import numpy as np

# =============================================================================
# 修改下面的num变量即可
# num指定了生成Excel的行数，可以尝试1万、10万、100万、200万等
# 通常到10万会感到明显延迟，100万就会很慢，Excel打开和处理也很慢
# 200万会报错，目前Excel支持的最大行列数为：1048576, 16384
# =============================================================================
num = 100000



dates = pd.date_range('2021-01-01 00:00:00', periods=num, freq='S')  
fruit_list = ['apple', 'banana', 'orange', 'cherry', 'grape']

# 生成二维表格
df = pd.DataFrame(np.random.randint(0,1000,size=(len(dates),len(fruit_list))), 
                  # 参数含义为：下限，上限，数量
                  index=dates,
                  columns=fruit_list
                  )
print(df)  # 此处会自动简略打印

# 写入Excel文件
trgt_filename = 'big_Excel_{}.xlsx'.format(num)
df.to_excel(trgt_filename)