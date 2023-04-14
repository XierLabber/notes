/**
 * @file pc sug
 * @author se-fe
 */

define('@baidu/search-sug/sug/index', ['require'], function (require) {
    function checkHsugIn(e){return window.__sample_hsug_length?e.length>=4||encodeURIComponent(e).length>=18:e.length>=4||encodeURIComponent(e).length>=18}function checkHsugShow(e){return e.length>=1&&encodeURIComponent(e).length>3}var bds=window.bds||{};bds.se=bds.se||{},bds.se.store=function(){function e(){try{return a in u&&u[a]}catch(e){return!1}}function t(){try{return l in u&&u[l]&&u[l][u.location.hostname]}catch(e){return!1}}function n(e){return function(){var t=Array.prototype.slice.call(arguments,0);
t.unshift(o),d.appendChild(o),o.addBehavior("#default#userData"),o.load(a);var n=e.apply(i,t);return d.removeChild(o),n}}function r(e){return"_"+e}var o,i={},u=window,c=u.document,a="localStorage",l="globalStorage",s="__storejs__";if(i.disabled=!1,i.set=function(){},i.get=function(){},i.remove=function(){},i.clear=function(){},i.transact=function(e,t,n){var r=i.get(e);null==n&&(n=t,t=null),"undefined"==typeof r&&(r=t||{}),n(r),i.set(e,r)},i.getAll=function(){},i.serialize=function(e){return String(e)
},i.deserialize=function(e){return"string"!=typeof e?void 0:e},e())o=u[a],i.set=function(e,t){return void 0===t?i.remove(e):void o.setItem(e,i.serialize(t))},i.get=function(e){return i.deserialize(o.getItem(e))},i.remove=function(e){o.removeItem(e)},i.clear=function(){o.clear()},i.getAll=function(){for(var e={},t=0;t<o.length;++t){var n=o.key(t);e[n]=i.get(n)}return e};else if(t())o=u[l][u.location.hostname],i.set=function(e,t){return void 0===t?i.remove(e):void(o[e]=i.serialize(t))},i.get=function(e){return i.deserialize(o[e]&&o[e].value)
},i.remove=function(e){delete o[e]},i.clear=function(){for(var e in o)delete o[e]},i.getAll=function(){for(var e={},t=0;t<o.length;++t){var n=o.key(t);e[n]=i.get(n)}return e};else if(c.documentElement.addBehavior){var d,f;try{f=new ActiveXObject("htmlfile"),f.open(),f.write("<script>document.w=window</script><iframe src='/favicon.ico'></iframe>"),f.close(),d=f.w.frames[0].document,o=d.createElement("div")}catch(v){o=c.createElement("div"),d=c.body}i.set=n(function(e,t,n){return t=r(t),void 0===n?i.remove(t):(e.setAttribute(t,i.serialize(n)),void e.save(a))
}),i.get=n(function(e,t){return t=r(t),i.deserialize(e.getAttribute(t))}),i.remove=n(function(e,t){t=r(t),e.removeAttribute(t),e.save(a)}),i.clear=n(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(a);for(var n,r=0;n=t[r];r++)e.removeAttribute(n.name);e.save(a)}),i.getAll=n(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(a);for(var n,r={},o=0;n=t[o];++o)r[n]=i.get(n);return r})}try{i.set(s,s),i.get(s)!=s&&(i.disabled=!0),i.remove(s)}catch(v){i.disabled=!0}return i
}();;
    var ImeTrack=function(){function t(t){var e=0;if(document.selection){t.focus();var n=document.selection.createRange(),i=0;t&&t.value&&(i=t.value.length),n.moveStart("character",-i),e=n.text.length-1}else(t.selectionStart||"0"===t.selectionStart)&&(e=t.selectionStart);return e}function e(e){function n(t){s.ipt.value!==s.oldval&&(s.oldval=s.ipt.value,s.inputchangeHandle(t))}function i(){for(var t=0,e=s.logs.length-1;e<s.logs.length-1;e--)if(-1===s.logs[e].type.indexOf("unval-"))return s.logs[e].time;
return t}var s=this;s.logs=[],s.opts=e||{},s.opts.logmaxnum=e.logmaxnum||10,s.opts.adv=e.adv||!1,this.onLogChange=e.onLogChange,void 0===s.opts.innerchange&&(s.opts.innerchange=!0),s.ipt=document.getElementById(s.opts.iptId),s._kdcode=0,s._kdevt={},s._keyposition=0,s.ipt.onkeydown=function(t){var e=t||window.event;s._kdcode=e.keyCode||e.which,s._kdevt=e},s.ipt.onkeyup=function(e){{var n=e||window.event,i=n.keyCode||n.which;s.ipt.value||"",t(s.ipt)}s._kdcode&&(s.addLog({ku:i,type:"upsave"}),s._kdcode=0,s._kdevt={},s.oldval=s.ipt.value)
},s.ipt.onpaste=function(){s.addLog(s._kdevt.ctrlKey?{type:"unval-paste-key"}:{type:"unval-paste-mouse"})},s.oldval=s.ipt.value||"",s.inputchangeHandle=function(){if(s._kdcode)s.addLog({type:"unval-change-key"});else{var t="";s.logs.length&&(new Date).getTime()-i()<300&&(t="unval-"),s.addLog({type:t+"change-unkey"})}},s.timmer,s.opts.innerchange&&(s.ipt.onfocus=function(t){s.timmer=setInterval(function(){n(t)},200)},s.ipt.onblur=function(){clearInterval(s.timmer)})}return e.prototype={checkLog:function(t){for(var e=this.logs.length,n=!1;e>0;)e--,-1!==this.logs[e].type.indexOf("unval-")?(t.type=(-1===t.type.indexOf("unval-")?"":"unval-")+this.logs[e].type.replace("unval-","")+"-"+t.type.replace("unval-",""),this.logs[e]=t,n=!0):e=-2;
if(n)return!1;for(;this.logs.length>=this.opts.logmaxnum;)this.logs.shift();return!0},analyseLog:function(){function e(){if(n.opts.adv)for(var t=0;t<o.length;t++)o.charCodeAt(t)>256&&(a=o.substring(0,t+1),h=o.substring(t+1))}var n=this;if(this.logs.length>0&&-1===this.logs[this.logs.length-1].type.indexOf("unval")){var i=this.logs[this.logs.length-1],s=i.val.substring(0,i.start),o=i.val.substring(i.start,i.cursor),l=i.val.substring(i.cursor),a="",h="";229===i.kd?o.charCodeAt(o.length-1)>256||!o.match(/[\x00-\x80]/g)?(this._keyposition=t(this.ipt),i.type+="-endime",0===o.length&&(i.type+="-cancelime")):(i.type+="-imeinput",e()):i.type.indexOf("paste-mouse")>-1?this._keyposition=t(this.ipt):i.type.indexOf("change-unkey")>-1?0===o.length?(this._keyposition=t(this.ipt),this.logs.length>1&&this.logs[this.logs.length-2].type.indexOf("upsave")>-1&&(i.type+="-link")):o.charCodeAt(o.length-1)>256||!o.match(/[\x00-\x80]/g)?(this._keyposition=t(this.ipt),i.type+="-endime"):(i.type+="-imeinput",e()):this._keyposition=t(this.ipt),this.opts.adv&&(i.type+="-adv",i.strA=s,i.strB=o,i.strB1=a,i.strB2=h,i.strC=l),this.onLogChange&&this.onLogChange.call(this,i)
}},addLog:function(e){e.kd=this._kdcode,e.val=this.ipt.value,e.start=this._keyposition,e.cursor=t(this.ipt),e.type=e.type||0,e.time=(new Date).getTime(),(0===this.logs.length||this.logs[this.logs.length-1].val!==e.val||-1!==this.logs[this.logs.length-1].type.indexOf("unval-")||-1!==e.type.indexOf("unval-"))&&(this.checkLog(e)&&this.logs.push(e),this.analyseLog())},getLog:function(){var t=this.logs.slice(0);return t},triggerInputChange:function(t){this.inputchangeHandle(t)},diffLog:function(){for(var t=[],e=!1,n=0;n<this.logs.length;n++)if(0!==n){var i=this.logs[n];
if(i.strB&&i.strA){if(0===i.strB.length&&i.strA.length<this.logs[n-1].strA.length){t=[];continue}if(i.type.indexOf("link")>-1||i.type.indexOf("paste")>-1){t=[];continue}}var s=i.time-this.logs[n-1].time;s>3e3&&(t=[]);var o=0,l=(i.val.match(/[^\x00-\x80]/g)||[]).length-(this.logs[n-1].val.match(/[^\x00-\x80]/g)||[]).length;l>0?o=1:l=(i.val.match(/[\x00-\x80]/g)||[]).length-(this.logs[n-1].val.match(/[\x00-\x80]/g)||[]).length,i.type.indexOf("ime")>-1?(o+=2,e=!0):i.type.indexOf("unval")>-1&&e?o+=2:e=!1,l>0&&t.push(o,l,s)
}return t}},e}();;
    var QuickDelete=function(){function e(){this._init()}return e.prototype={constructor:e,_init:function(){var e=this;e.quickdelete=$(".quickdelete"),e.quickdeleteline=$(".quickdelete-line"),e.ipt=$("#kw"),e._bind_event()},_hide:function(){var e=this;e.quickdelete.hide(),e.quickdeleteline.hide()},_show:function(){var e=this;e.quickdelete.show(),e.quickdeleteline.show()},_bind_event:function(){var e=this,i=e.ipt,t=e.quickdelete;t.on("click",function(){i.val("").focus(),e._hide(),ns_c({fm:"behs",tab:"search-delete"})
})}},e}();;

    var bdSug = function (opts) {
        var sug = new SUGOBJ(opts);
        return sug.outInterface();
    };
    // IE9 号称支持input事件，但是有bug ，WTF
    var supportInputEvent = 'oninput' in document.createElement('input')
    && !navigator.userAgent.match(/MSIE 9/) && !navigator.userAgent.match(/chrome\/(28|29|30|31)/i);
    var BDSUG_TIMESTAMP_START = 1418342400000;
    var BDSUG_QUERY_LEV = 4;

    function SUGOBJ(opts) {
        var me = this;
        var opts = me.opts = opts || {};
        // 设置
        me.ipt = opts.ipt || null;// 输入框input元素
        me.reverse = opts.reverse || false;// 是否倒序排列
        me.form = opts.form || null;// 表单
        me.submission = opts.submission || null;// 表单提交函数
        me.maxNum = opts.maxNum || 10;// 展现的最多条数
        me.bds = opts.bds || null;
        me.sids = me.bds && me.bds.comm && me.bds.comm.sid;
        me.withoutMode = opts.withoutMode || false;// 是否在请求中增加请求模式，如是否在点击输入框时展现推荐sug
        me.withoutRich = opts.withoutRich || false;// 是否是简单版本，简单版本不包括历史sug，sug阿拉丁
        me.withoutStat = opts.withoutStat || false;// 是否发送结果页sug统计
        me.withoutZhixin = opts.withoutZhixin || false;// 是否在sug框内显示知心阿拉丁展现
        me.visible = false;
        me.stopRefresh = false;// IS下SUG切换是否自动刷新结果，默认false即允许自动刷新
        // 回调
        me.renderCallback = opts.renderCallback || function () {};// 渲染完毕回调
        me.selectCallback = opts.selectCallback || function () {};// 选中sug回调
        // 历史sug
        me.storestr = me.storestr || '';
        me.storearr = me.storearr || [];
        // 标识显示知心结果的sug数组
        me.zhixinsug = [];
        me.zhixintemplate = {};
        me.zhixinused = {};
        me.zhixindata = {};

        // 数据
        me.query = me.ipt && me.ipt.value || '';// 原始query
        me.inputValue = me.query;// 用户输入文本后的value
        me.showValue = me.query;// 当前input框中显示的value
        me.sugValue = '';// 选择sug后保存sug的value
        me.queryValue = '';// sug服务返回的q参数value
        me.reqValue = '';// sug服务请求value
        me.value = me.query;// 用来请求sug的value
        me.index = -1;// 当前选中的序号
        me.sugcontainer;// sug内容框
        me.dataCached = {};// 缓存的原始普通数据对象
        me.dataArray = [];// 用来渲染的处理后的普通数据
        me.dataStored = [];// 特定key的历史sug
        me.dataAladdin = [];// 特定key的sug阿拉丁
        me.dataDirect = [];// 特定key的url直达链接数据 add by yangfan16
        me.directSugSelected = false;// 官网直达sug选中状态 add by yangfan16

        me.dataHot = [];// 空框sug热词实验,hot

        me.timer;// 计时器
        // 统计参数
        // 历史sug的展现数目
        /* eslint-disable */
        me.rsv_sug = 0;
        // 收到sug服务器返回数据并正确展现的总次数
        me.rsv_sug1 = 0;
        // 发送sug请求的总次数
        me.rsv_sug3 = 0;
        // 从用户主动focus输入框到发起检索的时间
        me.rsv_sug4 = 0;
        // [sug,本地历史,服务端历史]
        me.rsv_sug7 = [0,0,0];
        // sug场景标记 eb-空框 se_-空框历史sug
        me.rsv_sug9 = 0;
        // 每次请求发起时的时间
        me.initTime = 0;
        // 用户键盘变换query到发起搜索的时间
        me.inputT = 0;
        // 标记检索搜索框在首页还是结果页
        me.rsv_bp = opts && opts.comm && opts.comm.ishome === 1 ? 0 : 1;
        /* eslint-enable */
        me.jqXhr = null;
        // sug框内换query所有实验变量
        me.resultSugSamples = ['search_sug_1', 'search_sug_2', 'search_sug_3-1', 'search_sug_3-2', 'search_sug_4-1', 'search_sug_4-2', 'search_sug_5', 'search_sug_6'];
        // 结果页sug当前命中实验
        me.currentSugSample = '';
        // 首页当前命中sug实验
        me.currentHomeSugSample = '';
        me.isSugSample3 = false;
        me.isSugSample4 = false;
        // -1：非sug实验不做区分，0：连续搜索，1：间隔搜索
        me.currentSearchStatus = -1;
        // 初始化的唯一条件，有ipt参数
        me.ipt && me.init();

        me.pwd = '';
        me.hisSwitch = opts.hisSwitch;
        me.useFeedback = opts.useFeedback;
        me.sugprod = opts.prod || '';
        me.tn = opts.tn || '';
       
        me.requestDefaultData = {};
        me.showRightContent = false;
        me.backFrame = false;
        // 上一次的query
        me.prevQuery = me.query;
        // 是否回删操作
        me.backDelete = false;
        me.requestQuery = [me.query];
        me.isAddQuery = false;

    }
    function xss(val) {
        return val.toString().replace(/[<%3C]/g, '&lt;')
        .replace(/[>%3E]/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    SUGOBJ.prototype = {
        // 更新后端数据
        updateInitData: function (type) {
            var me = this;
            var opts = me.opts || {};
            // sug和历史sug开关
            // 检测用户是否开启sug
            me.setsug = true;
            me.setsugstorage = true;
            me.sets = {};
            me.sugcookie = navigator.cookieEnabled && /sug=(\d)/.test(document.cookie) ? RegExp.$1 : 3;
            me.sugstorecookie = navigator.cookieEnabled && /sugstore=(\d)/.test(document.cookie) ? RegExp.$1 : 1;
            if (me.bds && me.bds.comm && me.bds.comm.personalData) {
                // 暂时兼容，之后全部改成后者，wangpeng20
                if (typeof me.bds.comm.personalData === 'string') {
                    me.sets = eval('(' + me.bds.comm.personalData + ')'); // eslint-disable-line
                } else {
                    me.sets = me.bds.comm.personalData;
                }
            };
            // 优先使用服务器端用户设置，如没有，则使用cookie
            if (me.sets.errno && me.sets.errno === 0
                && me.sets.sugSet && me.sets.sugSet.ErrMsg
                && me.sets.sugSet.ErrMsg === 'SUCCESS') {
                if (me.sets.sugSet.value === '0') {
                    me.setsug = false;
                };
            } else {
                if (me.sugcookie === '0') {
                    me.setsug = false;
                };
            };
            if (me.sets.errno && me.sets.errno === 0
                && me.sets.sugStoreSet
                && me.sets.sugStoreSet.ErrMsg
                && me.sets.sugStoreSet.ErrMsg === 'SUCCESS') {
                if (me.sets.sugStoreSet.value === '0') {
                    me.setsugstorage = false;
                };
            } else {
                if (me.sugstorecookie === '0') {
                    me.setsugstorage = false;
                };
            };
            me.loggedon = me.bds && me.bds.se.store && !me.bds.se.store.disabled && navigator.cookieEnabled;
            me.showsug = opts.showsug ? opts.showsug : me.setsug;
            me.showsugstore = opts.showsugstore ? opts.showsugstore : (me.showsug && me.loggedon && me.setsugstorage);
            // 后端数据
            me.query = me.bds.comm.query;
            me.pinyin = me.bds.comm.pinyin;
            me.sugHost = me.bds.comm.sugHost || '';
            // me.sid = me.bds.comm.sid || '';
            me.sid = navigator.cookieEnabled
            && /H_PS_PSSID=([0-9_]+)/.test(document.cookie) ? RegExp.$1 : me.bds.comm.sid;
            // 写入当前query历史sug(空referrer请求不执行写入)
            var canWriteStore = true;
            var isLogin = me.bds && me.bds.comm && me.bds.comm.username;
            if (isLogin
                || (me.bds && me.bds.se && me.bds.se.store
                    && me.bds.se.store.get('wwwPassLogout') == 1)) {
                canWriteStore = false;
            }
            if (me.bds && me.bds.comm && me.bds.comm.sampleval) {
                if ($.inArray('sample_his', me.bds.comm.sampleval) > -1) {
                    canWriteStore = true;
                }
            }
            if ((type !== 'init' || document.referrer) && canWriteStore) {
                me.writeStore();
            };
            // 中实验策略时需要写入本地
            if (me.resultSugSamples.indexOf(me.currentSugSample) !== -1) {
                me.writeStore();
            }
            me.bds.se.store.set('wwwPassLogout', 0);
        },
        // 轮询
        check: function () {
            var me = this;
            if (me.value !== me.ipt.value && me.showValue !== me.ipt.value) {
                me.inputValue = me.showValue = me.value = me.ipt.value;
                if (me.bds && me.bds.comm && me.bds.comm.ishome === 0) {
                    me.addStat('oq', me.bds.comm.confirmQuery ? xss(me.bds.comm.confirmQuery) : '');
                }
                if (me.bds && me.bds.comm && me.bds.comm.confirmQid) {
                    me.addStat('rsv_pq', me.bds.comm.confirmQid);
                }
                $(me.ipt).trigger('inputChange', [me]);
                
                me.request(me.value);
            };
        },
        startCircle: function () {
            var me = this;
            if (me.timer) {
                return;    // 已开始circle
            };
            $(me.ipt).trigger('start', [me]);
            me.timer = setTimeout(function () {
                me.check();
                /* eslint-disable */
                me.timer = setTimeout(arguments.callee, 200);
                /* eslint-enable */
            }, 200);
            if (supportInputEvent) {
                $(me.ipt).bind('input', function () {
                    me.check();
                });
            }
        },
        stopCircle: function () {
            var me = this;
            if (me.timer) {
                clearTimeout(me.timer);
                if (supportInputEvent) {
                    $(me.ipt).unbind('input');
                }
                me.timer = null;
                $(me.ipt).trigger('stop', [me]);
            };
        },
        // 回调函数
        callback: function (data, mode) {
            var me = this;
            // 统计参数中新增exp实验标签，修改by思成，累加记录策略
            if (data && data.exp) {
                /* eslint-disable */
                var rsv_sug6 = me.stat['rsv_sug6'] || '';
                if (rsv_sug6.length > 0 && data.exp.length > 0 && rsv_sug6.indexOf(data.exp) === -1) {
                    rsv_sug6 += '_' + data.exp;
                } else {
                    rsv_sug6 = data.exp;
                }
                /* eslint-enable */
                me.addStat('rsv_sug6', rsv_sug6);
            }
            // 更新判断逻辑，空框历史sug实验时也执行sug组装、渲染操作 update by yangfan 0115
            if (data && (data.g || data.z || (me.checkStore(data) && me.checkStore(data).length > 0))) {
                me.queryValue = data.q;
                // data.q不为空 && mode!=2时才缓存至本地
                if (data.q && mode !== '2') {
                    me.dataCached[data.q] = data;
                };

                $(me.ipt).trigger('dataReady', [me]);
                // 将知心sug按kv存入
                if (!me.withoutZhixin) {
                    // 根据知心类别，调用js模板
                    function useTemplate(type) {
                        if (me.zhixintemplate[type] && !me.zhixinused[type]) {
                            me.zhixinused[type] = $.ajax({
                                // TODO:crossdomain参数调试需要，上线后去掉
                                crossDomain: true,
                                url: me.zhixintemplate[type],
                                dataType: 'script',
                                scriptCharset: 'UTF-8'
                            });
                        }
                    }
                    if (data.zzx) {
                        for (var i = 0; i < data.zzx.length; i++) {
                            if (data.zzx[i] && data.zzx[i].type) {
                                me.zhixinsug.push({
                                    value: data.g[i].q,
                                    type: data.zzx[i].type,
                                    url: data.zzx[i].url
                                });
                                useTemplate(data.zzx[i].type);
                            }
                        }
                    }

                }
                me.dataArray = me.packData(data);
                me.requestDefaultData = data;
                if (me.resultSugSamples.indexOf(me.currentSugSample) !== -1) {
                    // 实验一或实验六
                    if (me.currentSugSample === 'search_sug_1' || me.currentSugSample === 'search_sug_6') {
                        me.sendNormalSugOrHisLog({
                            total: data.g && data.g.length
                        });
                        me.render(me.dataArray);
                    }
                    // 实验三
                    if (me.isSugSample3) {
                        if (me.backFrame && me.currentSearchStatus === 1) {
                            $('#kw')[0].value = '';
                        }
                        var total = data.g_mot && data.g_mot.length;
                        var title = data.g_mot_title;
                        // 连续搜素样式同实验二
                        if (me.currentSearchStatus === 0) {
                            // 右侧猜你想搜是否展示
                            if (data.g_mot && data.g_mot.length >=3) {
                                me.showRightContent = true;
                            }
                            me.sendNormalSugOrHisLog({
                                total: data.g_mot && data.g_mot.length,
                            });
                            me.render(me.dataArray);
                            // 回框展示右侧猜你想搜
                            if (me.backFrame) {
                                me.sendRecommendOrHisLog(total, title, 'right', 1);
                                me.renderRecomend(data.g_mot, title, 'right');
                            }
                        } else if (me.currentSearchStatus === 1) {
                            var recPos = me.showsugstore ? 'right' : 'left';
                            var hisPos = me.showsugstore ? 'left' : 'right';
                            // 猜你想搜与搜索历史打点
                            if (me.backFrame) {
                                var hisLen = data.g && data.g.length;
                                me.sendRecommendOrHisLog(total, title, recPos, 1);
                                me.sendRecommendOrHisLog(hisLen, '', hisPos, 4);
                            }
                            // 左侧历史为空，直接空框
                            if (me.backFrame
                                &&  (data.g && data.g.length) 
                                &&  (data.g_mot && data.g_mot.length)
                            ) {
                                me.renderSearchHistory(data.g, '', hisPos);
                                me.renderRecomend(data.g_mot, data.g_mot_title, recPos);
                                me.renderBottomContent();
                            } else {
                                me.sendNormalSugOrHisLog({
                                    total: data.g && data.g.length,
                                });
                                me.render(me.dataArray);
                            }
                        } else if (me.inputValue === '') {
                            // 直接点击x
                            me.sendNormalSugOrHisLog({
                                total: data.g && data.g.length,
                            });
                            me.render(me.dataArray);
                        }
                        
                    }
                    // 实验二
                    if (me.currentSugSample === 'search_sug_2' || me.currentSugSample === 'search_sug_5') {
                        // 右侧猜你想搜是否展示
                        if (data.g_mot && data.g_mot.length >=3) {
                            me.showRightContent = true;
                        }
                        me.sendNormalSugOrHisLog({
                            total: data.g && data.g.length,
                        });
                        me.render(me.dataArray);
                        var total = data.g_mot && data.g_mot.length;
                        var title = data.g_mot_title;
                        // 回框展示右侧猜你想搜
                        if (me.backFrame) {
                            me.sendRecommendOrHisLog(total, title, 'right', 1);
                            me.renderRecomend(data.g_mot, data.g_mot_title, 'right');
                        } else if (me.currentSugSample === 'search_sug_5' && me.backDelete && me.inputValue !== '') {
                            me.sendRecommendOrHisLog(total, title, 'right', 1);
                            // 实验五并且是回删
                            me.renderRecomend(data.g_mot, data.g_mot_title, 'right');
                        }
                    }
                    // 实验四
                    if (me.currentSugSample === 'search_sug_4-1' || me.currentSugSample === 'search_sug_4-2') {
                        if (data.g_mot && data.g_mot.length >=3 && me.showsugstore) {
                            me.showRightContent = true;
                        }
                        me.sendNormalSugOrHisLog({
                            total: data.g && data.g.length,
                        });
                        me.render(me.dataArray);
                        if (me.backFrame) {
                            var total = data.g_mot && data.g_mot.length;
                            me.sendRecommendOrHisLog(total, data.g_mot_title, 'right', 4);
                        }
                        if (me.backFrame && me.showsugstore) {
                            me.renderSearchHistory(data.g_mot, data.g_mot_title, 'right');
                        }
                    }
                } else {
                    me.sendNormalSugOrHisLog({
                        total: data.g && data.g.length
                    });
                    me.render(me.dataArray);
                }
                
                // 回框打点
                if (me.backFrame) {
                    var showSug = $('.wrapper_new #form .bdsug-new')[0] && $('.wrapper_new #form .bdsug-new')[0].style.display === 'block';
                    // 回框
                    c({
                        ct: 10,
                        cst: 10
                    });
                    // 回框之后有展现
                    if (showSug) {
                        var uls = $('.wrapper_new #form .bdsug-new ul');
                        // 真正的展现个数
                        var count = 0;
                        uls.each(function () {
                            if ($(this).children().length > 0) {
                                count++;
                            }
                        })
                        var gLen = (data.g && data.g.length) || 0;
                        var gotLen = (data.g_mot && data.g_mot.length) || 0;
                        c({
                            ct: 10,
                            cst: 10,
                            clk_extra: JSON.stringify({
                                total: gLen + gotLen,
                                showSug: showSug ? 1 : 0,
                                module: count
                            })
                        });
                    }
                }
            } else {
                if (!(me.isSugSample3
                    && me.currentSearchStatus === 1
                    && me.backFrame
                    && me.inputValue === '')
                )  {
                    me.hideSug();
                }
            };
        },
        // 发送普通sug与his下发日志
        sendNormalSugOrHisLog(args) {
            var me = this;
            var sample = me.currentSugSample || me.currentHomeSugSample;
            var type = me.inputValue === '' ? 'his' : 'sug';
            
            c({
                ct: 10,
                cst: 7,
                clk_extra: JSON.stringify({
                    total: args.total,
                    home: bds.comm.ishome,
                    pos: 'left',
                    type: type,
                    test: sample,
                    backFrame: me.backFrame ? 1 : 0,
                    showHis: me.showsugstore ? 1 : 0,
                    status: me.currentSearchStatus
                })
            });
        },
        // 发送猜你想搜打点
        sendRecommendOrHisLog(total, title, pos, cst) {
            var me = this;
            c({
                ct: 10,
                cst: cst,
                clk_extra: JSON.stringify({
                    total: total || 0,
                    title: title || '',
                    pos: pos,
                    test: me.currentSugSample,
                    backFrame: me.backFrame ? 1 : 0,
                    showHis: me.showsugstore ? 1 : 0,
                    status: me.currentSearchStatus
                })
            });
        },
        
        //回框后有真实sug展现的pv
        sendBackFrameShowSugLog() {
            c({
                ct: 10,
                cst: 11
            });
        },
        // 构造请求地址
        buildUrl: function (val, mode, isPreReq) {
            var me = this;
            var sugsid = me.sid.replace(/_/g, ',');
            var prod = 'pc';
            if (me.sugprod) {
                prod = me.sugprod;
            }
            // 测试完换成线上接口
            var requestUrl = '/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=' + prod + '&from=pc_web'
            + (sugsid ? ('&sugsid=' + sugsid) : '');
            var hisRequestUrl = me.sugHost || 'http://suggestion.baidu.com/su';
            var hisParams = '';
            
            // 本地存储的his
            var hisdata = [];
            var storearr = [];
                
            try {
                var storestr = me.bds.se.store.get('BDSUGSTORED');
                storearr = (storestr && $.parseJSON(storestr)) || [];
            } catch (e) {
            }

            for (var i = 0; i < storearr.length; i++) {
                var t = storearr[i].t ? storearr[i].t * 1 + BDSUG_TIMESTAMP_START : new Date().getTime();
                t = Math.round(t / 1000);
                var h = {
                    time: t,
                    kw: decodeURIComponent(storearr[i].q)
                };
                if (storearr[i].s && storearr[i].s > BDSUG_QUERY_LEV) {
                    h.fq = storearr[i].s - BDSUG_QUERY_LEV + 1;
                }
                hisdata.push(h);
                if (hisdata.length > 10) {
                    hisdata.shift();
                }
            }
            // his接口
            if (val === '') {
                    requestUrl = '/sugrec?';
                    hisParams = '&prod=pc_his&from=pc_web&json=1&sid=' + me.sid + '&hisdata=';
                    if ($.stringify && hisdata.length) {
                        hisParams += encodeURIComponent($.stringify(hisdata));
                    }
                    if (window.__sam_his_hot && !(me.bds && me.bds.comm && me.bds.comm.username)) {
                        hisParams += '&type=4';
                    }
                    // 解决IE浏览器使用his请求缓存问题
                    hisParams += '&_t=' + new Date().getTime();
                // }
            }
            // 所有sug实验请求都需携带his
            if (me.resultSugSamples.indexOf(me.currentSugSample) !== -1 && val !== '') {
                if ($.stringify && hisdata.length) {
                    hisParams += '&his=' + encodeURIComponent($.stringify(hisdata));
                }
            }
            // sug回框参数，当mode=2时，为首次回框
            var sugMode = mode ? '&sugmode=' + mode : '';
            
            // 回删sugmode=3
            if (me.backDelete && me.inputValue !== '') {
                sugMode = '&sugmode=3';
            }
            // 回框时拼接hot_launch参数
            if (+mode === 2) {
                var prevRequestTime = 0;
                try {
                    prevRequestTime = +localStorage.getItem('search_request_time');
                } catch (err) {
                    console.error(err);
                }
                // 间隔时间默认为12分钟，为实验3.2时间隔时间变为30分钟
                var intervalTime = me.currentSugSample === 'search_sug_3-2' ? 1000 * 60 * 30 : 1000 * 60 * 12;
                // 0：连续搜索，1：间隔搜索
                var hotLaunch = '&hot_launch=';
                if (Date.now() - prevRequestTime > intervalTime) {
                    hotLaunch += 1;
                    me.currentSearchStatus = 1;
                } else {
                    hotLaunch += 0;
                    me.currentSearchStatus = 0;
                }
                sugMode += hotLaunch;
            }
            // var zxMode = me.withoutZhixin ? '' : '&zxmode=1';
            if (me.sugcookie > 0) {
                me.sugcookie = 3;
            };
            var url = '';
            if (val === '') {
                if (!me.isSugSample3) {
                    url = requestUrl + hisParams;
                } else {
                    url = requestUrl + '&wd=' + encodeURIComponent(me.queryValue) + hisParams;
                }
                
            } else {
                if (me.resultSugSamples.indexOf(me.currentSugSample) !== -1) {
                    url = requestUrl + '&wd=' + encodeURIComponent(val) + hisParams;
                } else {
                    url = requestUrl + '&wd=' + encodeURIComponent(val);
                }
                
            }
            if (bds.comm.supportis) {
                url += '&req=2';
            }
            // 当前被confirm的query
            if (window.bds && bds.comm && bds.comm.cur_query) {
                url += '&bs=' + encodeURIComponent(bds.comm.cur_query);
            }
            // 当前正在显示的query
            if (window.bds && bds.comm && bds.comm.cur_disp_query) {
                url += '&pbs=' + encodeURIComponent(bds.comm.cur_disp_query);
            }

            /*
            if (!val && !isPreReq) {url += '&sc=eb';};    // 空框且不是预请求，增加sc=eb参数 add by yangfan16
            */
            // 空框sug热词实验,hot(只在首页非登陆下实验生效)

            if (window._is_sugemptyhot_sam && bds.comm.ishome && !bds.comm.username && !val && !isPreReq) {
                url += '&sc=hot';
            } else if (!val && !isPreReq) {
            // 空框且不是预请求，增加sc=eb参数 add by yangfan16
                url += '&sc=eb';
            }
            if (me.ipt) {
                url += '&csor=' + getCursortPosition(me.ipt); // eslint-disable-line
            }

            if (me.pwd) {
                url += '&pwd=' + encodeURIComponent(me.pwd);
            }
            // 拼接sug回框参数
            url += sugMode;
            me.pwd = val;
            return url;
        },
        // 请求数据
        request: function (val, mode) {
            var me = this;
            var sample3 = me.currentSugSample === 'search_sug_3-1' || me.currentSugSample === 'search_sug_3-2';
            // 由于实验三间隔搜索回框时会发送两次网络请求，需判断当前输入框中的值为空时，不发起此次请求
            if (
                sample3
                && me.currentSearchStatus === 1 
                && me.backFrame
                && me.inputValue === ''
            ) {
                return;
            } 
            // query超长截断
            val && (val = $.limitWd(val, 160));
            me.directSugSelected = false;   // 每次请求前重置directSugSelected状态 add by yangfan
            
            if (val.length > me.prevQuery.length) {
                me.isAddQuery = true;
            }
            var isBackDelete = false;
            // 判断是否回删
            if (val.length < me.queryValue.length && !me.isAddQuery) {
                me.requestQuery.forEach(function (item) {
                    if (item.indexOf(val) !== -1 ) {
                        isBackDelete = true;
                    } else {
                        isBackDelete = false;
                    }
                })
            } else {
                isBackDelete = false;
            }

            if (isBackDelete) {
                me.requestQuery.push(val);
                me.backDelete = true;
            } else {
                me.backDelete = false;
            }
            
            if ($(me.form).attr('target') === '_blank' && $(me.ipt).attr('data-bfocus') === 1) {
                $(me.ipt).focus().attr('data-bfocus', 0);
            } else if (me.showsug) {
                me.reqValue = val;
                if (mode !== 2 && me.dataCached[val]) {
                    me.callback(me.dataCached[val]);
                    return;
                };
                if (me.jqXhr) {
                    me.jqXhr.abort();
                }
                if (val === '') {
                    // 实验三是会搜索词为空，此时不发his请求
                    if (me.backFrame && me.isSugSample3) {
                        requestSug();
                    } else {
                        me.jqXhr = $.ajax({
                            type: 'GET',
                            dataType: 'json',
                            async: true,
                            url: me.buildUrl(val, mode),
                            timeout: 5000,
                            xhrFields: {
                                withCredentials: true
                            },
                            crossDomain: true,
                            success: function (data) {
                                me.callback(data, mode);
                            },
                            always: function () {
                                me.jqXhr = null;
                            }
                        });
                    }
                } else {
                    requestSug();
                }

                function requestSug() {
                    me.jqXhr = $.ajax({
                        dataType: 'jsonp',
                        async: true,
                        url: me.buildUrl(val, mode),
                        jsonp: 'cb',
                        timeout: 5000,
                        success: function (data) {
                            me.callback(data, mode);
                        },
                        always: function () {
                            me.jqXhr = null;
                        }
                    });
                }

                me.rsv_sug3++;
                me.addStat('rsv_sug3', me.rsv_sug3);
                me.initTime = new Date().getTime();
            }
        },
        // 包装数据
        packData: function (data) {
            var me = this;
            var arr = [];
            me.checkHot(data);      // 检查空框sug热词数据,hot
            me.checkAla(data);
            me.checkStore(data);
            if (!me.bds.comm.supportis) {
                me.checkDirect(data);   // 检查sug直达数据 add by yangfan16
            };
            var dataMerged = me.mergeData(data);
            for (var i = 0; i < dataMerged.length; i++) {
                // 展现的最多sug条数 首页最多显示9条 update by yangfan 0115
                if (me.bds && me.bds.comm && me.bds.comm.ishome === 1 && me.bds.comm.supportis) {
                    if (i > 9) {
                        break;
                    }
                } else {
                    if (me.bds && me.bds.comm && me.bds.comm.ishome === 0
                        && me.bds.comm.supportis
                        && (dataMerged[i].type === 'store' || dataMerged[i].type === 'hot')) {
                        if (i > me.maxNum - 1 + 5) {
                            break;
                        }
                    } else if (i > me.maxNum - 1) {
                        break;
                    }
                };
                // 将数据处理为html片段
                if (me.reverse) {
                    arr.unshift(dataMerged[i]);
                }
                else
                {
                    arr.push(dataMerged[i]);
                };
            };
            return arr;
        },
        // 检查空框sug热词数据,hot
        checkHot: function (data) {
            var me = this;
            me.dataHot = [];
            if (data.g && data.g.length) {
                for (var i = 0; i < data.g.length; i++) {
                    var d = data.g[i];
                    // 判断本条为热词数据,加入dataHot全局变量中
                    if (d.t && d.t === 'hot') {
                        me.dataHot.push({'value': d.q, 'otherData': d.st});
                    } else if (window.__sam_his_hot && d.t && d.t === 'hs'
                        && !(window.me.bds && me.bds.comm && me.bds.comm.username)) {
                        me.dataHot.push({'value': d.q, 'otherData': d.st});
                    }
                };
            };
        },
        // 返回数据是否有sug直达实验数据 add by yangfan16
        checkDirect: function (data) {
            var me = this;
            me.dataDirect = [];
            if (data.tzx && data.tzx.type === '6' && data.tzx.info) {
                var d = data.tzx.info;
                me.dataDirect.push({'value': d.site, 'otherData': d});
            };
        },
        // 返回数据是否有阿拉丁
        checkAla: function (data) {
            var me = this;
            me.dataAladdin = [];
            if (data.z && data.z.length > 0 && !me.withoutRich) {
                for (var i = 0; i < data.z.length; i++) {
                    var d = data.z[i];
                    if (d.id && d.type && d.key && d.word) {
                        me.dataAladdin.push({'value': d.key, otherData: d});
                    };
                };
            } else {
                me.dataAladdin = [];
            };
        },
        // 写入历史sug
        writeStore: function (pinyin, query) {
            var me = this;
            // 历史sug存储条件为2个汉字，6个英文字母以上的query
            if (me.showsugstore && me.query && me.pinyin && checkHsugIn(me.query)) { // eslint-disable-line
                me.getStore();
                var q = encodeURIComponent(me.query.toLowerCase());
                var p = encodeURIComponent(me.pinyin.toLowerCase());
                var s = BDSUG_QUERY_LEV;
                var t = new Date().getTime() - BDSUG_TIMESTAMP_START;
                var duplicate = -1;
                // 如果已存储过，则用当前pinyin对应的query替换老的query
                $.each(me.storearr, function (i, a) {
                    if (a.p === p) {
                        a.q = q;
                        s = (a.s || BDSUG_QUERY_LEV) + 1;
                        a.t = t;
                        duplicate = i;
                    };
                });
                if (duplicate > -1) {
                    me.storearr.splice(duplicate, 1);
                }

                // 当点击框下search tag搜索时，不记入本地his
                var searchTagUrl = document.location.search || location.search;
                var isSearchTag = /base_query/.test(searchTagUrl);
                if (isSearchTag) {
                    return;
                }

                me.storearr.push({'q': q, 'p': p, 's': s, 't': t});

                // 检查存储的历史sug总数，保证不超过50个
                if (me.storearr.length > 50) {
                    me.storearr.shift();
                }
                me.setStore();
            };
        },
        // 当前query是否有历史sug
        checkStore: function (data) {
            var me = this;
            me.dataStored = [];
            // 历史sug显示条件为前缀为2个汉字，3个英文字母以上
            if (me.showsugstore && checkHsugShow(me.value)/* && !me.withoutRich*/) { // eslint-disable-line

                // 历史sug优先取服务端
                if (1 && data && data.g && data.g.length) {
                    for (var i = 0; i < data.g.length; i++) {
                        var d = data.g[i];
                        // 判断本条为历史sug数据,顺序写入dataStored全局变量中 云端无pinyin数据
                        if (d.type && (d.type === 'his_normal' || d.type === 'his_rec') && $.trim(d.q)) {
                            // 韩文sug编码返回空串,临时模版剔除
                            me.dataStored.push({'value': $.trim(d.q), 'pinyin': '|', 's': 4, 't': ''});
                        }
                    };
                };

                // 若无服务端历史sug，走本地历史sug逻辑
                if (me.dataStored.length === 0) {
                    me.getStore();
                    $.each(me.storearr, function (i, a) {
                        var q = decodeURIComponent(a.q);
                        var p = decodeURIComponent(a.p);
                        if (q.indexOf(me.value.toLowerCase()) === 0 || p.indexOf(me.value.toLowerCase()) === 0) {
                            // 最新的历史sug排在最前面
                            me.dataStored.unshift({
                                'value': q,
                                'pinyin': p,
                                's': a.s,
                                't': a.t
                            });
                        };
                    });
                };
            } else if (me.showsugstore && me.value === '') {   // 空框历史sug
                // 优先取云端历史sug
                if (1 && data && data.g && data.g.length) {
                    for (var i = 0; i < data.g.length; i++) {
                        var d = data.g[i];
                        // 判断本条为历史sug数据,顺序写入dataStored全局变量中 云端无pinyin数据
                        if (d.type && (d.type === 'his_normal' || d.type === 'his_rec') && $.trim(d.q)) {
                            // 韩文sug编码返回空串,临时模版剔除
                            me.dataStored.push({'value': $.trim(d.q), 'pinyin': '|', 's': 4, 't': ''});
                        };
                    };
                };

                if (window._is_sugempty_sam && !(me.bds && me.bds.comm && me.bds.comm.username)) {
                     // 在这里控制是否组装非登陆空框历史sug, 实验标记 && 未登录 实验下线暂时注释
                    me.getStore();
                    $.each(me.storearr, function (i, a) {
                        var q = decodeURIComponent(a.q);
                        var p = decodeURIComponent(a.p);
                        // 最新的历史sug排在最前面
                        me.dataStored.unshift({
                            'value': q,
                            'pinyin': p,
                            's': a.s,
                            't': a.t
                        });
                    });
                };
            };
            return me.dataStored;
        },
        placeHolder: function (query) {
            var me = this;
            me.placeholder = query || '';
            $(me.ipt).attr('placeholder', me.placeholder);
        },
        // 将历史sug字符串转化成json对象
        getStore: function () {
            var me = this;
            try {
                me.storestr = me.bds.se.store.get('BDSUGSTORED');
                me.storearr = (me.storestr && $.parseJSON(me.storestr)) || [];
            } catch (e) {
                me.storestr = '[]';
                me.storearr = [];
            }
            $.each(me.storearr, function (i, a) {
                a.t = a.t || 0;
                a.s = a.s || 4;
            });
        },
        // 将历史sug的json对象转化成数组储存
        setStore: function () {
            var me = this;
            var str = '';
            $.each(me.storearr, function (i, a) {
                str += (i === 0 ? '' : ',') + '{"q":"' + a.q
               + '",' + '"p":"' + a.p + '","s":' + a.s + ',"t":' + a.t + '}';
            });
            me.storestr = '[' + str + ']';
            try {
                me.bds.se.store.set('BDSUGSTORED', me.storestr);
            } catch (e) {}
        },
        // 合并数据，将历史sug，sug阿拉丁合并起来
        mergeData: function (data) {
            var me = this;
            var arr = [];
            var index = 0;
            //  0无标记 1-sug 3-his
            var logtype = 0;
            // 历史sug的展现数目归零
            me.rsv_sug = 0; // eslint-disable-line

            // 空框sug热词出现时，跳过所有sug数据，只返回热词 add by yangfan 0127
            if (me.dataHot.length > 0 && me.value === '') {
                for (var i = 0; i < me.dataHot.length; i++) {
                    index++;
                    arr.push(buildSug(me.dataHot[i].value, 'hot', me.dataHot[i].otherData));
                    if (index >= 8) {
                        break;
                    }    // 空框热词sug最多只显示8条
                };
                return arr; // 跳过所有sug数据合并阶段直接返回（不出其它sug）
            };

            // sug直达出现 add by yangfan16
            if (me.dataDirect.length > 0) {
                arr.push(buildSug(me.dataDirect[0].value, 'direct', me.dataDirect[0].otherData));
                ns_c({ // eslint-disable-line
                    'pj_name': 'zhida_sug',
                    'zhida_prefix': encodeURIComponent(me.inputValue),
                    'zhida_query': encodeURIComponent(me.dataDirect[0].value),
                    'zhida_chufa': encodeURIComponent(me.dataDirect[0].otherData.hit_q),
                    'zhida_bp': (me.bds.comm.ishome) ? 0 : 1
                });
            }
            // sug阿拉丁只出现一个
            if (me.dataAladdin.length > 0) {
                for (var i = 0; i < me.dataAladdin.length; i++) {
                    arr.push(buildSug(me.dataAladdin[0].value, 'ala', me.dataAladdin[0].otherData));
                    index++;
                    if (index >= 1) {
                        break;
                    }
                };
            };
            // 当sug阿拉丁出现时，历史sug最多出现一个且需要与阿拉丁去重，否则最多出现两个
            if (me.dataStored.length > 0) {
                for (var i = 0; i < me.dataStored.length; i++) {
                    var duplicate = false;
                    for (var j = 0; j < arr.length; j++) {
                        if ((arr[j].type !== 'direct') && me.dataStored[i].value === arr[j].value) {
                            duplicate = true;
                        };
                    };
                    // 不中策略实验或者输入框为空走线上逻辑，策略实验过滤掉历史
                    if (!duplicate && ((me.resultSugSamples.indexOf(me.currentSugSample) === -1) || me.inputValue === '') ) {
                        arr.push(buildSug(me.dataStored[i].value, 'store',
                            me.dataStored[i].pinyin, me.dataStored[i].s || 0));
                        index++;
                        if (logtype === 0 && me.dataStored[i].pinyin === '|') {
                            logtype = 3;
                        }
                    };
                    me.rsv_sug++;
                    // if (index>=2) {break};
                    // 在这里控制空框历史sug展现条数 add by yangfan 0115
                    // 当空框显示历史sug时，最多显示9条历史sug，否则最多显示2条历史sug
                    if (me.value === '' && index >= 9) {
                        break;
                    } else if (me.value !== '' && index >= 2) {
                        break;
                    };
                };
            };

            var arrNormal = [];
            // 将剩余的普通sug去重后添加
            if (data.g && data.g.length > 0) {
                for (var i = 0; i < data.g.length; i++) {
                    if (data.g[i].type === 'sug') {  // 普通sug
                        var duplicate = false;
                        for (var j = 0; j < arr.length; j++) {
                            if ((arr[j].type !== 'direct') && data.g[i].q === arr[j].value) {
                                duplicate = true;
                            };
                        };
                        if (!duplicate) {
                            arrNormal.push(buildSug(data.g[i].q, data.g[i].type, data.g[i].st));    // 普通sug
                            logtype = !logtype ? 1 : logtype;
                        };
                    };
                };
                // 空框时将空框sug前置,his-5条/is-2条
                if (me.value === '' && arrNormal.length) {
                    if (me.bds.comm.supportis) {
                        arr = arrNormal.slice(0, Math.max(4 - arr.length, 2)).concat(arr);
                    }
                    else {
                        arr = arrNormal.slice(0, Math.max(10 - arr.length, 5)).concat(arr);
                    }
                } else {
                    arr = arr.concat(arrNormal);
                }

            };
            switch (logtype) {
                case 1:
                    me.rsv_sug7[0] = 1;
                    break;
                case 3:
                    me.rsv_sug7[2] = 1;
                    break;
            }
            return arr;

            // 构建每条sug的html片段，里面包括加粗处理
            function buildSug(v, type, otherData, s) {
                var obj = {};
                obj.value = v;
                var escapedV = setBold(v, me.queryValue);
                // 是否命中sug抽样实验
                var isSugExample = me.resultSugSamples.indexOf(me.currentSugSample) !== -1 || me.currentHomeSugSample === 'home_search_sug_6';
                var hasIconExample = me.currentSugSample !== 'search_sug_1' || me.currentHomeSugSample === 'home_search_sug_6'
                switch (type) {
                    case 'direct':      // sug直达实验dom结构 add by yangfan16
                        if (otherData.iconurl === '-') {
                            obj.html = '<p link="' + otherData.siteurl + '">' + otherData.site
                            + '<span>' + otherData.showurl + '</span><i>官网</i></p>';
                        } else {
                            obj.html = '<p link="' + otherData.siteurl + '"><img src="'
                            + otherData.iconurl + '"/>' + otherData.site + '<span>' + otherData.showurl + '</span></p>';
                        };
                        obj.type = 'direct';
                        break;
                    case 'ala':
                        obj.html = '<h3>' + escapedV + '</h3><p>' + otherData.word + '</p>';
                        obj.type = 'ala';
                        obj.alaid = otherData.id;
                        break;
                    case 'store':
                        if (otherData['new'] === 2) {
                            escapedV += '<span class="bdsug-newicon">&nbsp;[<i>企业</i>]</span>';
                        }
                        // otherData为|时代表展示云端历史sug,临时
                        obj.html = '<span>' + escapedV + '</span>';
                        // 携带历史icon
                        if (isSugExample && hasIconExample) {
                            obj.html = '<i class="c-icon sug-history-icon">&#xe6a8;</i>' + escapedV;
                        }
                        if (me.bds.comm.username || otherData !== '|') {
                            obj.html += '<u class="bdsug-store-del '
                            + (otherData === '|' ? 'bdsug-store-del-cloud' : '')
                            + '" title="如您不需要此搜索历史提示，&#13;可在右上角搜索设置中关闭">删除</u>';
                        }
                        obj.type = 'store';
                        obj.pinyin = otherData;
                        obj.s = s;
                        break;
                    default:
                        if (otherData && otherData['new'] && otherData['new'] === 2) {
                            escapedV += '<span class="bdsug-newicon">&nbsp;[<i>企业</i>]</span>';
                        }
                        if (type === 'sug' && isSugExample && hasIconExample) {
                            escapedV = '<i class="c-icon sug-search-icon">&#xe6a7;</i>' + escapedV;
                        }
                        obj.html = escapedV;
                        break;
                };

                // 知心sug增加字段
                if (!me.withoutZhixin && me.zhixinsug.length > 0) {
                    for (var z = 0; z < me.zhixinsug.length; z++) {
                        // sug阿拉丁与之互斥，强制不出知心
                        if (obj.value === me.zhixinsug[z].value && obj.type !== 'ala') {
                            obj.zxtype = me.zhixinsug[z].type;
                            obj.zxurl = me.zhixinsug[z].url;
                            var arrowhtml = '<i class="bdsug-arrow"></i>';
                            if (obj.html.split(arrowhtml).length <= 1) {
                                obj.html += arrowhtml;
                            }
                        }
                    }
                }
                return obj;
                function setBold(str, q) {
                    var str = $.subByte(str, '41');
                    if (q && str) {
                        // 省略前缀的前后空格
                        str = $.trim(str);
                        q = $.trim(q);
                        if (str.indexOf(q) === 0 && str !== q) {
                            str = boldText(str, q);
                        } else {
                            str = escapeHTML(str);
                        };
                    } else {
                        str = escapeHTML(str);
                    };
                    return str;
                }
                function boldText(text, key) {
                    text = escapeHTML(text);
                    key = escapeHTML(key);
                    /* eslint-disable */
                    var str_begin = key;
                    var len = key.length;
                    var str_end = '<b>' + text.substring(len) + '</b>';
                    return (str_begin + str_end);
                    /* eslint-enable */
                }
                function escapeHTML(str) {
                    str = str.replace(/&/g, '&amp;');
                    str = str.replace(/</g, '&lt;');
                    str = str.replace(/>/g, '&gt;');
                    return str;
                }
            }
        },
        // 渲染数据 绘制sug框
        render: function (dataArray) {
            var me = this;
            me.is_selecting = false; // eslint-disable-line
            if (!me.sugcontainer) {
                me.sugcontainer = document.createElement('DIV');
                var searchNewStyle = me.searchNewStyle;
                var searchSugSampleClass = '';
                
                me.sugcontainer.className = searchNewStyle ? 'sam-bdsug bdsug bdsug-new new-pmd' + searchSugSampleClass : 'bdsug bdsug-new new-pmd' + searchSugSampleClass;
                
                // 绑定sug框内元素事件
                $(me.sugcontainer).delegate('li', 'mouseenter', function () {
                    /**
                     * 描述：sug 输入法半上屏状态case修复
                     * Case文档：https://ku.baidu-int.com/knowledge/HFVrC7hq1Q/pKzJfZczuc/2-JDNl-Tpy/ymOmuQJTa8xHAx
                     * 当鼠标mouseenter sug item 时，停止轮询，此时输入框内容改变，不触发sug重新渲染
                     */
                    me.stopCircle();
                    var v = $(this).data('key');
                    me.blurSug($(me.sugcontainer).find('li'));
                    me.focusSug(this, v);
                    me.index = $(me.sugcontainer).find('li').index($(this));
                    me.hoverSug = v;
                }).delegate('li', 'mouseleave', function () {
                    /**
                     * 描述：sug 输入法半上屏状态case修复
                     * Case文档：https://ku.baidu-int.com/knowledge/HFVrC7hq1Q/pKzJfZczuc/2-JDNl-Tpy/ymOmuQJTa8xHAx
                     * 当鼠标mouseenter sug item 时，停止轮询，此时输入框内容改变，不触发sug重新渲染
                     */
                    me.startCircle();
                    $(this).removeClass('bdsug-s');
                }).delegate('li', 'click', function () {
                    me.startCircle();
                    var v = $(this).data('key');
                    
                    var hiddenDefaulQuery = $('.kw-placeholder').hasClass('placeholders-hidden');
                    !hiddenDefaulQuery && $('.kw-placeholder').addClass('placeholders-hidden');
                    me.directSugSelected = ($(this).hasClass('bdsug-direct')) ? true : false; // 判断直达链接sug是否为点中 add by yangfan
                    if ($(this).hasClass('bdsug-hot')) {
                        me.addStat('rsv_sug8', 'hot');
                    }
                    me.sugValue = me.showValue = me.value = me.ipt.value = v;
                    me.index = $(me.sugcontainer).find('li').index($(this));
                    me.ipt.value ? me.quickdelete._show() : me.quickdelete._hide();
                    me.hideSug();
                    if (me.bds && me.bds.comm && me.bds.comm.ishome === 0) {
                        me.addStat('oq', me.bds.comm.confirmQuery ? xss(me.bds.comm.confirmQuery) : '');
                    }
                    if (me.bds && me.bds.comm && me.bds.comm.confirmQid) {
                        me.addStat('rsv_pq', me.bds.comm.confirmQid);
                    }
                    me.addStat('sug', xss(v));
                    me.addStat('rsv_sug2', 1);
                    me.formSubmit();
                });
                $(me.sugcontainer).click(function (e) {
                    e.stopPropagation();
                });
            }
            
            if (dataArray.length > 0) {
                var suglist = document.createElement('UL');
                // 结果页
                if (!bds.comm.ishome) {
                    suglist.setAttribute('id', 'normalSugSearchUl')
                }
                var sclickUrl = me.bds && me.bds.util
                && me.bds.util.domain ? me.bds.util.domain.get('http://sclick.baidu.com') : 'http://sclick.baidu.com';
                for (var i = 0; i < dataArray.length; i++) {
                    var sugli = document.createElement('LI');
                    sugli.innerHTML = dataArray[i].html;
                    // sug知心结果交互
                    if (dataArray[i].zxtype && dataArray[i].zxurl) {
                        // 向aladdin openapi发送异步数据
                        var v = dataArray[i].value;
                        var t = dataArray[i].zxtype;
                        var url = dataArray[i].zxurl;
                        var hasData = (me.zhixindata[v] && me.zhixindata[v].responseJSON
                            && me.zhixindata[v].responseJSON.status === 0 && me.zhixindata[v].responseJSON.data
                            && me.zhixindata[v].responseJSON.data.length > 0);
                        if (!hasData) {
                            me.zhixindata[v] = $.ajax({
                                dataType: 'jsonp',
                                async: true,
                                url: url,
                                jsonp: 'cb'
                            });
                        }
                        $(sugli).addClass('bdsug-zx').on('focused', function () {
                            var v = $(this).data('key');
                            var hasData = (me.zhixindata[v] && me.zhixindata[v].responseJSON
                                && me.zhixindata[v].responseJSON.status === 0
                                && me.zhixindata[v].responseJSON.data && me.zhixindata[v].responseJSON.data.length > 0);
                            var sugzxbox = $(me.sugcontainer).find('.bdsug-box')[0];
                            if (hasData && sugzxbox) {
                                if (me.bds.se.sugzx && me.bds.se.sugzx[t]) {
                                    // sug知心的构建模板需要返回一个jquery对象
                                    var $sugzxbox = me.bds.se.sugzx[t](me.zhixindata[v].responseJSON.data,
                                        v, me.outInterface(), me);
                                    if ($sugzxbox instanceof jQuery) {
                                        $(me.sugcontainer).addClass('bdsug-showzx');
                                        $(sugzxbox).empty().append($sugzxbox);
                                        // sug高度被右侧box撑开
                                        if ($(me.sugcontainer).height()
                                            < $(me.sugcontainer).find('.bdsug-box').height()) {
                                            $(me.sugcontainer).css({
                                                'height': $(me.sugcontainer).find('.bdsug-box').height()
                                            });
                                        }
                                    }
                                }
                            }
                        }).on('blured', function () {
                            $(me.sugcontainer).removeClass('bdsug-showzx');
                            $(me.sugcontainer).css({'height': 'auto'});
                        });
                    }
                    me.setSug(sugli, dataArray[i].value, dataArray[i].type);
                    suglist.appendChild(sugli);
                };
                if (me.form) {
                    $(me.sugcontainer).insertBefore(me.form.firstChild);
                }
                else
                {
                    $(me.ipt).after(me.sugcontainer);
                };
                // 修复sug闪烁问题
                var tmpContainer = document.createElement('div');
                tmpContainer.appendChild(suglist);
                // bca-disable-line
                me.sugcontainer.innerHTML = tmpContainer && tmpContainer.innerHTML;
                $(me.sugcontainer).removeClass('bdsug-showzx');
                $(me.sugcontainer).css({'height': 'auto'});

                var suglis = $(me.sugcontainer).find('ul li');
                if (!me.withoutZhixin) {
                    $(me.sugcontainer).addClass('bdsug-showarrow');
                    $(me.sugcontainer).append($('<div class="bdsug-box"></div>'));
                    if (!$(me.form).find('.bdsug-tmp').length) {
                        $(me.form).append($('<div class="bdsug-tmp"></div>'));
                    }
                    $(me.sugcontainer).find('.bdsug-box').on('mouseenter', function () {
                        $(me.sugcontainer).addClass('bdsug-showzx');
                        $(suglis[me.index]).addClass('bdsug-s');
                    }).on('mouseleave', function () {
                        $(me.sugcontainer).removeClass('bdsug-showzx');
                        $(suglis[me.index]).removeClass('bdsug-s');
                        $(me.sugcontainer).css({'height': 'auto'});
                    }).on('click', function (e) {
                        e.stopPropagation();
                    });
                }
                // 判断超长的截断，与箭头标识的位置
                $(me.form).find('.bdsug-tmp').empty();
                var $lishort = $('<li>').appendTo($('<div>').addClass('bdsug-showzx')
                    .appendTo($(me.form).find('.bdsug-tmp')));
                var $div = $('<div>').css({
                        'position': 'absolute',
                        'display': 'inline-block',
                        'top': '-10000px',
                        'left': '-10000px'
                    }).appendTo($(me.form).find('.bdsug-tmp'));
                $.each(suglis, function (i, li) {
                    $div.html($(li).html());
                    var cut = 28;
                    if ($div.width() > ($lishort.width() - $(me.sugcontainer).find('.bdsug-arrow').width() - cut)) {
                        $(li).addClass('bdsug-overflow c-line-clamp1');
                    }
                });

                // 当显示空框sug热词时，渲染首尾 title & 不再显示 功能 add by yangfan 0127
                // if (me.value === '' && me.dataHot.length) {
                //     $(me.sugcontainer).prepend('<div style="height:25px; line-height:31px; padding-left:10px; font-size:12px; color:#999; overflow:hidden;">实时热搜</div>');
                // };

                // 统计参数临时使用
                var currentPage = '0';
                if (me.bds.comm.ishome === 0) {
                    currentPage = '0';    // 结果页
                } else if (me.bds.comm.ishome === 1 && window.s_domain && window.s_domain.base === 'home') {
                    currentPage = '2';    // 新首页
                } else if (me.bds.comm.ishome === 1) {
                    currentPage = '1';    // 传统首页
                };

                // 当显示空框历史sug时发ns展现日志，并渲染“全部删除”功能 add by yangfan 0115
                if (me.value === '' && dataArray.length) {
                    var stoneSugNum = 0;
                    for (var i = 0; i < dataArray.length; i++) {
                        if (dataArray[i].type && dataArray[i].type === 'store') {
                            stoneSugNum ++;
                        };
                    };

                    ns_c({ // eslint-disable-line
                        'pj_name': 'es_sug',
                        'es_sug_hot': me.dataHot.length,
                        'es_sug_num': dataArray.length,
                        'eb_sug_num': dataArray.length - stoneSugNum,
                        'es_sug_bp': currentPage + '_' + (me.bds.comm.supportis ? 1 : 0)
                    });
                    if ($('.bdsug-feedback-wrap').length > 0) {
                        $('.bdsug-feedback-wrap').remove();
                    }

                    if ((me.dataStored.length && me.dataStored.length > 3)
                        || (me.dataHot.length && me.dataHot.length > 3)) {
                        var searchNewStyle = me.searchNewStyle;
                        var newRight = searchNewStyle ? 15 : 12;
                        var newTop = searchNewStyle ? 0 : -5;
                        var newBottom = searchNewStyle ? 'margin-bottom: 1px;' : '';
                        var closeHtml = '';
                        var setHisHtml = '<span class="setup_storeSug" style="'
                                        + 'margin-right:' + newRight + 'px; text-decoration:none; cursor:pointer;'
                                        + 'font-size: 13px; color: #9195a3'
                                        + '">关闭历史</span>';
                        if (me.hisSwitch === false) {
                            setHisHtml = '';
                        }
                        if (me.bds.comm.username) {
                            closeHtml = '<div style="text-align:right; '
                            + 'background:none; height: 25px; line-height: 15px; border-radius: 0 0 10px 10px;'
                            + 'padding-bottom: 2px;margin-top: ' + newTop + 'px;'
                            + newBottom
                            + '">'
                            + setHisHtml
                            + '<span class="del_all_storeSug" '
                            + 'style="margin-right:' + newRight + 'px; text-decoration:none; cursor:pointer;'
                            + 'font-size: 13px; color: #9195a3">删除历史</span>'
                            + '<a class="more_storeSug" href="http://i.baidu.com/my/history?from=pssug"'
                            + 'target="_blank" style="color:#666; text-decoration:none;'
                            + 'margin-right:' + newRight + 'px; font-size: 13px; color: #9195a3">更多历史'
                            + '</a>'
                            + '</div>';
                            $(me.sugcontainer).append(closeHtml);
                        } else {
                            closeHtml = '<div style="text-align:right; '
                            + 'background:none; height: 25px; line-height: 15px; border-radius: 0 0 10px 10px;'
                            + 'padding-bottom: 2px;margin-top: ' + newTop + 'px;'
                            + newBottom
                            + '">'
                            + '<span class="setup_storeSug" style="margin-right:' + newRight + 'px; '
                            + 'text-decoration:none; cursor:pointer;font-size: 13px; color: #9195a3">关闭历史</span>'
                            + '</div>';
                            $(me.sugcontainer).append(closeHtml);
                        }
                        $(me.sugcontainer).find('.del_all_storeSug').click(function () {
                            c({
                                ct: 10,
                                cst: 12
                            });
                            // 云端历史sug,点击后调用ae接口删除全部记录
                            if (me.dataStored[0] && me.dataStored[0].pinyin && me.dataStored[0].pinyin === '|') {
                                var deleteAllUrl = 'https://www.baidu.com/recsys/hisproxy/data/usrclear';
                                $.ajax({
                                    type: 'POST',
                                    dataType: 'json',
                                    scriptCharset: 'utf-8',
                                    timeout: 6000,
                                    url: deleteAllUrl,
                                    xhrFields: {
                                        withCredentials: true
                                    },
                                    crossDomain: true,
                                    success: function () {return;}
                                });
                            };
                            // 点击后直接删除所有本地存储的历史sug
                            me.storearr = [];
                            me.setStore();
                            me.hideSug();
                            // 全部删除历史sug时立即单独发送一个统计
                            var img = window['BD_PS_C' + (new Date()).getTime()] = new Image();
                            img.src = sclickUrl
                            + '/w.gif?q=delall&fm=beha&rsv_sug=delall&rsv_sid='
                            + me.bds.comm.sid + '&t='
                            + new Date().getTime() + '&rsv_sug9=es_' + currentPage
                            + '_' + (me.bds.comm.supportis ? 1 : 0) + '&path=http://www.baidu.com';
                        });

                        $(me.sugcontainer).find('.more_storeSug').click(function () {
                            ns_c({ // eslint-disable-line
                                'pj_name': 'hs_sug_more'
                            });
                        });
                        $(me.sugcontainer).find('.close_hotSug').click(function () {
                            me.hideSug();
                            ns_c({ // eslint-disable-line
                                'pj_name': 'hot_sug_close'
                            });
                        });
                        $(me.sugcontainer).find('.setup_storeSug').click(function () {
                            // 打开设置面板
                            me.bds.event.trigger('bd.se.loadpanel', {
                                'tab': 'general',
                                'tipsConfig': {
                                    'content': (me.bds && me.bds.comm && me.bds.comm.username)
                                    ? '关闭该账号下所有设备的搜索历史'
                                    : '该选项可以关闭您的历史记录',
                                    'wrapper': '#se-setting-5'
                                }
                            });
                            me.hideSug();
                            ns_c({ // eslint-disable-line
                                'pj_name': 'hs_sug_setup'
                            });
                        });
                    };
                };
                // 历史sug删除点击事件
                $.each(suglis, function (i, li) {
                    if (dataArray[i] && dataArray[i].type === 'store') {
                        $(li).find('u').click(function (e) {
                            e.stopPropagation();
                            $(li).remove();

                            if (me.bds && me.bds.comm && me.bds.comm.username) {
                                var query = $(this).parent().attr('data-key');
                                me.requestDelHis(query);
                            };

                            if (dataArray[index].pinyin && dataArray[index].pinyin === '|') {
                                // 删除云端历史sug,临时,pinyin=|为云端历史sug判断标志
                                // 删除云端历史sug时清空缓存
                                me.dataCached = {};
                                // 删除本地历史sug中和选中value相同的元素
                                var suginstore = false;
                                $.each(me.storearr, function (dex, arr) {
                                    if (encodeURIComponent(me.dataArray[index].value) === me.storearr[dex].q) {
                                        suginstore = dex;
                                    }
                                });
                                if (suginstore !== false) {
                                    me.storearr.splice(suginstore, 1);
                                    me.setStore();
                                }

                            } else {
                                // 删除本地历史sug中和选中value相同的元素
                                var suginstore = false;
                                $.each(me.storearr, function (dex, arr) {
                                    if (me.dataArray[index].pinyin === decodeURIComponent(me.storearr[dex].p)) {
                                        suginstore = dex;
                                    }
                                });
                                if (suginstore !== false) {
                                    me.storearr.splice(suginstore, 1);
                                    me.setStore();
                                }
                            };

                            // 删除历史sug时立即单独发送一个统计
                            var img = window['BD_PS_C' + (new Date()).getTime()] = new Image();
                            img.src = sclickUrl + '/w.gif?q=' + encodeURIComponent(dataArray[index].value)
                            + '&fm=beha&rsv_sug=del&rsv_sid=' + me.bds.comm.sid
                            + '&t=' + new Date().getTime()
                            + ((me.value === '') ? ('&rsv_sug9=es_' + currentPage
                            + '_' + (me.bds.comm.supportis ? 1 : 0)) : '') + '&path=http://www.baidu.com';
                        });
                    }
                });
                // 普通历史与普通sug打点
                $('#normalSugSearchUl li').each(function (i) {
                    var backFrame = me.backFrame ? 1 : 0;
                    $(this).click(function () {
                        c({
                            ct: 10,
                            cst: 9,
                            clk_extra: JSON.stringify({
                                index: i,
                                home: bds.comm.ishome,
                                type: (dataArray[i] && dataArray[i].type === 'store') ? 'his' : 'sug',
                                pos: 'left',
                                backFrame: backFrame
                            })
                        });
                    })
                })
                var leftIe7 = !!window.ActiveXObject && (!document.documentMode || document.documentMode <= 9);
                if (!leftIe7) {
                    if ($('.bdsug-feedback-wrap').length !== 0) {
                        $('.bdsug-feedback-wrap').remove();
                    }
                    if (me.value !== '' && me.useFeedback !== false) {
                        $(me.sugcontainer).append('<div class="bdsug-feedback-wrap">'
                            + '<span class="bdsug-feedback">反馈</span></div>');
                        $('.bdsug-feedback-wrap').on('click', function () {
                            var dataArrayList = me.dataArray;
                            me.dataArray.forEach(function (item, index) {
                                dataArrayList[index] = item.value;
                            });
                            c({
                                ct: 10,
                                cst: 13
                            });
                            var gMot = me.requestDefaultData.g_mot || [];
                            if (me.currentSugSample === 'search_sug_2' || me.currentSugSample === 'search_sug_5') {
                                // 展示猜你想搜加入反馈
                                if (gMot.length >= 3) {
                                    gMot.forEach(function (item) {
                                        dataArrayList.push(item.q);
                                    })
                                }
                            }
                            
                            me.bds.se.ShortCut.initSugBar(dataArrayList);
                            me.hideSug();
                        });
                    }
                }
                $(me.ipt).trigger('render', [me]);
                me.renderCallback();
                me.showSug();
                $(me.ipt).trigger('showSug', [me]);
                var samples = ['search_sug_2', 'search_sug_3-1', 'search_sug_3-2', 'search_sug_4-1', 'search_sug_4-2', 'search_sug_5'];
                // 所有sug实验
                if (samples.indexOf(me.currentSugSample) !== -1
                    && me.showRightContent
                    && (me.backFrame || (me.currentSugSample === 'search_sug_5' && me.backDelete)) //实验五回删需添加此类名
                ) {
                    $('.wrapper_new #form .bdsug-new').addClass('search-sug-short');
                } else {
                    $('.wrapper_new #form .bdsug-new').removeClass('search-sug-short');
                }
                
            } else {
                me.renderCallback();
                me.hideSug();
            };
        },
        // 渲染sug外层容器
        renderSugContainer: function () {
            var me = this;
            if (!me.sugcontainer) {
                me.sugcontainer = document.createElement('DIV');
                var searchNewStyle = me.searchNewStyle;
                me.sugcontainer.className = searchNewStyle ? 'sam-bdsug bdsug bdsug-new new-pmd bdsug-sample3' : 'bdsug bdsug-new new-pmd bdsug-sample3';
            }
            if (me.form) {
                $(me.sugcontainer).insertBefore(me.form.firstChild);
            } else {
                $(me.ipt).after(me.sugcontainer);
            }
        },
        escapeHTML: function(str) {
            str = str.replace(/&/g, '&amp;');
            str = str.replace(/</g, '&lt;');
            str = str.replace(/>/g, '&gt;');
            return str;
        },
        // 渲染搜索历史
        renderSearchHistory: function (list, title, pos) {
            var me = this;
            me.renderSugContainer();
            var hisData = list || [];
            
            $('#sugSearchHisUl')[0] && $('#sugSearchHisUl')[0].remove();
            $('#rightSugSearchHisUl')[0] && $('#rightSugSearchHisUl')[0].remove();
            if (me.isSugSample3) {
                $('#normalSugSearchUl')[0] && $('#normalSugSearchUl')[0].remove();
                $('.bdsug-feedback-wrap')[0] && $('.bdsug-feedback-wrap')[0].remove();
            }
            
            var hisUl = document.createElement('ul');
            
            me.sugcontainer.appendChild(hisUl);
            var isSugSample4 = me.currentSugSample === 'search_sug_4-1' || me.currentSugSample === 'search_sug_4-2';
            var hisUlId = isSugSample4 ? 'rightSugSearchHisUl' : 'sugSearchHisUl';
            hisUl.setAttribute('id', hisUlId);
            var hisUlSelector = '#' + hisUlId;
            if (isSugSample4 && title) {
                hisUlSelector = '#rightSugSearchHisUl';
                var titleEl = document.createElement('div');
                titleEl.setAttribute('class', 'search-history-title');
                // bca-disable-line 
                titleEl.innerHTML = me.escapeHTML(title);
                $(hisUlSelector)[0] && $(hisUlSelector)[0].append(titleEl);
            }
            

            var delHtml = '<u class="bdsug-store-del bdsug-store-del-cloud'
                + '" title="如您不需要此搜索历史提示，&#13;可在右上角搜索设置中关闭">删除</u>';
            if (bds.comm.isUserLogin === '0') {
                delHtml = '';
            }
            for (var i = 0; i < hisData.slice(0, 10).length; i++) {
                var hisLi = document.createElement('li');
                hisLi.setAttribute('class', 'c-line-clamp1');
                // bca-disable-line 
                hisLi.innerHTML = '<i class="c-icon sug-history-icon">&#xe6a8;</i>'
                    + me.escapeHTML(hisData[i].q)
                    + delHtml;

                me.setSug(hisLi, hisData[i].q, hisData[i].type);
                $(me.sugcontainer).delegate('li', 'mouseenter', function () {
                    $(this).addClass('bdsug-s')
                }).delegate('li', 'mouseleave', function () {
                    $(this).removeClass('bdsug-s');
                }).delegate('li', 'click', function () {
                   
                    me.startCircle();
                    var v = $(this).data('key');
                    me.sugValue = me.showValue = me.value = me.ipt.value = v;
                    me.index = $(me.sugcontainer).find('li').index($(this));
                    me.ipt.value ? me.quickdelete._show() : me.quickdelete._hide();
                    me.hideSug();
                    me.formSubmit();
                })
                hisUl.appendChild(hisLi);
            }

            if (isSugSample4) {
                var hisHeight = $('#rightSugSearchHisUl').height();
                var normalHeight = $('#normalSugSearchUl').height();
                if (hisHeight > normalHeight) {
                    $('#normalSugSearchUl').height(hisHeight);
                } else {
                    $('#normalSugSearchUl').height(normalHeight);
                }
            }
            $(hisUlSelector + ' li').each(function (i) {
                var backFrame = me.backFrame;
                $(this).click(function () {
                    c({
                        ct: 10,
                        cst: 6,
                        clk_extra: JSON.stringify({
                            pos: pos,
                            index: i,
                            status: me.currentSearchStatus,
                            test: me.currentSugSample,
                            backFrame: backFrame
                        })
                    });
                });
            });
            $(hisUlSelector + ' li u').each(function (i, el) {
                $(el).on('click', function (e) {
                    e.stopPropagation();
                    
                    // 当历史删完时，若有搜索历史标题，则将其移除
                    if ($(hisUlSelector + ' li').length === 1) {
                        $('.search-history-title')[0] && $('.search-history-title')[0].remove();
                        if (me.currentSugSample === 'search_sug_3-1' || me.currentSugSample === 'search_sug_3-2') {
                            // 当左侧历史消失时，设置右侧猜你想搜位于左侧样式
                            me.setLeftGussStyle();
                        }
                    }
                    // 删除的历史
                    var query = $(this).parent().attr('data-key');
                    var localData = [];
                    try {
                        var localStr = localStorage.getItem('BDSUGSTORED');
                        localData = JSON.parse(localStr);
                    } catch (err) {
                        console.error(err);
                    }
                    localData = localData.filter(function (item) {
                        return decodeURIComponent(item.q) !== query;
                    })
                    // 更新本地存储
                    try {
                        localStorage.setItem('BDSUGSTORED', JSON.stringify(localData));
                    } catch (err) {
                        console.error(err);
                    }
                    // 删除远端历史
                    me.requestDelHis(query);
                    $(this.parentNode).remove();
                    // 当右侧历史消失时，需要重新设置左侧sug宽度
                    if ($('#rightSugSearchHisUl li').length === 0) {
                        $('#normalSugSearchUl').width('auto');
                        $('#normalSugSearchUl li').width('auto');
                    }
                })
            })

            me.renderCallback();
            me.showSug();
        },
        // 删除his请求
        requestDelHis(query) {
            var deleteUrl = 'https://www.baidu.com/recsys/hisproxy/data/usrdelete';
            $.ajax({
                type: 'POST',
                scriptCharset: 'utf-8',
                dataType: 'json',
                timeout: 6000,
                url: deleteUrl,
                data: {
                    items: JSON.stringify([{query: query, ts: ''}])
                },
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function () {
                    return;
                }
            });
        },
        // 渲染左侧猜你想搜样式
        setLeftGussStyle() {
            $('#sugSearchGuessUl').attr('id', 'leftSugSearchHisUl');
            $('bdsug bdsug-new new-pmd').css('overflow', 'hidden');
            $('.wrapper_new #form .bdsug-new').css('overflow', 'hidden');
        },
        // 渲染猜你想搜
        renderRecomend: function (data, title, pos) {
            var me = this;
            me.renderSugContainer();
            // 测试用g，后面换成g_mot
            var recommendData = data || [];
            $('#sugSearchGuessUl')[0] && $('#sugSearchGuessUl')[0].remove();
            $('#leftSugSearchHisUl')[0] && $('#leftSugSearchHisUl')[0].remove();
            if (recommendData.length >= 3) {
                // 挂载外层容器
                var recommendUl = document.createElement('ul');
                var hisData = me.requestDefaultData.g_mot;
                // 没有历史记录
                if (hisData && hisData.length === 0) {
                    recommendUl.setAttribute('id', 'leftSugSearchHisUl');
                    me.setLeftGussStyle();
                } else {
                    recommendUl.setAttribute('id', 'sugSearchGuessUl');
                }
                
                me.sugcontainer.appendChild(recommendUl);
                var titleEl = document.createElement('div');
                titleEl.setAttribute('class', 'search-recommend-title');
                // bca-disable-line 
                titleEl.innerHTML = me.escapeHTML(title);
                $('#sugSearchGuessUl')[0] && $('#sugSearchGuessUl')[0].append(titleEl);
                // 最多7条
                for (var i = 0; i < recommendData.slice(0, 7).length; i++) {
                    var recommendLi = document.createElement('li');
                    recommendLi.setAttribute('class', 'c-line-clamp1');
                    // bca-disable-line 
                    recommendLi.innerHTML = '<i class="c-icon sug-search-icon">&#xe6a7;</i>'
                        + me.escapeHTML(recommendData[i].q);

                    me.setSug(recommendLi, recommendData[i].q, recommendData[i].type);
                    $(me.sugcontainer).delegate('li', 'mouseenter', function () {
                        $(this).addClass('bdsug-s')
                    }).delegate('li', 'mouseleave', function () {
                        $(this).removeClass('bdsug-s');
                    }).delegate('li', 'click', function () {
                        
                        me.startCircle();
                        var v = $(this).data('key');
                        me.sugValue = me.showValue = me.value = me.ipt.value = v;
                        me.index = $(me.sugcontainer).find('li').index($(this));
                        me.ipt.value ? me.quickdelete._show() : me.quickdelete._hide();
                        me.hideSug();
                        me.formSubmit();
                    })
                    recommendUl.appendChild(recommendLi);
                }
                var lis = $('#sugSearchGuessUl li').length ? $('#sugSearchGuessUl li') : $('#leftSugSearchHisUl li');
                lis.each(function (i) {
                    var backFrame = me.backFrame ? 1 : 0;
                    $(this).click(function () {
                        // 点击打点
                        c({
                            ct: 10,
                            cst: 3,
                            clk_extra: JSON.stringify({
                                index: i,
                                pos: pos,
                                status: me.currentSearchStatus,
                                test: me.currentSugSample,
                                backFrame: backFrame
                            })
                        });
                    })
                });
                var sugHeight = $('#sugSearchGuessUl').height();
                var normalHeight = $('#normalSugSearchUl').height();
                if (sugHeight > normalHeight) {
                    $('#normalSugSearchUl').height(sugHeight);
                } else {
                    $('#normalSugSearchUl').height(normalHeight);
                }

                me.renderCallback();
                me.showSug();

            }
        },
        renderBottomContent(data) {
            var me = this;
            // 请求的原始数据
            var data = me.requestDefaultData;
            $('.search-sug-bottom-tools')[0] && $('.search-sug-bottom-tools')[0].remove();
           
            var closeHtml = '<span class="setup_storeSug">关闭历史</span>';
            var mainHtml = '<span class="del_storeSug">删除历史</span>'
                + '<a class="more_storeSug" '
                + 'href="http://i.baidu.com/my/history?from=pssug"'
                + 'target="_blank" class="more_storeSug">更多历史</a>';
            var feedbackHtml = '<span class="bdsug-feedback">反馈</span>'
            
          
            // 左侧历史小于4条时，不展示关闭历史、删除历史、更多历史
            if ((data.g && data.g.length < 4) || !me.showsugstore) {
                closeHtml = '';
                mainHtml = '';
            }
            // 未登录，只展现关闭历史
            if (!(+bds.comm.isUserLogin)) {
                mainHtml = '';
            }
            
            // 用户未开启历史
            if (!me.showsugstore) {
                $('#sugSearchGuessUl').attr('id', 'leftSugSearchHisUl');
                var height = $('#sugSearchHisUl').height();
                $('#sugSearchHisUl li').each(function () {
                    this.remove();
                })
                $('#leftSugSearchHisUl .search-recommend-title').css('margin', 0);
                $('#sugSearchHisUl').height(height + 28);
            }
            // 右侧猜你想搜>=3条
            if (data.g_mot && data.g_mot.length < 3) {
                feedbackHtml = '';
            }
            // 两栏时高度计算
            var guessHeight = $('#sugSearchGuessUl').height();
            if (me.currentSearchStatus === 0) {
                var sugHeight = $('#normalSugSearchUl').height();
                if (sugHeight > guessHeight) {
                    $('#normalSugSearchUl').height(sugHeight);
                } else {
                    $('#normalSugSearchUl').height(guessHeight);
                }
            } else if (me.currentSearchStatus === 1) {
                // 实验三间隔搜索
                var hisHeight = (me.isSugSample3 && !me.showsugstore) ? $('#leftSugSearchHisUl').height() : $('#sugSearchHisUl').height();
                if (me.isSugSample3 && !me.showsugstore) {
                    guessHeight = $('#sugSearchHisUl').height();
                }
                if (hisHeight > guessHeight) {
                    $('#sugSearchHisUl').height(hisHeight);
                } else {
                    $('#sugSearchHisUl').height(guessHeight);
                }
            }
           
            var container = '<div class="search-sug-bottom-tools">'
                    + closeHtml
                    + mainHtml
                    + feedbackHtml
                    + '</div>';
            
            $(me.sugcontainer).append(container);
            $(me.sugcontainer).find('.del_storeSug').click(function () {
                c({
                    ct: 10,
                    cst: 12,
                });
                me.aa = true;
                // 云端历史sug,点击后调用ae接口删除全部记录
                if (me.dataStored[0] && me.dataStored[0].pinyin && me.dataStored[0].pinyin === '|') {
                    var deleteAllUrl = 'https://www.baidu.com/recsys/hisproxy/data/usrclear';
                    $.ajax({
                        type: 'POST',
                        dataType: 'json',
                        scriptCharset: 'utf-8',
                        timeout: 6000,
                        url: deleteAllUrl,
                        xhrFields: {
                            withCredentials: true
                        },
                        crossDomain: true,
                        success: function () {return;}
                    });
                };
                // 点击后直接删除所有本地存储的历史sug
                me.storearr = [];
                try {
                    localStorage.setItem('BDSUGSTORED', '');
                } catch (err) {
                    console.error(err);
                }
                // 点击删除历史，左侧历史消失，右侧移到左边
                me.showSug();
                $('#sugSearchHisUl li').each(function () {
                    $(this).remove();
                })
                $('#sugSearchGuessUl').attr('id', 'leftSugSearchHisUl');
                // 全部删除历史sug时立即单独发送一个统计
                var currentPage = '0';
                if (me.bds.comm.ishome === 0) {
                    currentPage = '0';    // 结果页
                } else if (me.bds.comm.ishome === 1 && window.s_domain && window.s_domain.base === 'home') {
                    currentPage = '2';    // 新首页
                } else if (me.bds.comm.ishome === 1) {
                    currentPage = '1';    // 传统首页
                };
                var img = window['BD_PS_C' + (new Date()).getTime()] = new Image();
                var sclickUrl = me.bds && me.bds.util
                && me.bds.util.domain ? me.bds.util.domain.get('http://sclick.baidu.com') : 'http://sclick.baidu.com';
                img.src = sclickUrl
                + '/w.gif?q=delall&fm=beha&rsv_sug=delall&rsv_sid='
                + me.bds.comm.sid + '&t='
                + new Date().getTime() + '&rsv_sug9=es_' + currentPage
                + '_' + (me.bds.comm.supportis ? 1 : 0) + '&path=http://www.baidu.com';
            });

            $(me.sugcontainer).find('.more_storeSug').click(function () {
                ns_c({ // eslint-disable-line
                    'pj_name': 'hs_sug_more'
                });
            });
            $(me.sugcontainer).find('.close_hotSug').click(function () {
                me.hideSug();
                ns_c({ // eslint-disable-line
                    'pj_name': 'hot_sug_close'
                });
            });
            $(me.sugcontainer).find('.setup_storeSug').click(function () {
                // 打开设置面板
                me.bds.event.trigger('bd.se.loadpanel', {
                    'tab': 'general',
                    'tipsConfig': {
                        'content': (me.bds && me.bds.comm && me.bds.comm.username)
                        ? '关闭该账号下所有设备的搜索历史'
                        : '该选项可以关闭您的历史记录',
                        'wrapper': '#se-setting-5'
                    }
                });
                me.hideSug();
                ns_c({ // eslint-disable-line
                    'pj_name': 'hs_sug_setup'
                });
            });

            $('.bdsug-feedback').on('click', function () {
                c({
                    ct: 10,
                    cst: 13,
                });
                var dataList = [];
                var gMot = data.g_mot && data.g_mot.length && data.g_mot;
                gMot.forEach(function (item) {
                    dataList.push(item.q)
                })
                me.bds.se.ShortCut.initSugBar(dataList);
                me.hideSug();
            });
        },
        // setComplete 设置搜索框是否出浏览器默认suggestion
        setAutocomplete: function (c) {
            var me = this;
            $(me.ipt).attr('autocomplete', c);
        },
        // 每条sug添加数据属性
        setSug: function (li, v, type) {
            var me = this;
            $(li).attr('data-key', v);
            if (type) {
                $(li).addClass('bdsug-' + type);
            };
        },
        // 点击搜索框，显示推荐sug
        clickIpt: function () {
            var me = this;
            // 页面query与输入框内容相同时，请求mod=2
            if (me.bds.comm.query && me.ipt.value && me.bds.comm.query === me.ipt.value) {
                me.request(me.ipt.value, '2');
                me.backFrame = true;
            } else {
                me.request(me.ipt.value);
                me.backFrame = false;
            };
        },
        showSug: function () {
            var me = this;
            me.index = -1;
            if (
                me.ipt.value === me.reqValue 
                || (me.isSugSample3 && me.currentSearchStatus === 1)
            ) {
                if (me.bds.comm.ishome) {
                    $(me.ipt).addClass('new-ipt-focus');
                } else {
                    $('.s_ipt_wr').addClass('new-ipt-focus');
                }
                $(me.sugcontainer).show();
            }
            me.visible = true;
            me.rsv_sug1++;
            /* eslint-disable */
            me.addStat('rsv_sug1', me.rsv_sug1);
            me.addStat('rsv_sug7', me.rsv_sug7.join(''));
            /* eslint-enable */
        },
        hideSug: function () {
            var me = this;
            me.is_selecting = false; // eslint-disable-line
            $(me.ipt).trigger('hide', [me]);
            $(me.ipt).removeClass('new-ipt-focus');
            $('.s_ipt_wr').removeClass('new-ipt-focus');
            $(me.sugcontainer).hide();
            me.visible = false;
            if (me.jqXhr) {
                me.jqXhr.abort();
            }
            me.jqXhr = null;
        },
        selectSug: function (i) {
            var me = this;
            var lis = $(me.sugcontainer).find('li');
            me.blurSug(lis);
            me.directSugSelected = i !== -1 && lis.eq(i).hasClass('bdsug-direct');
            // 判断直达链接sug是否为选中状态 add by yangfan
            if (i !== -1) {
                me.is_selecting = true; // eslint-disable-line
                var v = $($(lis)[i]).data('key');
                me.focusSug(lis[i], v);
                me.sugValue = me.showValue = me.value = me.ipt.value = v;
                me.addStat('sug', v);
                if (me.bds && me.bds.comm && me.bds.comm.ishome === 0) {
                    me.addStat('oq', me.bds.comm.confirmQuery ? xss(me.bds.comm.confirmQuery) : '');
                }
                if (me.bds && me.bds.comm && me.bds.comm.confirmQid) {
                    me.addStat('rsv_pq', me.bds.comm.confirmQid);
                }
                me.addStat('rsv_n', 1);
            } else {
                me.is_selecting = false; // eslint-disable-line
                me.selectCallback(me.inputValue);
                me.showValue = me.value = me.ipt.value = me.inputValue;
                me.sugValue = '';
                me.removeStat('sug');
                me.removeStat('rsv_n');
            };
            // is首页且空框下，由于展现9条sug，关闭结果页自动刷新逻辑
            if (!me.inputValue && me.bds.comm.ishome === 1) {
                me.stopRefresh = true;
            } else {
                me.stopRefresh = false;
            };
            $(me.ipt).trigger('selectSug', [me, i, v]);
        },
        blurSug: function (lis) {
            var me = this;
            me.backFrame = false;
            $(lis).removeClass('bdsug-s');
            $(lis).trigger('blured');
        },
        focusSug: function (li, v) {
            var me = this;
            $(li).addClass('bdsug-s');
            $(li).trigger('focused');
            me.selectCallback(v);
        },
        pressUp: function (n) {
            var me = this;
            // 总条数
            var n = $(me.sugcontainer).find('li').length;
            me.index--;
            if (me.index < -1) {
                me.index = n - 1;
            };
            me.selectSug(me.index);
        },
        pressDown: function (n) {
            var me = this;
            // 总条数
            var n = $(me.sugcontainer).find('li').length;
            me.index++;
            if (me.index >= n) {
                me.index = -1;
            };
            me.selectSug(me.index);
        },
        // 增加一个统计参数
        addStat: function (name, value) {
            value = encodeURIComponent(value);
            var me = this;
            if (!me.stat) {
                me.stat = {};
            }
            me.stat[name] = value;
            if (me.withoutStat) {
                return;
            }
            var ipthidden = $(me.form).find('input[type="hidden"][name="' + name + '"]');
            if (ipthidden.length) {
                $(ipthidden).val(value);
            } else {
                $(me.form).append('<input type="hidden" name="' + name + '" value="' + value + '"/>');
            };
        },
        // 删除一个统计参数
        removeStat: function (name) {
            var me = this;
            if (me.withoutStat) {
                return;
            }
            $(me.form).find('input[type="hidden"][name="' + name + '"]').remove();
            if (!me.stat) {
                try {
                    delete me.stat[name];
                } catch (e) {}
            }
        },
        setNewsRsv: function (type) {
            var me = this;
            if (type === 'sug') {
                me.addStat('rsv_dl', 'news_t_sug');
            } else if (type === 'box') {
                me.addStat('rsv_dl', 'news_t_sk');
            } else if (type === 'his') {
                me.addStat('rsv_dl', 'news_t_his');
            }
        },
        // 清空所有sug独有的统计参数
        clearStat: function () {
            var me = this;
            // 同步下需要带参数不能清除 add by jianfeng01 @15-08-04
            if (me.bds && me.bds.comm && me.bds.comm.isAsync) {
                me.removeStat('rsp');
                me.removeStat('prefixsug');
                if (me.bds.comm.ishome === 1) {
                    me.addStat('rsv_dl', 'ib');
                } else if (me.tn === 'news') {
                    me.setNewsRsv('box');
                } else {
                    me.addStat('rsv_dl', 'tb');
                }
                
            }
            /* eslint-disable */
            me.rsv_sug7 = [0, 0, 0];
            me.removeStat('rsv_n');
            me.removeStat('rsv_sug');
            me.removeStat('rsv_sug1');
            me.removeStat('rsv_sug2');
            me.removeStat('rsv_sug3');
            me.removeStat('rsv_sug4');
            me.removeStat('rsv_sug5');
            me.removeStat('rsv_sug6');
            me.removeStat('rsv_sug7');
            me.removeStat('rsv_sug8');
            me.removeStat('rsv_sug9');
            /* eslint-enable */
            me.stat = {};
        },
        getRsvStatus: function (val) {
            var me = this;
            var list = [];
            var status = [-2];
            if (me.rsv_sug) {
                status = [-1];
                for (var i in me.dataArray) {
                    if (val === me.dataArray[i].value) {
                        status = [0, i];
                        if (i < me.rsv_sug) {
                            status = [1, i];
                        }
                    }
                };
                for (var i = 0; i < me.rsv_sug && me.dataArray[i]; i++) {
                    list.push(me.dataArray[i].value.length, me.dataArray[i].s);
                };
                status.push(me.index, me.rsv_sug, list.join('.'));
            }
            return status.join('_');
        },
        // 表单提交函数
        formSubmit: function (ev) {
            var me = this;
            var ret = true;
            var sa = me.bds && me.bds.comm && me.bds.comm.ishome === 1 ? 'i' : 't';
            var rsv_btype = 't';
            if (window.location.pathname === '/') {
                rsv_btype = 'i';
            }

            me.addStat('rsv_btype', rsv_btype);
            // 当使用sug提交时，改变f统计参数为3，且发送相关查询点击位置信息（从0开始的所选sug序号）
            if (me.index !== -1) {
                me.addStat('f', 3);
                me.addStat('prefixsug', xss(me.inputValue));
                me.addStat('rsp', me.index);
                if (me.inputValue === '') {
                    if (me.tn === 'news') {
                        me.setNewsRsv('his');
                    } else {
                        me.addStat('rsv_dl', sa + 'h_' + me.index);
                    }
                } else {
                    if (me.tn === 'news') {
                        me.setNewsRsv('sug');
                    } else {
                        me.addStat('rsv_dl', sa + 's_' + me.index);
                    }
                }
                // sug阿拉丁id统计参数
                if (me.dataArray[me.index] && me.dataArray[me.index].alaid) {
                    me.addStat('rsv_sug5', me.dataArray[me.index].alaid);
                } else {
                    me.removeStat('rsv_sug5');
                };
            } else {
                me.addStat('f', 8);
            };

            // 空框历史sug点击统计参数 add by yangfan 0115
            if (me.dataArray[me.index]
                && (me.inputValue === '' || me.dataArray[me.index].pinyin === '|')
                && me.dataArray[me.index].type === 'store') {
                var currentPage = '0';
                if (me.bds.comm.ishome === 0) {
                    currentPage = '0';    // 结果页
                } else if (me.bds.comm.ishome === 1 && window.s_domain && window.s_domain.base === 'home') {
                    currentPage = '2';    // 新首页
                } else if (me.bds.comm.ishome === 1) {
                    currentPage = '1';    // 传统首页
                };
                me.addStat('rsv_sug9', 'es_' + currentPage + '_' + (me.bds.comm.supportis ? 1 : 0));  // _x_1标识is
            } else if (me.inputValue === '') {
                me.addStat('rsv_sug9', 'eb_' + (me.bds.comm.supportis ? 1 : 0));  // 空框策略sug点击统计参数
            }
            // submit的时候判断sug 和 kw值是否相等
            if (me.sugValue === me.value) {
                me.removeStat('rsv_n');
                me.removeStat('sug');
            } else if (me.hoverSug !== me.value || me.sugValue !== me.value) {
                if (me.tn === 'news') {
                    me.setNewsRsv('box');
                } else {
                    me.addStat('rsv_dl', sa + 'b');
                }
                me.addStat('f', 8);
            };
            // submit的时候发送用户query变换时间
            if (me.inputT !== 0) {
                me.addStat('inputT', new Date().getTime() - me.inputT);
                me.directInputT = new Date().getTime() - me.inputT;
                me.inputT = 0;
            } else {
                me.removeStat('inputT');
            };
            // submit的时候发送用户从主动focus到发起检索的时间
            /* eslint-disable */
            if (me.rsv_sug4 !== 0) {
                me.addStat('rsv_sug4', new Date().getTime() - me.rsv_sug4);
                me.rsv_sug4 = 0;
            };
            /* eslint-enable */
            // 历史sug展现数目参数
            me.rsv_sug && me.addStat('rsv_sug', me.rsv_sug); // eslint-disable-line
            // TODO:实验用sug知心点击参数
            if ($($(me.sugcontainer).find('li')[me.index]).hasClass('bdsug-zx')) {
                if ($(me.sugcontainer).find('.bdsug-box').attr('bdsug-click') === 'all') {
                    me.addStat('rsv_sugtp', 1);
                } else {
                    me.addStat('rsv_sugtp', 0);
                }
            } else {
                me.removeStat('rsv_sugtp');
            }
            // pdc时间统计写入cookie
            try {
                (function () {
                    var _t = new Date().getTime(); // eslint-disable-line
                    document.cookie = 'WWW_ST='
                    + _t + ';expires=' + new Date(_t + 10000).toGMTString();
                })();
            } catch (e) {};
            // sug直达逻辑(提交表单时开新窗口，阻止表单提交) add by yangfan
            if (me.index === 0 && me.dataDirect.length > 0 && me.directSugSelected) {
                // 打开新窗口
                window.open($(me.sugcontainer).find('.bdsug-direct p').attr('link'), '_blank');
                me.blankHandle();
                // ns_c点击日志
                ns_c({ // eslint-disable-line
                    'pj_name': 'zhida_sug',
                    'sug_prefix': encodeURIComponent(me.inputValue),
                    'sug_query': encodeURIComponent(me.dataDirect[0].value),
                    'sug_siteurl': encodeURIComponent(me.dataDirect[0].otherData.siteurl),
                    'sug_chufa': encodeURIComponent(me.dataDirect[0].otherData.hit_q),
                    'sug_inputT': (me.directInputT) ? me.directInputT : 0,
                    'rsv_bp': (me.bds.comm.ishome) ? 0 : 1
                });
                // 登录用户写入pfc，for多端同步（src=1：来源为pc；f=3：sug搜索）
                if (me.bds && me.bds.comm && me.bds.comm.username) {
                    var writeUrl = me.bds && me.bds.util && me.bds.util.domain
                    && me.bds.util.domain.get('http://api.open.baidu.com/new_hsug/data/write');
                    writeUrl = writeUrl + '?query=' + encodeURIComponent(me.dataDirect[0].value)
                    + '&src=1&f=3&st=' + (me.showsugstore ? '1' : '0');
                    $.ajax({
                        dataType: 'jsonp',
                        scriptCharset: 'utf-8',
                        jsonp: 'cb',
                        timeout: 6000,
                        url: writeUrl,
                        success: function () {
                            return;
                        }
                    });
                };
                me.index = -1;
                me.directSugSelected = false;
            } else {
                if ($.isFunction(me.submission)) {
                    ret = me.submission.call(me.form, ev);
                    me.hideSug();
                    me.inputValue = me.value;
                    me.dataCached = {};     // 异步query请求之后，置空sug缓存 add by yangfan16
                    me.clearStat();         // 清理统计参数，之前被注释，不知原因 fix by yangfan16
                };
                if (ret) {
                    // 发起搜索之前截断wd
                    var wd = me.ipt.value;
                    var showDefaultQuery = $('#kw').attr('placeholder') || $('.kw-placeholder').text();
                    if (wd) {
                        wd = $.limitWd(wd);
                        me.ipt.value = me.value = me.inputValue = me.showValue = wd;
                    }
                    else if (showDefaultQuery) {
                        // wd 为假值，如果有默置 query 则发起搜索
                        wd = $.limitWd(showDefaultQuery);
                        $('.kw-placeholder').hide();
                        me.ipt.value = me.value = me.inputValue = me.showValue = wd;
                        // 有默置 query 添加 rsv_dq=1
                        me.addStat('rsv_dq', 1);
                    }
                    me.form.submit();
                    me.blankHandle();
                };
            };
            // submit之后将rsv_bp值设置为1(不为新窗口打开时)
            if ($(me.form).attr('target') !== '_blank') {
                me.addStat('rsv_bp', 1);
            };
            // submit后移除rsv_dq
            me.removeStat('rsv_dq');
        },
        blankHandle: function () {
            var me = this;
            // 临时应对全量必删
            if (/12783|14655|14668/.test(me.bds.comm.sid)) {
                setTimeout(function () {
                        me.ipt.value = me.value = me.inputValue = me.showValue = '';
                        if (!((navigator && navigator.userAgent) ? navigator.userAgent : '').match(/(msie [2-8])/i)) {
                            $(me.ipt).focus();
                        }
                    }, 25);
            } else if (/13488|14654|14667/.test(me.bds.comm.sid)) {
                setTimeout(function () {
                    $(me.ipt).select();
                }, 25);
            }
        },
        init: function () {
            var me = this;
            // 抽样
            me.searchNewStyle = ((me.bds && me.bds.comm && me.bds.comm.sampleval) &&
                $.inArray('new_search_style', me.bds.comm.sampleval) > -1) ||
                    (me.bds.comm.nodeSample && $.inArray('new_search_style', me.bds.comm.nodeSample) > -1);
            me.setAutocomplete('off');
            me.setCurrentSugSample();
            // 添加rsv_bp参数
            me.addStat('rsv_bp', me.rsv_bp);
            // 初始化数据
            me.updateInitData('init');
            // 预先发起空请求，以获取dns缓存
            if (!me.bds.se.sugdnscached) {
                $.ajax({
                    type: 'GET',
                    dataType: 'json',
                    async: true,
                    url: me.buildUrl('', '', true),  // 增加参数标明预请求
                    timeout: 5000,
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    success: function (data) {
                    }
                });
                me.bds.se.sugdnscached = 1;
            };
            me.imt = new ImeTrack({ // eslint-disable-line
                iptId: 'kw',
                adv: true,
                innerchange: false
            });
            me.quickdelete = new QuickDelete();
            if (me.ipt.value) {
                me.quickdelete._show();
            }
            $(me.ipt).on('inputChange', function (e, me) {
                me.prevQuery = me.queryValue;
                var sample3 = me.currentSugSample === 'search_sug_3-1' || me.currentSugSample === 'search_sug_3-2';
                if (
                   !(sample3
                    && me.backFrame
                    && me.currentSearchStatus === 1 
                    && me.inputValue === '')
                ) {
                    me.backFrame = false;
                }
                
                me.imt.triggerInputChange(e);
                me.ipt.value ? me.quickdelete._show() : me.quickdelete._hide();
            });
            $(me.ipt).on('blur', function () {
               me.backFrame = false;
            });
            me.startCircle();
            // 清除之前的统计
            me.clearStat();
            // 输入框相关事件
            $(me.ipt).on('click', function (e) {
                e.stopPropagation();
                !me.withoutMode && me.clickIpt();
                me.ipt.value ? me.quickdelete._show() : me.quickdelete._hide();
                // 用于统计用户从第一次主动focus输入框到提交经过的时间，第一次click时开始计时
                if (me.rsv_sug4 === 0) { // eslint-disable-line
                    me.rsv_sug4 = new Date().getTime(); // eslint-disable-line
                };
            }).on('focus', function () {
                me.startCircle();
            }).on('keydown', function (e) {
                e.stopPropagation();
                /**
                 * 描述：sug 输入法半上屏状态case修复
                 * Case文档：https://ku.baidu-int.com/knowledge/HFVrC7hq1Q/pKzJfZczuc/2-JDNl-Tpy/ymOmuQJTa8xHAx
                 * 当鼠标mouseenter sug item 时，停止轮询，此时输入框内容改变，不触发sug重新渲染
                 */
                me.startCircle();
                e = e || window.event;
                if (me.inputT === 0) {
                    me.inputT = new Date().getTime();
                };
                // 首页默认focus，若用户无主动点击搜索框行为，起始时间从输入开始计算
                /* eslint-disable */
                if (me.rsv_sug4 === 0) {
                    me.rsv_sug4 = new Date().getTime();
                };
                /* eslint-enable */
                // 按Tab或Esc
                if (e.keyCode === 9 || e.keyCode === 27) {
                    me.hideSug();
                };
                // 按回车
                if (e.keyCode === 13) {
                    me.addStat('rsv_sug2', 0);
                    me.ipt.value ? me.quickdelete._show() : me.quickdelete._hide();
                };
                // 按ctrl+v
                if (e.keyCode === 86 && e.ctrlKey) {
                    me.addStat('rsv_n', 2);
                };
                // 弹出层关闭时，按上下键显示弹出层，弹出层显示时，按上下键选择关键词。
                if (me.sugcontainer && me.sugcontainer.style.display !== 'none') {
                    // 按上
                    if (e.keyCode === 38) {
                        // 防止浏览器的默认行为：按上会出现光标左移的现象
                        e.preventDefault();
                        me.pressUp();
                    };
                    // 按下
                    if (e.keyCode === 40) {
                        e.preventDefault();
                        me.pressDown();
                    };
                } else {
                    if (e.keyCode === 38 || e.keyCode === 40) {
                        e.preventDefault();
                        me.request(me.value);
                    };
                };
            });
            me.form && $(me.form).submit(function (e) {
                if (me.bds && me.bds.comm && me.bds.comm.ishome === 0) {
                    me.addStat('oq', me.bds.comm.confirmQuery ? xss(me.bds.comm.confirmQuery) : '');
                }
                if (me.bds && me.bds.comm && me.bds.comm.confirmQid) {
                    me.addStat('rsv_pq', me.bds.comm.confirmQid);
                }
                me.formSubmit(e);
                return false;
            });
        },
        outInterface: function () {
            var me = this;
            return {
                setVisibleSug: (function () {
                    var icon = $('<i class="c-icon c-icon-bear-round"></i>');
                    return function (value) {
                        var i;
                        icon.remove();
                        for (i = 0; i < me.dataArray.length; i++) {
                            if (me.dataArray[i].value === value) {
                                icon.appendTo($(me.sugcontainer).find('li').eq(i));
                                break;
                            }
                        }
                    };
                })(),
                getStat: function (name) {
                    if (me.stat) {
                        return me.stat[name];
                    }
                },
                clearStat: function () {return me.clearStat();},
                setKey: function (wd) {me.ipt.value = me.value = me.inputValue = me.showValue = wd;},
                visible: function () {return me.visible;},
                is_selecting: function () {return me.visible && me.is_selecting;}, // eslint-disable-line
                data: function () {
                    // 给预读策略提供的数据接口，不预读type==direct的sug
                    if (me.dataArray && me.dataArray.length) {
                        return $.grep(me.dataArray, function (d) {
                            return d.type !== 'direct';
                        });
                    } else {
                        return [];
                        // 
                    }
                },
                show: function () {return me.showSug();},
                hide: function () {return me.hideSug();},
                start: function () {return me.startCircle();},
                stop: function () {return me.stopCircle();},
                /* eslint-disable */
                setMaxNum: function (maxNum) {return me.maxNum = maxNum;},
                /* eslint-enable */
                check: function () {return me.check();},
                formSubmit: function () {return me.formSubmit();},
                updateInitData: function () {return me.updateInitData();},
                on: function () {$(me.ipt).on.apply($(me.ipt), arguments);},
                height: function () {return $(me.sugcontainer).height();},
                off: function () {$(me.ipt).off.apply($(me.ipt), arguments);},
                getRsvStatus: function (val) {return me.getRsvStatus(val);},
                setCurrentSugSample: function (sample) {
                    return me.setCurrentSugSample(sample);
                }
            };
        },
        // 设置当前sug实验
        setCurrentSugSample: function (sample) {
            var me = this;
            var currentSamples = bds.comm.sampleval || [];
            // 异步搜索传入结果页
            if (sample && sample.length > 0) {
                currentSamples = sample;
            }
            // 查找当前的sug实验策略
            me.currentSugSample = currentSamples.filter(function (s) {
                return me.resultSugSamples.indexOf(s) !== -1;
            })[0];

            if (bds.comm.ishome) {
                if (bds.comm.sampleval.indexOf('home_search_sug_6') !== -1
                    || (bds.comm.nodeSample && bds.comm.nodeSample.indexOf('home_search_sug_6') !== -1)
                ) {
                    me.currentHomeSugSample = 'home_search_sug_6';
                }
            }
            // 是否sug实验三
            me.isSugSample3 = me.currentSugSample === 'search_sug_3-1' || me.currentSugSample === 'search_sug_3-2';
            me.isSugSample4 = me.currentSugSample === 'search_sug_4-1' || me.currentSugSample === 'search_sug_4-2';
        }
    };
    return bdSug;
});
;
define('@baidu/search-sug', ['@baidu/search-sug/sug/index'], function (mod) { return mod; });