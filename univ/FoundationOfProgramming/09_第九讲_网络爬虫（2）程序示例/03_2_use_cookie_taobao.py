# -*- coding: utf-8 -*-
"""
Created on Wed Apr 29 23:04:41 2020
@author: Justin
"""
'''
使用事先保存在本地的cookies，登录淘宝网站
'''
import json
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

options = Options()
#options.add_argument("--headless")  # 不打开浏览器界面，以节省时间
browser = webdriver.Chrome(options=options)

# 先建立连接, 随后才可以可修改cookie
browser.get('http://www.taobao.com')
browser.maximize_window()
# 删除这次登录时，浏览器自动储存到本地的cookie
browser.delete_all_cookies()

# 读取之前已经储存到本地的cookie
cookies_filename = './output/cookies_taobao.json'
cookies_file = open(cookies_filename, 'r', encoding='utf-8')
cookies_list = json.loads(cookies_file.read())
print(cookies_list)

for cookie in cookies_list:  # 把cookie添加到本次连接
    browser.add_cookie({
        'domain': '.taobao.com',  # 此处xxx.com前，需要带点
        'name': cookie['name'],
        'value': cookie['value'],
        'path': '/',
        'expires': None
    })

# 再次访问网站，由于cookie的作用，从而实现免登陆访问
browser.get("https://www.taobao.com")
time.sleep(3)

# 将页面保存为图片，便于查看是否登录成功
browser.save_screenshot("./output/taobao_login.png")

# 登录后搜索商品
keyword = '洗衣机'
inbox = browser.find_element(By.ID,'q') # 查找搜索输入框（提前检查html源码确认id）
inbox.send_keys(keyword)
inbox.send_keys(Keys.ENTER)
time.sleep(3)

# 将页面保存为图片，便于查看是否登录成功
browser.save_screenshot("./output/taobao_product.png")

time.sleep(6)
browser.close()
