"""
Date: 2020.04.06
Author: Justin

要点说明：
在浏览器中打开新的标签页
在不同标签页之间跳转
"""

import time
from selenium import webdriver

browser = webdriver.Chrome()
browser.maximize_window()  # 最大化窗口

browser.get('http://www.pku.edu.cn')
time.sleep(2)
browser.save_screenshot('./output/pku.png')

browser.execute_script('window.open()')  # 打开新的标签页
print(browser.window_handles)  # 打印当前所有标签页的“句柄”（类似于身份证号）

browser.switch_to.window(browser.window_handles[1])  # 切换到指定标签页
#注：switch_to_window 更新为 switch_to.window
browser.get('http://www.tsinghua.edu.cn')
time.sleep(2)
browser.save_screenshot('./output/thu.png')

browser.switch_to.window(browser.window_handles[0])  # 切换到指定标签页
browser.get('http://www.moe.gov.cn')
time.sleep(2)
browser.save_screenshot('./output/moe.png')

#time.sleep(5)
#browser.close()