"""
Date: 2021.2.10
Author: Justin

要点说明：
1. 用DataFrame方法生成二维表格数据
2. 设定行列标签
3. 用numpy库随机生成二维表格的数据
4. 学习完本程序，就掌握了生成大规模数据的能力
"""

import pandas as pd
import numpy as np

# 水果名称，用作表格的列标签（表格的标题行）
fruit_list = ['apple', 'banana', 'orange', 'cherry', 'grape']
# 生成日期，指定起始日期和数量
dates = pd.date_range('20210101', periods=3)

# 生成二维表格
# 首个参数指定每个单元格填的数字，这里是10。所有单元格数字相同
# index参数指定各行的标签，即表格的首列
# column参数指定各列的标签，即表格的首行
df = pd.DataFrame(10, index=dates, columns=fruit_list)
print(df)

print('-'*50)

# 生成二维表格，随机生成3行5列的整数，数值范围是0~100（不包括100）
df = pd.DataFrame(np.random.randint(0,100,size=(3,5)), 
                  # 该函数的参数含义为：下限0，上限100，数量3行5列
                  index=dates,  
                  columns=fruit_list  
                  )
print(df)

