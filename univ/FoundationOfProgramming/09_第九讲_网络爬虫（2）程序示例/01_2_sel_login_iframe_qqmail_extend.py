# -*- coding: utf-8 -*-
"""
Created on Sat Apr 18 22:35:18 2020
@author: Justin
"""
'''
登录QQ邮箱，然后退出
'''

from selenium import webdriver
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
    
# 打开Chrome浏览器
browser = webdriver.Chrome()
browser.implicitly_wait(10)
browser.get('https://mail.qq.com')
browser.maximize_window() 
#切换iframe -- 这是个不容易发现的“陷阱”，不切换则找不到后面的id
browser.switch_to_frame("login_frame")

my_username, my_password = get_username_password('qqmail') # 从文件读取账号密码
#my_username, my_password = '12345678','abcdefgh' # 直接设置账号密码

inbox_user = browser.find_element(By.ID,'u')
inbox_user.clear()
inbox_user.send_keys(my_username)  # 账号

inbox_pwd = browser.find_element(By.ID,'p')
inbox_pwd.send_keys(my_password)   # 密码

time.sleep(2)  # 延时，以便查看填写效果

button = browser.find_element(By.ID,'login_button')
button.click()

input("登陆后请按回车")
time.sleep(8)  # 延时，以便查看登录后页面

quit_link = browser.find_element(By.LINK_TEXT,'退出')
quit_link.click()

time.sleep(3)  # 延时，以便查看退出后页面
browser.close()
