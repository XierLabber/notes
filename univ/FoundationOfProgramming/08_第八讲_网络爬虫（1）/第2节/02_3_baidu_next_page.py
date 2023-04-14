# -*- coding: utf-8 -*-
"""
Created on Mon Apr  6 22:32:48 2020
@author: Justin
"""
'''
打开百度网站，搜索关键词
用点击“下一页”的方式翻页，保存若干搜索结果页面
需要找到合适的元素，表明页面加载完成
# 获取CSS_SELECTOR：Chrome开发者工具，在html源码的所需位置点击右键->Copy->Copy selector
'''

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.by import By
import time
import random

# 打开浏览器
browser = webdriver.Chrome()
wait = WebDriverWait(browser, 30) # 设置等待页面加载的最长超时时间

# 提取本程序文件名，用于输出
filepath = __file__.split('\\')
this_filename = filepath[-1]
out_filename = this_filename.split('.')[0]

#---函数：保存当前页面--------------------------
def save_page(page_num=0):
    out_file = open('./output/{0}_{1}.html'.format(out_filename,page_num), 'w', encoding='utf-8')
    out_file.write(browser.page_source)
    out_file.close()
    print('保存第{}页'.format(page_num))

#---函数：搜索关键词--------------------------
def search(keyword):
    inbox = browser.find_element(By.ID, "kw") # 查找搜索输入框（提前检查html源码确认id）
    inbox.send_keys(keyword)
    time.sleep(0.1+random.random()) # 避免操作速度过快
    inbox.send_keys(Keys.ENTER)
    wait.until(EC.presence_of_element_located(
            (By.ID, 'page')),message='in function search') # 等待页面底部的元素加载完成

#---函数：翻到下一页--------------------------
def next_page():
    next_link = browser.find_element(By.LINK_TEXT,'下一页 >') # 根据链接文字查找元素
    next_link.click()  # 点击“下一页”链接
    print('翻到下一页')

#---函数：等待页面加载完成---------------------
def wait_page_load(pg_num):
    #time.sleep(1) # 若没有合适的元素用于判断页面加载完成，设置固定延时用于等待页面加载
    wait.until(EC.text_to_be_present_in_element(
                     (By.CSS_SELECTOR, '#page > div > strong > span'),str(pg_num)),
               message='in function wait_page_load') # 等待页面底部的当前页码出现，这里面的css selector经常变化，要进入源代码定位后查看，右键copy/copy selector
    print('第{}页加载完成'.format(pg_num))
    
  
#----------------------------------------------    
#---主程序-------------------------------------
# 为了简化，省略了异常处理

browser.get('https://www.baidu.com')
search('北京大学')
save_page(1)

for i in range(2,6): # 循环保存多页
    time.sleep(1+random.random()) # 适当延时1.x秒，规避网站反爬虫机制。非常重要！
    next_page() # 翻到下一页
    wait_page_load(i) # 等待页面加载完成
    save_page(i) # 调用函数，保存当前html页面
    
time.sleep(1)  # 该延时只是为了演示时方便观察
browser.close()