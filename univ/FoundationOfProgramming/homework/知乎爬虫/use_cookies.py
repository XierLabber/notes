import json
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait

# 注：如果需要在从excel中读数据请把这项改为'gbk'，否则改为'utf-8'
encoding = 'utf-8'

options = Options()
browser = webdriver.Chrome(options=options)
wait = WebDriverWait(browser, 30)

browser.get('https://www.zhihu.com/hot')
browser.maximize_window()
browser.delete_all_cookies()

cookies_filename = './output/my_cookies.json'
cookies_file = open(cookies_filename, 'r', encoding='utf-8')
cookies_list = json.loads(cookies_file.read())

for cookie in cookies_list:
    browser.add_cookie({
        'domain' : '.zhihu.com',
        'name' : cookie['name'],
        'value' : cookie['value'],
        'path' : '/hot',
        'expires' : None
    })

browser.get('https://www.zhihu.com/hot')
wait.until(EC.presence_of_element_located(
    (By.CLASS_NAME, 'HotList-end')), message='in waiting function')

item_list = []

hot_items = browser.find_elements(By.CLASS_NAME, 'HotItem-content')

runner = 0
for item in hot_items:
    runner += 1
    split_item = item.text.split('\n')
    cur_result = []
    cur_result.append(split_item[0])
    for my_str in split_item[1:]:
        if my_str[-2:] == '热度':
            cur_result.append(my_str)
            break
    item_list.append(cur_result)

out_filename = './output/result.csv'

with open(out_filename, 'w', encoding=encoding) as out_file:
    out_file.write('id,name,heat value\n')
    for i, item in enumerate(item_list):
        out_file.write('%d,%s,%s\n' % (i + 1, item[0], item[1]))

browser.close()