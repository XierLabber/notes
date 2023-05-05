# -*- coding: utf-8 -*-
"""
用requests和bs4下载网页中的多张图像
练习自定义函数的使用
本实例选自《Python程序设计》唐大仕 编著 P205,稍作改动。
"""
# coding:utf-8
import requests
from bs4 import BeautifulSoup
#import time

def get_html(url):
    '''获取网页'''
    return requests.get(url).text

def get_image(imgurl, file):
    '''获取并保存图片'''
    content = requests.get(imgurl).content
#    f = open(file,'wb')
#    f.write(content)
#    f.close()
    with open(file, 'wb') as f:
        f.write(content)
def get_imgaes_in_page(html):
    '''找到网页中的多个图片'''
    soup = BeautifulSoup(html, "html.parser")
    images = soup.find_all("img", 
        {"pic_type": "0", "class": "BDE_Image"}) 
    cnt = 0
    for img in images:
        imgurl = img["src"]
#        time.sleep(1)
#        print(imgurl)
        get_image(imgurl,'./images/'+str(cnt)+'.jpg')
        cnt += 1

url = "https://tieba.baidu.com/p/2460150866"
html = get_html(url)
#print(html)
#with open ("tieba_image.html","w", encoding="utf-8") as f:
#    f.write(html)
get_imgaes_in_page(html)


