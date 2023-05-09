# -*- coding: utf-8 -*-
"""
Created on Sat Apr  2 11:02:35 2022
本实例来自《Python程序设计》唐大仕 编著 P197 获取纸白银的实时价格
"""

#coding:utf-8
import requests
url = "http://quote.zhijinwang.com/xml/ag.txt?"
headers = {"Referer":"http://quote.zhijinwang.com/ag.swf",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64)"}
result = requests.get(url, headers=headers).text
print(result)
price = result.split("|")
print("买入价:", float(price[2]), "卖出价:", float(price[3]))

