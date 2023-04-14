from pyecharts.faker import Faker
from pyecharts import options as opts
from pyecharts.charts import Map

range_color = ['#FBEFEF', '#08088A']
map_data = [
    ("北京市",18.39),
    ("上海市",17.38),
    ("江苏省",13.73),
    ("福建省",11.75),
    ("浙江省",11.39),
    ("天津市",11.32),
    ("广东省",9.87),
    ("重庆市",8.7),
    ("湖北省",8.66),
    ("内蒙古自治区",8.53),
    ("山东省",8.18),
    ("陕西省",7.54),
    ("安徽省",7.04),
    ("湖南省",6.93),
    ("江西省",6.55),
    ("辽宁省",6.48),
    ("山西省",6.47),
    ("四川省",6.44),
    ("海南省",6.42),
    ("宁夏回族自治区",5.28),
    ("新疆维吾尔自治区",6.19),
    ("河南省",5.93),
    ("云南省",5.75),
    ("青海省",5.65),
    ("西藏自治区",5.50),
    ("吉林省",5.5),
    ("河北省",5.41),
    ("贵州省",5.08),
    ("广西壮族自治区",4.94),
    ("黑龙江省",4.67),
    ("甘肃省",4.09)
]

c = (
    Map()
    .add("2021年人均gdp（单位：万元）", 
         data_pair=map_data, 
         maptype="china",
         is_map_symbol_show=False, # 不描点             
    )
    .set_global_opts(
        title_opts=opts.TitleOpts(title="2021年中国大陆人均gdp分级设色图"),
        visualmap_opts=opts.VisualMapOpts(min_=4, max_=10, range_color=range_color),
    )
)

c.render('./output/gdp.html')