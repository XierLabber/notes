let div = document.querySelector("div");
let ph  = document.querySelector("#place_holder");
let count = 0;

div.onclick = function() {
    let text = "你第" + (++count) + "次拍了拍我"; 
    let li = document.createElement("li");

    li.textContent = text;
    ph.appendChild(li);
}

div.onmouseenter = function() {
    let text = "客官，您来啦！"; 
    let li = document.createElement("li");

    li.textContent = text;
    ph.appendChild(li);
}

div.onmouseleave = function() {
    let text = "欢迎下次再来！"; 
    let li = document.createElement("li");

    li.textContent = text;
    ph.appendChild(li);
}
