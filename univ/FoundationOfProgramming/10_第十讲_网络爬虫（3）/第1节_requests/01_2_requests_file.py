# -*- coding: utf-8 -*-
"""
Created on Tue Apr 21 09:24:37 2020
@author: Justin
"""

import requests

url = 'https://www.pku.edu.cn/about.html'
#url = 'https://bbs.pku.edu.cn'
    
try:
    response = requests.get(url)
    print(response.status_code)  # 连接状态。如：200正常，404找不到
    response.raise_for_status()  # 如果未能成功连接，则产生异常
    response.encoding = response.apparent_encoding  # 设置编码格式，避免中文乱码
except:
    print("抓取网页失败")
else:
    # 提取本程序文件名，用于输出
    filepath = __file__.split("\\")#括号里为什么是这种写法，因为文件路径中的\需要转义
    this_filename = filepath[-1]
    out_filename = this_filename.split('.')[0]
    # 输出结果到本地文件

    out_file = open('.\output\{}.html'.format(out_filename), 'w', encoding='utf-8')
    out_file.write(response.text)
    out_file.close()

#    with open('.\output\{}.html'.format(out_filename),"w",encoding="utf-8") as f:
#         f.write(response.text)
