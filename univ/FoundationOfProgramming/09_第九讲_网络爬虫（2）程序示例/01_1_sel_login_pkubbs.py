# -*- coding: utf-8 -*-
"""
Created on Sat Apr 18 22:35:18 2020
@author: Justin
"""
'''
登录北大未名BBS，然后退出
'''

from selenium import webdriver
#from selenium.webdriver.common.keys import Keys
#from selenium.webdriver.support import expected_conditions as EC
#from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.by import By
import time

#---函数：从文件读取用户名和密码----
def get_username_password(target='test'): 
    username = 'test'
    password = '1234'

    in_filename = './data/userpass.csv'
    try:
        in_file = open(in_filename, 'r')
    except:
        print('打开文件失败：'+in_filename)
        return (username, password)
   
    line_list = in_file.readlines()
    
    for line in line_list:
        line = line.strip('\n') # 删除字符串末尾的换行符
        item_list = line.split(',') # 以英文逗号为分隔符，将字符串line切分为列表
        if item_list[0] == target: # 根据CSV中的首列，选择对应的账号、密码
            username = item_list[1]
            password = item_list[2]
            break
        
    return (username, password)

#----------------------------------------------
#---主程序
#------打开Chrome浏览器------------
browser = webdriver.Chrome()
browser.maximize_window()

browser.implicitly_wait(10)  # 隐式等待，参数设定查找元素时等待的最长秒数
browser.get('https://bbs.pku.edu.cn')
time.sleep(2)  # 延时，以便查看效果

#------登录------------
my_username, my_password = get_username_password('pkubbs') # 从文件读取账号密码
#my_username, my_password = '12345678','abcdefgh' # 直接设置账号密码

inbox_user = browser.find_element(By.NAME,'username')
inbox_user.clear()
inbox_user.send_keys(my_username)

inbox_pwd = browser.find_element(By.NAME,'password')
inbox_pwd.send_keys(my_password)

time.sleep(0.2)  # 延时，以便查看效果

login_link = browser.find_element(By.CSS_SELECTOR,'#page-login > div.main-container > div.panel > div.form > a.button.red')
login_link.click()

#page-login > div.main-container > div.panel > div.form > a.button.red

time.sleep(3)  # 延时，以便查看效果
print(browser.current_url)

# 输出页面代码到本地文件
out_file = open('./output/pkubbs_01.html', 'w', encoding='utf-8')
out_file.write(browser.page_source)
out_file.close()

#------退出------------
time.sleep(5)  # 延时，以便查看填写效果
setting_link = browser.find_element(By.CSS_SELECTOR,'#icon-setting')
setting_link.click()
time.sleep(1)  # 延时，以便查看填写效果
quit_link = browser.find_element(By.CSS_SELECTOR,'#top-nav > div > div > div.right-icons > div.extend-menu.setting-extend-menu > div > a.btn-logout')
quit_link.click()

time.sleep(5)
browser.close()