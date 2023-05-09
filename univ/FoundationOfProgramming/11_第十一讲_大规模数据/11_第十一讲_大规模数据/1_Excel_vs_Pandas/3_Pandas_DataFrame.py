"""
Date: 2021.2.13
Author: Justin

要点说明：
1. 加载Pandas库
2. 用DataFrame方法生成二维表格数据
3. DataFrame和Series是Pandas的两种核心数据结构，前者更为通用
4. 后续都基于DataFrame讲解Pandas
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


# 可以用类似字典的方式，用名称访问表格的列，进而再访问单元格
print('-'*50)
print(df['cherry'])  # 指定一列
print()
print(df['cherry'][1])  # 指定某列中的某行，即一个单元格
print()
print(df['cherry'][1:3])  # 指定某列中的某几行

print('-'*50)
print(df[['banana','grape']])  # 指定多行
# 注意上面有两层方括号。这表示只传了一个参数，这个参数是列表类型
