"""
Date: 2020.10.13
Author: Justin

要点说明：
格式化输出
"""

name1 = '刘备'
num1 = 1024

print('主要人物' + name1 + '在这个故事中出现了' + str(num1) +'次。' )
# 上面这个打印语句中，有多处拼接操作，显得很杂乱

print('主要人物{}在这个故事中出现了{}次。'.format(name1, num1))
# 用{}配合字符串自带的format()函数，适用于字符串中掺杂多个变量的混合打印
# format()括号中的参数，会按顺序放到字符串中的{}指示的位置，简洁明了

print('主要人物{}在这个故事中出现了{}次。'.format('关羽', 750))
# format中可以填写变量或直接写值，不用做类型转换