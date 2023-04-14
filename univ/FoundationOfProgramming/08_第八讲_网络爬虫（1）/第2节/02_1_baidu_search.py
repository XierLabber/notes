"""
Date: 2020.04.06
Author: Justin

要点说明：
打开百度网站搜索
为了防止加载时间长，设置了等待关键元素加载完成和最长加载时间
"""

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.by import By#这一句一定要加，与通过ID找元素有关

import time
import random

# 打开浏览器
browser = webdriver.Chrome()

# 打开网站
browser.get('https://www.baidu.com')  

# 查找搜索输入框（提前检查html源码确认id）
#inbox = browser.find_element_by_id('kw') 
inbox = browser.find_element(By.ID, "kw")#2023年selenium新版本后的写法，之前是第26行的写法
# 输入和提交搜索关键词
inbox.send_keys('北京大学')  # 在搜索框中输入文字
#time.sleep(0.1+random.random()) # 防止操作速度过快
inbox.send_keys(Keys.ENTER)  # 在搜索框中输入“回车键”

# 等待页面加载
wait = WebDriverWait(browser, 30) # 设置等待页面加载的最长超时时间
wait.until(EC.presence_of_element_located((By.ID, 'page'))) # 等待页面底部的元素加载完成
# time.sleep(3)  # 也可以选择固定时间，用于等待页面加载完成
# print(browser.page_source)

# 保存当前页面
out_file = open('./output/baidu_search.html', 'w', encoding='utf-8')
out_file.write(browser.page_source)
out_file.close()

time.sleep(3)  # 该延时只是为了演示时方便观察

# 关闭浏览器
browser.close()  