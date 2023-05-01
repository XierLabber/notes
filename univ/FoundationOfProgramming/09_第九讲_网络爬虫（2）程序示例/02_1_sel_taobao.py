# -*- coding: utf-8 -*-
"""
Created on Sun Apr 26 00:08:47 2020
@author: Justin
"""
'''
尝试用selenium在淘宝搜索商品
在登录界面手工输入用户名、密码，观察淘宝的反爬虫机制
'''
from selenium import webdriver
import time

browser = webdriver.Chrome()
browser.maximize_window()

word = '手机'
browser.get('https://s.taobao.com/search?q='+word)


#time.sleep(10)
#browser.close()