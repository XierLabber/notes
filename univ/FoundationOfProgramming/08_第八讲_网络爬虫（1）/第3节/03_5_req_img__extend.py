"""
Date: 2020.04.26
Author: Justin

要点说明：
用requests库，下载指定url的文件
"""

import requests

url = 'https://www.baidu.com/img/bd_logo1.png'

try:
    response = requests.get(url)
    print(response.status_code)  # 连接状态。如：200正常，404找不到
    response.raise_for_status()  # 如果未能成功连接，则产生异常
    #response.encoding = response.apparent_encoding  # 设置编码格式，避免中文乱码
except:
    print("抓取网页失败")
else:
    out_file = open('./output/req_img.png', 'wb')
    out_file.write(response.content)
    out_file.close()