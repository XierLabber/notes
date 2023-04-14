const outline = document.querySelector(".equation");
let ending = false;

Array.from(document.querySelectorAll(".key")).
forEach(item => {
    item.addEventListener('click', ()=>{
        if(ending){
            if(item.textContent === '='){
                return;
            }
            ending = false;
            outline.textContent = "";
        }
        if(item.textContent !== "=" 
        && item.textContent !== "删除"
        && item.textContent !== "清空"){
            outline.textContent = 
            outline.textContent + item.textContent;
        }
        else if(item.textContent === "删除"){
            if(outline.textContent.length !== 0){
                outline.textContent = 
                outline.textContent.slice(0, -1);
            }
        }
        else if(item.textContent === "清空"){
            outline.textContent = "";
        }
        else if(item.textContent === "="){
            ending = true;
            cal();
        }
    })
})

function cal(){
    let myStack = [];
    let postExp = [];
    let eql = "(" + outline.textContent + ")";
    for(let i = 0; i < eql.length; ++i){
        if(eql[i] >= '0' && eql[i] <= '9' || (eql[i] === '-' && i > 0 && eql[i - 1] === '(')){
            let j = i + 1;
            let flag = false;
            while(j < eql.length){
                if((eql[j] >= '0' && eql[j] <= '9') || (eql[j] === '.')){
                    if(eql[j] === '.'){
                        flag = true;
                    }
                    j++;
                }
                else{
                    break;
                }
            }
            if(eql[i] === '-' && j === i + 1){
                outline.textContent = "syntax error!";
                return;
            }
            if(!flag){
                postExp.push(parseInt(eql.slice(i, j)));
            }
            else{
                postExp.push(parseFloat(eql.slice(i, j)));
            }
            i = j - 1;
            continue;
        }
        else {
            switch(eql[i]){
                case '+':
                case '-':
                    while(myStack.length !== 0){
                        let tmp = myStack[myStack.length - 1];
                        if(tmp !== '('){
                            postExp.push(myStack.pop());
                        }
                        else{
                            break;
                        }
                    }
                    myStack.push(eql[i]);
                    break;
                case '×':
                case '÷':
                    while(myStack.length !== 0){
                        let tmp = myStack[myStack.length - 1];
                        if(tmp === '×' || tmp === '÷'){
                            postExp.push(tmp);
                        }
                        else{
                            break;
                        }
                    }
                    myStack.push(eql[i]);
                    break;
                case '(':
                    myStack.push(eql[i]);
                    break;
                case ')':
                    let flag = false;
                    while(myStack.length !== 0){
                        let tmp = myStack.pop();
                        if(tmp !== '('){
                            postExp.push(tmp);
                        }
                        else{
                            flag = true;
                            break;
                        }
                    }
                    if(!flag){
                        outline.textContent = "syntax error!";
                        return;
                    }
                    break;
                default:
                    break;
            }
        }
    }
    if(myStack.length !== 0){
        outline.textContent = "syntax error!";
        return;
    }
    let ans = [];
    for(let i = 0; i < postExp.length; ++i){
        let cur = postExp[i];
        if(typeof(cur) !== 'number'){
            if(ans.length < 2){
                outline.textContent = "syntax error!";
                return;
            }
            let x2 = ans.pop();
            let x1 = ans.pop();
            switch(cur){
                case '+':
                    ans.push(x1 + x2);
                    break;
                case '-':
                    ans.push(x1 - x2);
                    break;
                case '×':
                    ans.push(x1 * x2);
                    break;
                case '÷':
                    ans.push(x1 / x2);
            }
        }
        else{
            ans.push(cur);
        }
    }
    outline.textContent = String(ans[0]);
}