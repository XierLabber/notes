"""
Date: 2021.04.19
Author: Justin

要点说明：
网络应用经常会出错，关键代码可以放在异常处理机制中
"""

from selenium import webdriver
import time

browser = webdriver.Chrome()

## 异常处理机制：try-except-finally结构
# 将容易出现异常情况（如网址打不开）的代码放在try模块中
# 如果执行过程中出现异常情况，会跳到excepty模块
# 如果正常执行完成，会跳到finally模块

try:  
    browser.get('https://www.pku.edu.cn') # 可将此处改成不存在的网址，触发异常
    time.sleep(5)
    print(browser.current_url)
#    print(browser.page_source)
except:  
    print('Something Wrong!')  
finally:
    print('Successful!')  
    time.sleep(3)
    browser.close()

# ==========================
# 为了简化，后续代码示例中都省略了异常处理
# ==========================