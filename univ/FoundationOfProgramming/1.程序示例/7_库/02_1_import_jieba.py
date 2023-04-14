"""
Date: 2020.12.01
Author: Justin

要点说明：
1、jieba是用于中文分词的第三方库，需要提前安装
2、安装方法：连接互联网，在命令行运行：pip install jieba
3、掌握jieba.lcut()函数进行分词
"""

import jieba

txt = '北京大学创办于1898年，初名京师大学堂，是中国第一所国立综合性大学。'
word_list = jieba.lcut(txt)  # 精确模式，完整且不重复
print(word_list)

# print('-'*20)
# word_list = jieba.lcut(txt, cut_all=True) # 全模式，输出所有可能的词，会有冗余
# print(word_list)

