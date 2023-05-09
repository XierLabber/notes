# -*- coding: utf-8 -*-
"""
Created on Tue Apr 21 09:24:37 2020
@author: Justin
"""
'''
用requests向百度提交搜索关键词
需要构造headers，伪装成浏览器访问
'''
import requests

# headers的信息可以在Chrome中查看获得
# 示例：在百度上搜索任意词，然后查看“开发者工具”-Network-Doc-Name-Headers-Request Headers
headers = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        }

#url = 'https://www.baidu.com/s?wd=北京大学'
#url = 'https://bbs.pku.edu.cn'
url = 'https://baike.baidu.com/item/北京大学'
try:
    response = requests.get(url, headers=headers)  
    print(response.status_code)  # 连接状态。如：200正常，404找不到
    print(response.request.url)  # 返回信息中记录的请求网址
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