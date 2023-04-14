# -*- coding: utf-8 -*-
"""
Created on Mon Mar 29 11:29:33 2021

@author: DEER
"""

"""
Date: 2021.3.22
Author: Justin

要点说明：
绘制轮播地图，区域列表的另一种生成方式（逐渐扩大的区域）
"""

from pyecharts.faker import Faker
from pyecharts import options as opts
from pyecharts.charts import Bar, Page, Pie, Timeline
from pyecharts.charts import Map

#----------------------------------------------

tl = Timeline()

zone = []
zone.append([('浙江省',99),('江苏省',88),('上海省',88)])
zone.append(zone[0] + [('安徽省',77),('江西省',66),('山东省',77),('福建省',66)])
zone.append(zone[1] + [('河南省',44),('河北省',55),('山西省',44),('广东省',44),('广西省',55)])
zone.append(zone[2] + [('北京省',22),('内蒙古省',22),('陕西省',33),('甘肃省',33),('青海省',33)])
zone.append(zone[3] + [('湖南省',11),('湖北省',1),('宁夏省',11),('西藏省',11),('四川省',1)])

for i in range(2016, 2021):
    map0 = (
        Map()
        .add("某商家重点市场", 
             zone[i-2016],
             maptype="china",
             is_map_symbol_show=False,  # 不描点
        )
        .set_global_opts(
            title_opts=opts.TitleOpts(title="Map-{}年市场情况".format(i)),
            visualmap_opts=opts.VisualMapOpts(max_=100),
        )
    )
    tl.add(map0, "{}年".format(i))
    
tl.render('./output/timeline_map2.html')
    