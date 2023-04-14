"""
Date: 2020.04.06
Author: Justin

要点说明：
selenium库基本功能，打开网站
"""

from selenium import webdriver
import time

browser = webdriver.Chrome()

browser.get('https://www.pku.edu.cn')

time.sleep(5)  # 设置一个预估的延迟，等待网页加载完整

print(browser.current_url)
print(browser.page_source)

time.sleep(3)
browser.close()
