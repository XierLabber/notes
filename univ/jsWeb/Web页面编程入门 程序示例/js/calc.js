let rst = 0;

let current_num_str = "";

const nums = document.querySelectorAll(".number");
const add  = document.querySelector("#add");
const smt  = document.querySelector("#submit");
const txt  = document.querySelector("#result"); 

for (let i = 0; i < nums.length; i++) {
    nums[i].onclick = function() {
        current_num_str += this.textContent;
        txt.textContent += this.textContent;
    }

}

add.onclick = function(){
    const num = Number(current_num_str);
    current_num_str = "";
    rst += num;
    txt.textContent += " + ";
}

smt.onclick = function (){
    txt.textContent = String(rst + Number(current_num_str));
    rst = 0;
    current_num_str = "";   
}


