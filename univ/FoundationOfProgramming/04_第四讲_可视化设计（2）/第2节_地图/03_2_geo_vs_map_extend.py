"""
Date: 2021.3.22
Author: DEER

要点说明：
用geo画出全国人口图
"""

from pyecharts import options as opts
from pyecharts.charts import Geo
from pyecharts.globals import ChartType, SymbolType

# 2020年全国人口数据
data ={
"广东省":11346,
"山东省":10047,
"河南省":9605,
"四川省":8341,
"江苏省":8051,
"河北省":7556,
"湖南省":6899,
"安徽省":6324,
"湖北省":5917,
"浙江省":5737,
"广西省":4926,
"云南省":4830,
"江西省":4648,
"辽宁省":4359,
"福建省":3941,
"陕西省":3864,
"黑龙江省":3773,
"山西省":3718,
"贵州省":3600,
"重庆省":3102,
"吉林省":2704,
"甘肃省":2637,
"内蒙古省":2491,
"新疆省":2487,
"上海市":2424,
"台湾省":2359,
"北京市":2154,
"天津市":1560,
"海南省":934,
"香港市":745,
"宁夏省":688,
"青海省":603,
"西藏省":335,
"澳门市":63,
}

map_data = list(data.items()) 

c = (
    Geo() 
    .add_schema(maptype="china")
    .add("2020年人口（单位：万）", 
         map_data, 
         type_=ChartType.SCATTER,
         )
    .set_series_opts(label_opts=opts.LabelOpts(is_show=False))
    .set_global_opts(
        visualmap_opts=opts.VisualMapOpts(max_=12000, is_piecewise=True),
        title_opts=opts.TitleOpts(title="各省人口数"),
    )
)

c.render("./output/全国人口数据地图_geo.html")  


