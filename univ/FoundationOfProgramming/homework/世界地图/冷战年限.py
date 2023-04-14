from pyecharts.faker import Faker
from pyecharts import options as opts
from pyecharts.charts import Map
from pyecharts.globals import ChartType, SymbolType
   
range_color = ['#B40404', '#08088A']
# range_color = ['#FA5858', '#58D3F7']

c = (
    Map()
    .add("社会主义国家", 
         [
             ("Russia", 69),
             ("China", 72),
             ("Cuba", 60),
             ("North Korea", 75),
             ("Vietnam", 78),
             ("Laos", 46),
             ("Cambodia", 18),
             ("Germany", 41),
             ("Poland", 44),
             ("Czechoslovakia", 44),
             ("Hungary", 40),
             ("Romania", 42),
             ("Bulgaria", 44),
             ("Albania", 46),
             ("Yugoslavia", 47)
         ], 
         maptype="world",
         is_map_symbol_show=False, # 不描点
    )
    .add("资本主义国家", 
         [
             ("United States",245),
             ("United Kingdom",400),
             ("France",228),
             ("Germany",41),
             ("Japan",75),
             ("South Korea",74),
             ("Australia",120),
             ("Canada",155),
             ("Italy",160),
             ("Spain",44),
             ("Portugal",46),
             ("Greece",194),
             ("Turkey",98),
             ("South Africa",110),
             ("Brazil",132)
         ], 
         maptype="world",
         is_map_symbol_show=False,
    )
    .set_series_opts(label_opts=opts.LabelOpts(is_show=False))
    .set_global_opts(
        title_opts=opts.TitleOpts(title="冷战国家存在时长"),
        visualmap_opts=opts.VisualMapOpts(max_=200, min_=20, range_color=range_color),
    )
)

c.render('./output/cold war.html')