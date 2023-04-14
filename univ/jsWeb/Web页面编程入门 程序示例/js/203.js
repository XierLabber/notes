// Math.random()：随机生成连续区间[0, 1)上的一个数
// Math.random() * 100：得到连续区间[0, 100)上的一个随机数
// Math.floor：把一个数向下取整。例如：Math.floor(3.5) 等于 3
// 执行该语句后，rand_num指向整数区间(0, 100]上的一个随机数
let rand_num = Math.floor(Math.random() * 100) + 1;

// 定位到当前文档中具有特定class值的元素
const guesses = document.querySelector(".guesses");
const last_rst = document.querySelector(".lastResult");
const loh = document.querySelector(".lowerOrHigher");
const guess_smt = document.querySelector(".guessSubmit");
const guess_fld = document.querySelector(".guessField");

// 声明一个变量，用于存放用户的猜测次数，并将其初值设为0
let guess_cnt = 0;

// 声明一个变量，用于存放“重新开始”按钮，但没有为其赋初值
let reset_btn;

// 一个函数，用户检查用户当前的输入是否正确
function check_guess() {
    // guess_fld.value：获得guess_fld控件中用户输入的文本信息
    // Number：一个函数，负责把文本信息中包含的数字字符串转换成对应的数值
    // 这行语句执行结束后，用户输入的数值就会被放在变量guess中
    let guess = Number(guess_fld.value);

    // 如果，guess_cnt的值为0（即：用户第一次猜数），那么：
    if (guess_cnt === 0) {
        // 就把guesses元素的文本内容设为一个值
        guesses.textContent = "以前猜的数：";
    }

    // 把guess_cnt的值增加1
    guess_cnt++;

    // 在guesses元素的文本内容的最后添加上用户当前的猜数
    guesses.textContent += guess + " ";

    // 如果用户当前的猜数等于目标数，那么：
    if (guess === rand_num) {
        // 把last_rst元素的文本内容设置为一个值
        last_rst.textContent = "恭喜你！猜对了！";

        // 把last_rst元素的背景颜色设置为绿色
        last_rst.style.backgroundColor = "green";
        
        // 把loh元素的文本内容清空
        loh.textContent = "";
        
        // 调用set_gameover函数，开始新一轮的猜数游戏
        set_gameover();
    } 
    // 否则，如果guess_cnt等于10，那么：
    else if (guess_cnt === 10) {
        // 把last_rst元素的文本内容设置为一个值
        last_rst.textContent = "!!!游戏结束!!!";

        // 把loh元素的文本内容清空
        loh.textContent = "";

        // 调用set_gameover函数，开始新一轮的猜数游戏
        set_gameover();
    } 
    // 否则
    else {
        // 告诉用户，当前的猜数是错误的
        last_rst.textContent = "你猜错了！";

        // 用红色的背景颜色让提示信息更醒目
        last_rst.style.backgroundColor = "red";

        // 如果当前的猜数小于目标数，那么：
        if(guess < rand_num) {
            // 提示用户猜低了
            loh.textContent = "你刚才猜低了！";
        } 
        // 否则，如果用户的猜数大于目标数，那么：
        else if(guess > rand_num) {
            // 提示用户猜高了
            loh.textContent = "你刚才猜高了！";
        }
    }

    // 把guess_fld元素中的信息清空
    guess_fld.value = "";

    // 让guess_fld元素获得键盘焦点
    //（获得焦点后，用户在键盘输入的信息会输入到焦点元素中）
    guess_fld.focus();
}

// 为“提交”按钮设置click事件监听函数check_guess
// 只要用户点击了这个按钮，函数check_guess就会被调用
guess_smt.onclick = check_guess;

// 这个函数的功能：一轮游戏结束后，更新页面，让用户可以开始新一轮游戏
function set_gameover() {
    // 禁止用户在guess_fld元素内输入信息
    guess_fld.disabled = true;

    // 禁止用户点击guess_smt按钮
    guess_smt.disabled = true;

    // 在当前文档中创建一个button元素
    reset_btn = document.createElement("button");
    
    // 为reset_btn元素添加说明文字
    reset_btn.textContent = "开始新游戏";

    // 把reset_btn元素添加到body元素子元素队列的末尾
    document.body.appendChild(reset_btn);

    // 为reset_btn元素设置click事件监听函数reset_game;
    reset_btn.onclick = reset_game;
}

//这个函数的功能：重新开始新一轮的游戏
function reset_game() {
    // 把猜测次数清零
    guess_cnt = 0;

    // querySelectorAll：querySelector的扩展版本，返回当前文档中满足条件的所有HTML元素；这些元素被放在一个数组中
    // resetParas：一个数组，其中包含了一组HTML元素
    const ps = document.querySelectorAll(".resultParas p");

    // 遍历ps中包含的每一个元素，将其文本内容清空
    for(let i = 0 ; i < ps.length ; i++) {
        ps[i].textContent = "";
    }

    // 把reset_btn从其parent节点中删除
    reset_btn.parentNode.removeChild(reset_btn);

    // 让guess_fld和guess_smt恢复可用状态
    guess_fld.disabled = false;
    guess_smt.disabled = false;

    // 把guess_fld元素的值清空
    guess_fld.value = "";

    // 让guess_fld获得键盘焦点
    guess_fld.focus();

    // 把last_rst元素的背景颜色设置为白色
    last_rst.style.backgroundColor = "white";

    // 生成整数区间[1, 100]之间的一个随机数
    rand_num = Math.floor(Math.random() * 100) + 1;
}

