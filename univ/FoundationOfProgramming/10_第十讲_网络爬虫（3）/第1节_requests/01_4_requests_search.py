# -*- coding: utf-8 -*-
"""
Created on Tue Apr 21 09:24:37 2020
@author: Justin
"""
'''
用requests向百度提交搜索关键词，观察百度的反爬虫机制
'''

import requests

#url = 'https://baike.baidu.com/item/北京大学'
url = 'http://www.baidu.com/s?wd=北京大学'

try:
    response = requests.get(url)
    print(response.status_code)  # 连接状态。如：200正常，404找不到
    response.raise_for_status()  # 如果未能成功连接，则产生异常
    response.encoding = response.apparent_encoding  # 设置编码格式，避免中文乱码
except:
    print("抓取网页失败")
else:
    # 提取本程序文件名，用于输出
    filepath = __file__.split('\\')
    this_filename = filepath[-1]
    out_filename = this_filename.split('.')[0]
    # 输出结果到本地文件
    out_file = open('./output/{}.html'.format(out_filename), 'w', encoding='utf-8')
    out_file.write(response.text)
    out_file.close()