# -*- coding: utf-8 -*-
"""
Created on Tue Apr  18 10:13:27 2023

@author: XL
"""
from bs4 import BeautifulSoup

soup = BeautifulSoup(open('./data/css_example.html'),"html.parser")#根据html文本，得到一个BeautifulSoup对象
#print(soup.prettify()) #可用prettify方法了解html的嵌套结构

#print(soup.h2)#找到其中的第一个h2对象
#print(soup.find("h2"))#找到其中的第一个h2对象，同上一行代码的效果
#print(soup.find_all("h2"))#找到其中所有的h2对象，其结果是一个列表
#print(soup.find("div",{"class":"highlight_text"}))#找到其中属性class为highlight_text的div对象
#print(soup.find_all("div",{"class":"highlight_text"}))#找到其中所有属性class为highlight_text的div对象,其结果是一个列表，对比第19行代码

#对于已得到的tag对象，还可以进一步得到其属性
#tag = soup.h2
#tag = soup.find("div",{"name":"href_box"})
#print(tag)
#print(tag.attrs)#得到对象的所有属性，结果是一个字典
#print(tag.text)#得到对象内部的文字，不含尖括号及尖括号中的内容
#tag = soup.find("div",{"class":'highlight_text'})
#print(tag.text)#得到对象内部的文字（不含尖括号及尖括号中的内容）
#print(tag["class"])#得到对象的class属性的值
#print(tag.attrs)#得到对象的所有属性和它的值（其结果是一个字典，键值对为“属性名”：[属性值]）


#由于网页的嵌套对象的特点，可以进一步查找或遍历
#print(soup.div.p)#找到第一个div对象内部的第一个p对象
#print(soup.div.div)#找到第一个div对象内部的第一个div对象
#print(soup.div.find("div"))#找到第一个div对象内部的第一个div对象
#print(soup.div.find("div").text)#找到第一个div对象内部的第一个div对象，并取到其内部的文字
#print(soup.h2.parent)#找到第一个h2对象的父对象
#print(soup.div.contents)#找到第一个div对象的所有子对象，其结果是一个列表
#print(soup.div.contents[1].text)#找到第一个div对象的子对象列表中的第二个元素并取其中的文字，注意换行符也是一个元素

#找到所有a节点中的超链接网址
tag = soup.find_all("a")
#print(tag[0].attrs['href'])
for i in range(0,4):
    print(tag[i].attrs['href'])
