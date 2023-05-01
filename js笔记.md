- JavaScript不区分整数和浮点数
- JavaScript在设计时，有两种比较运算符：
  - 第一种是==比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；
  - 第二种是===比较，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较。
- NaN这个特殊的Number与所有其他值都不相等，包括它自己：
  - NaN === NaN; // false
  - 唯一能判断NaN的方法是通过isNaN()函数
- 要显示变量的内容，可以用console.log(x)
- 使用console.log()代替alert()的好处是可以避免弹出烦人的对话框
### 数组
  - JavaScript的数组可以包括任意数据类型。例如：
  - [1, 2, 3.14, 'Hello', null, true];上述数组包含6个元素。数组用[]表示，元素之间用,分隔。
  - 另一种创建数组的方法是通过Array()函数实现：
  - new Array(1, 2, 3); 
### 对象
  - JavaScript的对象是一组由键-值组成的无序集合
  - 属性名middle-school不是一个有效的变量，就需要用''括起来。访问这个属性也无法使用.操作符，必须用['xxx']来访问
    - 也可以用xiaohong['name']来访问xiaohong的name属性
  - JavaScript规定，访问不存在的属性不报错，而是返回undefined
  - delete xiaoming.age; // 删除age属性
  - delete不存在的属性也不会报错
  - 如果我们要检测xiaoming是否拥有某一属性，可以用in操作符
  - 要判断一个属性是否是xiaoming自身拥有的，而不是继承得到的，可以用hasOwnProperty()方法
### 变量
  - 在JavaScript中，使用等号=对变量进行赋值。可以把任意数据类型赋值给变量，同一个变量可以反复赋值，而且可以是不同类型的变量，但是要注意只能用var申明一次
### 字符串
  - 新的ES6标准新增了一种多行字符串的表示方法，用反引号`...`表示，可以省略\n
  - 模版字符串
    - var message = `你好, ${name}, 你今年${age}岁了!`;
  - 需要特别注意的是，字符串是不可变的，如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果
  - s.length;
  - s.toUpperCase();
  - s.toLowerCase();
  - indexOf()会搜索指定字符串出现的位置
  - substring()返回指定索引区间的子串
### 数组
  - 直接给Array的length赋一个新的值会导致Array大小的变化
  - 如果通过索引赋值时，索引超过了范围，同样会引起Array大小的变化
  - 与String类似，Array也可以通过indexOf()来搜索一个指定的元素的位置
  - slice()就是对应String的substring()版本，它截取Array的部分元素，然后返回一个新的Array
    - arr.slice(3)截取从索引3到结束的所有元素
  - 如果不给slice()传递任何参数，它就会从头到尾截取所有元素。
  - push(若干元素), pop(若干元素)
  - 如果要往Array的头部添加若干元素，使用unshift()方法，shift()方法则把Array的第一个元素删掉
  - arr.sort()
  - arr.reverse()
  - splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素
    - arr.splice(2, 3, 'Google', 'Facebook')
    - 返回被删除的元素（数组）
    - 可以输入0个（全删）、2个元素
  - concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array
  - join()方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串
  - JavaScript把null、undefined、0、NaN和空字符串''视为false，其他值一概视为true

### Map
- 解决{}的key必须是字符串的问题
- 初始化Map需要一个二维数组，或者直接初始化一个空Map。Map具有以下方法
  - var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
  - m.get('Michael'); // 95
  - var m = new Map(); // 空Map
  - m.set('Adam', 67); // 添加新的key-value
  - m.set('Bob', 59);
  - m.has('Adam'); // 是否存在key 'Adam': true
  - m.get('Adam'); // 67
  - m.delete('Adam'); // 删除key 'Adam'
  - m.get('Adam'); // undefined

### Set
- var s1 = new Set(); // 空Set
- var s2 = new Set([1, 2, 3]); // 含1, 2, 3
- add(), delete()

### Iterable
- 遍历Array可以采用下标循环，遍历Map和Set就无法使用下标。为了统一集合类型，ES6标准引入了新的iterable类型，Array、Map和Set都属于iterable类型
- for ... in循环由于历史遗留问题，它遍历的实际上是对象的属性名称。一个Array数组实际上也是一个对象，它的每个元素的索引被视为一个属性
- for ... of循环则完全修复了这些问题，它只循环集合本身的元素
- 然而，更好的方式是直接使用iterable内置的forEach方法，它接收一个函数，每次迭代就自动回调该函数。
```
a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element + ', index = ' + index);
});
```
- a = ['A', 'B', 'C']
  - a.forEach(function (element, index, array)
- Set与Array类似，但Set没有索引，因此回调函数的前两个参数都是元素本身

### 函数定义和调用
- function abs(x) {}
- var abs = function(x) {};
- 由于JavaScript允许传入任意个参数而不影响调用，因此传入的参数比定义的参数多也没有问题，虽然函数内部并不需要这些参数
- 传入的参数比定义的少也没有问题
- 要避免收到undefined，可以对参数进行检查
```
if (typeof x !== 'number') {
    throw 'Not a number';
}
```
- arguments
  - JavaScript还有一个免费赠送的关键字arguments，它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。arguments类似Array但它不是一个Array
  - 利用arguments，你可以获得调用者传入的所有参数。也就是说，即使函数不定义任何参数，还是可以拿到参数的值
  - 实际上arguments最常用于判断传入参数的个数。
- rest参数
  - function foo(a, b, ...rest)
  - rest参数只能写在最后，前面用...标识，从运行结果可知，传入的参数先绑定a、b，多余的参数以数组形式交给变量rest

### 变量的作用域
- 由于JavaScript的函数可以嵌套，此时，内部函数可以访问外部函数定义的变量，反过来则不行
- JavaScript的函数定义有个特点，它会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部
- 由于JavaScript的这一怪异的“特性”，我们在函数内部定义变量时，请严格遵守“在函数内部首先申明所有变量”这一规则。最常见的做法是用一个var申明函数内部用到的所有变量
```
var
    x = 1, // x初始化为1
    y = x + 1, // y初始化为2
    z, i; // z和i为undefined
```
- 不在任何函数内定义的变量就具有全局作用域。实际上，JavaScript默认有一个全局对象window，全局作用域的变量实际上被绑定到window的一个属性
- 名字空间
  - 把自己的代码全部放入唯一的名字空间MYAPP中，会大大减少全局变量冲突的可能。
  - 许多著名的JavaScript库都是这么干的：jQuery，YUI，underscore等等
- 由于JavaScript的变量作用域实际上是函数内部，我们在for循环等语句块中是无法定义具有局部作用域的变量的
  - for(var i = 0; i < 100; ++i){} i += 100;
- 为了解决块级作用域，ES6引入了新的关键字let，用let替代var可以申明一个块级作用域的变量
  - for (let i=0; i<100; i++)
- 常量
  - ES6标准引入了新的关键字const来定义常量，const与let都具有块级作用域
- 结构赋值
  - var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
  - 如果需要从一个对象中取出若干属性，也可以使用解构赋值，便于快速获取对象的指定属性
    - var {name, age, passport} = person;
    - let {name, passport:id} = person;
    - var {name, single=true} = person;
    - 已经声明x，y：({x, y} = { name: '小明', x: 100, y: 200});
    - function buildDate({year, month, day, hour=0, minute=0, second=0})

### 继承
- Object.create()方法可以传入一个原型对象，并创建一个基于该原型的新对象，但是新对象什么属性都没有，因此，我们可以编写一个函数来创建xiaoming