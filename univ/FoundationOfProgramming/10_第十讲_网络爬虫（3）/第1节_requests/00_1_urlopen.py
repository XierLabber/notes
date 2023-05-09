# -*- coding: utf-8 -*-
"""
Created on Fri Apr 23 08:54:59 2021
该示例来自《Python程序设计》唐大仕 编著 P194
"""
#导入urllib包中的request模块
import urllib.request

#使用模块中的urlopen()函数得到HTTPResponse对象
response = urllib.request.urlopen("https://www.pku.edu.cn")
print(type(response))

#通过read()方法得到服务器端发来的信息
b = response.read()
print(type(b))

#用decode()方法进行解码并转换成字符串
html = b.decode('utf-8')
print(html[:200])#显示网页内容的前200个字符

#一般地，获取网页信息可以使用如下代码：
#html = urllib.request.urlopen(url).read().decode('utf-8')
#其中，url是要访问的网址，utf-8是大部分网页使用的编码，也有少数网页使用其他编码

#将html保存到文件中,方式1：
with open("pku.html","w",encoding="utf-8") as f:
     f.write(html)
     
#将html保存到文件中,方式2：使用urlretrieve()函数直接获取网页内容并将其保存到文件
urllib.request.urlretrieve("https://www.pku.edu.cn", "pku1.html")

#urlretrieve()也可将图像文件直接保存到文件



