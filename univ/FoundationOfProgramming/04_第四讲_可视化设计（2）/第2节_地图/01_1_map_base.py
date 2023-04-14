"""
Date: 2023.3.13
Author: Justin

要点说明：
1. Map 地图的基本操作：在中国地图上描点
2. Map（地图）和Geo（地理坐标系）的核心区别：
    前者的基本元素是一块区域（国家、省、市等）
    后者的基本元素是一个坐标点（对应一组经纬度）

参考pyecharts 官方文档

更新：
地名规则变化，如：广东->广东省，北京->北京市
"""

from pyecharts.faker import Faker
from pyecharts import options as opts
from pyecharts.charts import Map

# 注： map.add()函数中的maptype参数指明地图类型
# 具体参考 pyecharts.datasets.map_filenames.json 文件

## 用于绘图的数据，随机生成
prov_list = [('广东省', 98), ('北京市', 125), ('上海市', 134), 
             ('江西省', 56), ('湖南省', 136), ('浙江省', 139), 
             ('江苏省', 88)]

## 中国地图，采用基本配置，将上述省份在地图上描点
c = (
    Map()
    .add("商家A", 
         prov_list, 
         maptype="china")
    .set_global_opts(title_opts=opts.TitleOpts(title="Map-基本示例"))
)

c.render('./output/map_base.html')
