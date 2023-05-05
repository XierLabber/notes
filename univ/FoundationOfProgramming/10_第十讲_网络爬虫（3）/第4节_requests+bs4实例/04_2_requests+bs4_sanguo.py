# -*- coding: utf-8 -*-
"""
从网络小说网站下载三国演义全文
本实例选自《Python程序设计》唐大仕 编著 P208，稍作修改
"""

import requests
from bs4 import BeautifulSoup
import re #导入正则表达式模块
import time

def get_html(url):
    '''使用requests得到网页内容'''
    r = requests.get(url)
    r.encoding = "GBK"  #为避免中文乱码，需设置编码格式，查询网站编码：在网页按F12,打开开发者工具，在console 中输入“document.characterSet”查看页面编码
    return r.text

def get_links(html):
    '''使用bs4得到页面中的链接'''
    soup = BeautifulSoup(html, 'html.parser')  #得到soup对象
    table = soup.find('table', {'cellpadding':"3"})  #找到特定的一个table
    links = table.find_all('a', {'href': re.compile(r'\d{3}\.htm')}) #找到所有的链接;使用compile()函数编译正则表达式，找到href为“3个数字.htm”的所有的a对象，返回值是一个列表
    #print(links) 
    return links

def extract_text(html):
    '''使用bs4得到子页面中的文本'''
    soup = BeautifulSoup(html, 'html.parser')  #得到soup对象
    title = soup.b.text #标题 对比soup.title.text 这两种方式都可以
    text = soup.table.font.text #正文，注意tag都是小写的
    return "\n" + title + "\n" + text

url = "http://www.purepen.com/sgyy/"
# 得到目录页
html = get_html(url)
#print(html)
#links = get_links(html)
#print(links)

# 从目录页中找到子页的链接并下载
links = get_links(html)
file = open("sgyy.txt", "w", encoding="utf-8")
for link in links:
    #title = link.text.replace('\u3000', ' ') #取得回目标题文本
    href = url + link['href'] #需要加上网站前缀换成绝对网址才可以变为每一回目的下载链接
    print(href) #, title
    sub_html = get_html(href)
    text = extract_text(sub_html)
    file.write(text)
#    time.sleep(0.1) # 停顿一小会儿
file.close()
