"""
Date: 2021.2.13
Author: Justin

要点说明：
1. 加载Pandas库
2. 用DataFrame方法生成二维表格数据
"""

import pandas as pd

# 声明一个字典，记录水果店里不同水果的最近三天的存货箱数
fruit_dict = {'apple': [30, 30, 50],
              'banana': [10, 40, 20],              
              'orange': [40, 20, 20],
              'cherry': [10, 50, 20],
              'grape': [50, 30, 20],
              }

df = pd.DataFrame(fruit_dict)  
# 注意，在DataFrame中，字典的键转换成各列的标签，即表格的标题行
print(df)