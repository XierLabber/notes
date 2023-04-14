// 声明两个变量，但没有给它们赋值
let add_behavior, show_picture;

// 定义了一个函数，并将该函数赋值给变量add_behavior
// 该函数的功能：给所有的图片超链接添加click事件监听器
add_behavior = function(){
    // 获得当前文档中封装了图片超链接元素的那个ul元素
    const gallery = document.querySelector("#gallery");

    // 获得所有的图片超链接元素
    const links = gallery.querySelectorAll("a");

    // 遍历每一个超链接元素
    for (let i = 0; i < links.length; i++){
        // 为第i个超链接元素添加click事件监听函数
        links[i].onclick = function(event){
            // 在页面上展示当前超链接指向的图片
            // this是一个隐式的参数，表示click事件发生在的那个HTML元素
            show_picture(this);

            // 阻止事件所在元素缺省的click事件相应行为
            // event 表示当前发生的那个click事件
            event.preventDefault();
        }
    }
}

// 定义了一个函数，并将该函数赋值给变量show_picture
// 该函数的功能：把参数中传入的超链接元素指向的图片显示在页面上
show_picture = function(pic){
    // pic表示一个图片超链接元素
    // 获得pic元素的href属性的值
    const src = pic.getAttribute("href");

    // 定位到显示图片的那个img元素
    const ph  = document.querySelector("#placeholder");

    // 将ph元素src属性的值赋值为变量src的值
    ph.setAttribute("src", src);

    // 获得pic元素的title属性的值
    const txt = pic.getAttribute("title");

    // 定位到显示图片描述信息的那个p元素
    const des = document.querySelector("#description");

    // 将des元素的文本内容设置为变量txt的值
    des.textContent = txt;
}

// 调用add_behavior函数，为当前页面上的图片超链接添加click事件监听函数
add_behavior();

