# -*- coding: utf-8 -*-

'''
用requests库登录网站
需要构造headers和post_data
先在Chrome中手工进行登录，观察网络行为和数据结构
'''
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
import requests

# 在Chrome中用错误账号密码先登录一次
# 获得准确的登录页面url、get或post方法、账号/密码的参数名称等
url_1 = 'https://bbs.pku.edu.cn/v2/login.php'
url_2 = 'https://bbs.pku.edu.cn/v2/home.php'
#https://bbs.pku.edu.cn/v2/thread.php?bid=414

headers = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'User-Agent':' Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        }

my_username, my_password = get_username_password('pkubbs') # 从文件读取账号密码
#my_username, my_password = '12345678','abcdefgh' # 直接设置账号密码

post_data = {
        'username': my_username,
        'password': my_password,
    }

try:
    session = requests.session()
    session.post(url_1, data=post_data, headers=headers)
    response = session.get(url_2, headers=headers)  
    print(response.status_code)  # 连接状态。如：200正常，404找不到
    print(response.request.url)  # 返回信息中记录的请求网址
    response.raise_for_status()  # 如果未能成功连接，则产生异常
    response.encoding = response.apparent_encoding  # 设置编码格式，避免中文乱码
except:
    print("抓取网页失败")
else:
    # 提取本程序文件名，用于输出
    filepath = __file__.split('\\')
    this_filename = filepath[-1]
    out_filename = this_filename.split('.')[0]
    # 输出结果到本地文件
    out_file = open('./output/{}.html'.format(out_filename), 'w', encoding='utf-8')
    out_file.write(response.text)
    out_file.close()