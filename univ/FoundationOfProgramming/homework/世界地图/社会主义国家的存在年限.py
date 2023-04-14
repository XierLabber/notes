from pyecharts import options as opts
from pyecharts.charts import Geo
from pyecharts.globals import ChartType, SymbolType, GeoType

geo = Geo()

geo.add_coordinate_json(json_file='./world_country.json')

geo.add_schema(maptype="world")
geo.add("主要社会主义国家的存在年限",
        [
            ("Soviet Union", 69),
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
        type_=ChartType.EFFECT_SCATTER
)

geo.add("主要资本主义国家的存在年限",
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
        type_=ChartType.EFFECT_SCATTER
)

geo.add("对标国家",
        [
            ("Soviet Union", "United States"),
            ("China", "United Kingdom"),
            ("Cuba", "France"),
            ("North Korea", "Germany"),
            ("Vietnam", "Japan"),
            ("Laos", "South Korea"),
            ("Cambodia", "Australia"),
            ("Germany", "Canada"),
            ("Poland", "Italy"),
            ("Czechoslovakia", "Spain"),
            ("Hungary", "Portugal"),
            ("Romania", "Greece"),
            ("Bulgaria", "Turkey"),
            ("Albania", "South Africa"),
            ("Yugoslavia", "Brazil")
        ],
        type_= GeoType.LINES,
        effect_opts=opts.EffectOpts(symbol=SymbolType.ARROW,
                                    symbol_size=5,color="yellow"),
        linestyle_opts=opts.LineStyleOpts(curve=0.2),
)

geo.set_global_opts(visualmap_opts=opts.VisualMapOpts(max_=100),
                    title_opts=opts.TitleOpts(title="冷战年限"))

geo.render('./output/冷战年限.html')