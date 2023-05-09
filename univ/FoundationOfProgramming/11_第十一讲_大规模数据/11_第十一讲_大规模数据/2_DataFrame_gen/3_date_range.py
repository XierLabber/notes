"""
Date: 2021.2.14
Author: Justin

要点说明：
date_range()函数的功能详解
"""

import pandas as pd

print(pd.date_range('2021-01-01', periods=5))  # 默认freq = 'D'：每日历日
print(pd.date_range('2021-01-01', periods=5, freq='B'))  # B：每工作日
print(pd.date_range('2021-01-01', periods=5, freq='H'))  # H：每小时
print(pd.date_range('2021-01-01 12:00', periods=5, freq='T'))  # T/MIN：每分
print(pd.date_range('2021-01-01 12:00:00', periods=5, freq='S'))  # S：每秒
print(pd.date_range('2021-01-01 12:00:00', periods=5, freq='L'))  # L：每毫秒（千分之一秒）
print(pd.date_range('2021-01-01 12:00:00', periods=5, freq='U'))  # U：每微秒（百万分之一秒）

print('-'*50)
print(pd.date_range('2021-01-01', periods=5, freq='3H30T'))  # 3H30T：每3小时30分钟

print('-'*50)
print(pd.date_range('2021-01-01', periods=5, freq='W-TUE'))
# W-MON：指定的每个星期几
# 例如：W-MON为每星期一，W-TUE为每星期二
# 星期几缩写：MON/TUE/WED/THU/FRI/SAT/SUN

print(pd.date_range('2021-01-01', periods=5, freq='WOM-3TUE'))
# WOM-2MON：每月指定的第几个星期几
# 例如：“2MON”指第二个星期一，“3TUE”指第三个星期二


## --------------------
# freq参数还有更多丰富功能，例如：指定每季度最后一个工作日等。可以自行探索