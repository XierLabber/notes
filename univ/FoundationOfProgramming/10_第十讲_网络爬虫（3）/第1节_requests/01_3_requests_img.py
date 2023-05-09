# -*- coding: utf-8 -*-
"""
Created on Sun Apr 26 13:17:06 2020
@author: Justin
"""
'''
用requests库，下载指定url的文件,并写入指定文件
'''
import requests

url = 'https://www.baidu.com/img/bd_logo1.png'

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
    out_file = open('./output/{}.png'.format(out_filename), 'wb')#以二进制格式打开一个文件只用于写入
    out_file.write(response.content)
    out_file.close()