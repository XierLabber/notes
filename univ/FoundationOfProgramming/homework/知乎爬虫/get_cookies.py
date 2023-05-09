import json
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

option = Options()
browser = webdriver.Chrome(options=option)
browser.get('https://www.zhihu.com/signin')
browser.maximize_window()

input("请扫码登录，登录完成后输入空格")

cookies_dict = browser.get_cookies()
cookies_json = json.dumps(cookies_dict)
print(cookies_json)

out_filename = './output/my_cookies.json'
with open(out_filename, 'w', encoding='utf-8') as out_file:
    out_file.write(cookies_json)

print("写入完成")
browser.close()