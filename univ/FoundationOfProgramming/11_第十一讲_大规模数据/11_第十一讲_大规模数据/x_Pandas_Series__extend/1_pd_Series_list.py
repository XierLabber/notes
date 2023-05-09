"""
Date: 2021.2.10
Author: Justin

要点说明：
1. 加载pandas库
2. 用Series方法，基于列表生成一维表格数据
"""

import pandas as pd

s = pd.Series([60, 70, 80, 90, 100])  # 用列表生成一维数据的Series对象
print(s)

print('-'*20)
# 可以用类似列表的方式，访问Series对象内部的元素
print(s[0])  

print(s[1:3])  # 注意，切片访问多个元素时，会输出索引
print(s[:3])

# 可以对Series中的元素进行分析判断，给出布尔值的结果
print(s > 85)  
print(s < s.median())