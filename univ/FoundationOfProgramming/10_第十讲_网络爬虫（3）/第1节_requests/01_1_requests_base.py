# -*- coding: utf-8 -*-
"""
Created on Fri Apr 23 11:16:24 2021
该示例来自《Python程序设计》唐大仕 编著 P197,作相应改动
"""

# coding:utf-8
import requests
url = "https://www.baidu.com"
#F12,Network选项卡下点击左侧Name中的www.baidu.com,再点击Headers，找到RequestHeaders中的User-Agent
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"} #Mozilla/5.0 (Windows NT 10.0; WOW64)
response = requests.get(url, headers=headers)
#print(type(response))
html = response.text
print("网页内容:", html, "......")
print("响应状态码:", response.status_code)

