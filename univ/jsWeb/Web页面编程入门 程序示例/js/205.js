// 定位到文档中唯一的那个img元素
let img = document.querySelector("img");

// 为img元素添加click事件监听函数
img.onclick = function() {
  // 获得img元素src属性的值  
  let img_src = img.getAttribute("src");

  // 修改img元素src属性的值，实现在两个图片之间的切换
  if (img_src === "img/harry.png") {
    img.setAttribute ("src","img/ron.png");
  } else {
    img.setAttribute ("src","img/harry.png");
  }
};

// 定位到文档中的btn元素和h1元素
let btn = document.querySelector("button");
let h1  = document.querySelector("h1");

// 个性化欢迎信息设置函数
function setUserName() {
  // prompt是浏览器提供的一个函数
  // 这个函数会弹出一个对话框，提示你输入信息
  // 你输入的信息会作为函数的返回值，赋给变量name  
  let name = prompt("请输入你的名字。");
  
  // 如果用户输入了一个空字符串，或用户拒绝输入信息，那么： 
  if (name === "" || name === null) {
    // 继续让用户输入信息  
    setUserName();
  } 
  // 否则
  else {
    // localStorage 是浏览器提供的一个变量，
    // 可以让你把一些信息存放在浏览器中；
    // setItem是localStorage上的一个方法，
    // 可以把一对<名称，值>存储在本地  
    localStorage.setItem("name", name);

    //更新h1元素的文本内容
    h1.textContent = name + "，欢迎来到喵星球！";
  }
}

// 初始化代码：在页面初次读取时进行构造工作。
// getItem是localStorage，
// 用于从本地存储中读取具有指定名称的值。
// 如果本地存储中名称为"name"的值是一个空字符串，那么：
if (localStorage.getItem("name") === "") {
  // 提示用户输入名称信息  
  setUserName();
} 
// 否则
else {
  // 读取本地存储中名称为"name"的值  
  let storedName = localStorage.getItem("name");

  // 使用读取到的值更新h1元素的文本内容
  h1.textContent = storedName + "，欢迎来到喵星球！";
}

// 为btn元素设置click事件处理函数
// 当用户点击了btn元素，就会提示用户输入名称信息
btn.onclick = function() {
  setUserName();
};