# -*- coding: utf-8 -*-
"""
Created on Mon Apr  6 22:32:48 2020
@author: Justin
"""
'''
打开百度网站搜索
为了防止加载时间长，设置了等待关键元素加载完成和最长加载时间
'''

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.by import By
import time

# 打开浏览器
browser = webdriver.Chrome()
wait = WebDriverWait(browser, 10) # 设置等待页面加载的最长超时时间

#---函数：保存当前页面--------------------------
def save_page(page_num=0):
    out_file = open('./output/baidu_search_{}.html'.format(page_num), 'w', encoding='utf-8')
    out_file.write(browser.page_source)
    out_file.close()

#---函数：搜索关键词--------------------------
def search(keyword):
    inbox = browser.find_element(By.ID, "kw") # 查找搜索输入框（提前检查html源码确认id）
    inbox.send_keys(keyword)
    time.sleep(0.1) # 避免操作速度过快
    inbox.send_keys(Keys.ENTER)
    wait.until(EC.presence_of_element_located(
            (By.ID, 'page')),message='in function search') # 等待页面底部的元素加载完成

#----------------------------------------------
#---主程序-------------------------------------
# 为了简化，省略了异常处理

browser.get('https://www.baidu.com')
search('北京大学')  # 搜索关键词
save_page() # 调用函数，保存当前html页面

time.sleep(3)  # 该延时只是为了演示时方便观察
browser.close()