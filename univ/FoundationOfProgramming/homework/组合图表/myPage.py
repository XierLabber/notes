from pyecharts import options as opts
from pyecharts.charts import Bar, Grid, Line, Liquid, Page, Pie
from pyecharts.commons.utils import JsCode
from pyecharts.components import Table
from pyecharts.faker import Faker


def line_gdp() -> Line:
    c = (
        Line()
        .add_xaxis(['%d年'%(2012 + x) for x in range(6)])
        .add_yaxis(
            "中国",
            list(reversed([8816, 8094, 8016, 7636, 7020, 6300])),
            markpoint_opts=opts.MarkPointOpts(data=[opts.MarkPointItem(type_="max")]),
        )
        .add_yaxis(
            "美国",
            list(reversed([60109, 58021, 56863, 55049, 53106, 51602])), 
            markpoint_opts=opts.MarkPointOpts(data=[opts.MarkPointItem(type_="max")]),
        )
        .add_yaxis(
            "法国",
            list(reversed([38685, 37037, 36638, 43011, 42592, 40874])),
            markpoint_opts=opts.MarkPointOpts(data=[opts.MarkPointItem(type_="max")]),
        )
        .add_yaxis(
            "英国",
            list(reversed([40857, 41499, 45404, 47787, 43713, 42686])),
            markpoint_opts=opts.MarkPointOpts(data=[opts.MarkPointItem(type_="max")]),
        )
        .add_yaxis(
            "俄罗斯",
            list(reversed([10720, 8704, 9313, 14095, 15974, 15420])), 
            markpoint_opts=opts.MarkPointOpts(data=[opts.MarkPointItem(type_="max")]),
        )
        .set_global_opts(title_opts=opts.TitleOpts(title="五常人均gdp(美元)"))
    )
    return c

def pie_gdp() -> Pie:
    rosetype = "radius"
    c = (
        Pie()
        .add(
            "2012年",
            [["中国", 85322.30], ["法国", 26838.25], ["英国", 27040.17], ["美国", 161970.07], ["俄罗斯", 22082.96]],
            radius=["30%", "75%"],
            center=["25%", "50%"],
            rosetype=rosetype,
        )
        .add(
            "2017年",
            [["中国", 123104.09], ["法国", 25887.41], ["英国", 26624.84], ["美国", 195429.80], ["俄罗斯", 15741.99]],
            radius=["30%", "75%"],
            center=["75%", "50%"],
            rosetype=rosetype,
        )
        .set_global_opts(title_opts=opts.TitleOpts(title="五常2012-2017gdp对比(亿美元)"))
    )
    return c

def page_draggable_layout():
    page = Page(layout=Page.DraggablePageLayout)
    page.add(
        line_gdp(),
        pie_gdp(),
    )
    page.render("./output/great_permanent_members_gdp.html")


if __name__ == "__main__":
    page_draggable_layout()