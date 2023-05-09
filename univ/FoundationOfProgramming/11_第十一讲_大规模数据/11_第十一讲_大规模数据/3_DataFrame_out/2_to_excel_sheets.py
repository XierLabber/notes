"""
Date: 2021.2.14
Author: Justin

要点说明：
pandas.to_excel()函数
生成一个Excel文件，包含多个工作表（Sheet）
此时需要使用ExcelWriter对象
"""

import pandas as pd

# 用字典生成一个DataFrame
fruit_dict = {'apple': [30, 30, 50],
              'banana': [10, 40, 20],              
              'orange': [40, 20, 20],
              'cherry': [10, 50, 20],
              'grape': [50, 30, 20],
              }

df = pd.DataFrame(fruit_dict)  

# ------------------------------
# 输出多个工作表（Sheet）到目标文件
trgt_filename = './output/fruit_store_part2.xlsx'

# 先用目标文件名生成一个ExcelWriter对象，可以理解为一个“容器”
writer = pd.ExcelWriter(trgt_filename)  # 注意，这里是pd的方法，不是df的

# 生成多个工作表（Sheet），输出到“容器”里
# 这里为了简便，使用了同一个DataFrame(df)，实际应用中通常是多个不同的df
df.to_excel(writer, '总店-节选1')  # 指定不同的工作表名称  
df.to_excel(writer, '总店-节选2')  
df.to_excel(writer, '总店-节选3')

# 保存到目标文件
writer.save()  # 此时生成目标文件