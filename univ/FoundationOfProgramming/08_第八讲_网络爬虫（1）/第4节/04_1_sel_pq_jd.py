# -*- coding: utf-8 -*-
"""
Created on Sun Apr 26 00:08:48 2020
@author: Justin
"""
'''
在京东网站上搜索商品
保存当前页的商品信息后，翻到指定页码继续保存商品信息
'''
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.by import By
from pyquery import PyQuery as pq
import time
import random

# 打开浏览器
browser = webdriver.Chrome()
#browser.maximize_window()
wait = WebDriverWait(browser, 60) # 设置等待页面加载的最长超时时间
## 注：正常情况设置10秒即可，因为京东新增了登录后搜索的要求，这里设置60秒，留够时间扫码登录

#---函数：搜索关键词--------------------------
def search(keyword):
    inbox = browser.find_element(By.ID,'keyword') # 查找搜索输入框（提前检查html源码确认id）
    inbox.send_keys(keyword)
    inbox.send_keys(Keys.ENTER)
    wait.until(EC.presence_of_element_located(
            (By.ID, 'J_bottomPage')),message='in function search') # 等待页面底部的元素加载完成

#---函数：翻到下一页--------------------------
def next_page():
    #下面代码用于控制侧边滚动条，拉到页面底端
    #该页面很长，不这么操作，未显示在屏幕范围内的页面内容不会被加载
    browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(1)
    #翻页动作
    nextpage_btn = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR,'#J_bottomPage > span.p-num > a.pn-next > em')))
    nextpage_btn.click()
    print('翻到下一页')

#---函数：翻到指定页，并等待页面加载完成--------------------------
def index_page(pg_num):
    #拉到页面底端，让页码输入框等元素得以加载
    browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(1)
    inbox = wait.until(EC.presence_of_element_located(
                             (By.CSS_SELECTOR, '#J_bottomPage > span.p-skip > input')),
                        message='in function index_page:inbox')
    submit_btn = wait.until(EC.presence_of_element_located(
                             (By.CSS_SELECTOR, '#J_bottomPage > span.p-skip > a')),
                        message='in function index_page:submit button')
    inbox.clear()
    inbox.send_keys(str(pg_num))
    submit_btn.click()
    print('翻到第{}页'.format(pg_num))

    
#---函数：等待指定页面加载完成---------------------
def wait_page_load(pg_num):
    #time.sleep(1) # 若没有合适的元素用于判断页面加载完成，设置固定延时用于等待页面加载
    wait.until(EC.text_to_be_present_in_element(
                     (By.CSS_SELECTOR, '#J_bottomPage > span.p-num > a.curr'),str(pg_num)),
               message='in function wait_page_load') # 等待页面底部的当前页码出现
    print('第{}页加载完成'.format(pg_num))

#---函数：获取商品信息---------------------
def get_goods():
    for i in range(100): # 慢慢向下滑动窗口，让所有商品信息加载完成
        browser.execute_script('window.scrollTo(0, {});'.format(i*100))
        time.sleep(0.1)
    
    pq_doc = pq(browser.page_source) 
   
    for i in range(1,61,10): # 每页包含60个商品，仅解析一部分作为测试
        #这里只是打印部分商品信息，进一步应该保存到文件中
        print('---{}---'.format(i))
        item = pq_doc('#J_goodsList > ul > li:nth-child({})'.format(i))  
        print(item.find('.p-img a > img').attr('src'))
        #print(item.find('.p-name.p-name-type-2 > a > em').text()) 
        print(item.find('.p-price > strong > i').text())
        
#----------------------------------------------    
#---主程序-------------------------------------

browser.get('https://search.jd.com')
search('冰箱')  # 搜索产品信息

wait_page_load(1)  # 等待第1页加载完成
get_goods()  # 获取当前页面的产品信息

for i in range(2,5): # 翻页并处理
    time.sleep(1+random.random()) # 适当延时1.x秒，规避网站反爬虫机制    
    index_page(i)  # 翻到第i页
    wait_page_load(i)  # 等待第i页加载完成
    get_goods()

time.sleep(1)
browser.close()