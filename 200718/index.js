'use strict';

//現在の日時
window.onload = function() {
  setInterval(function() {
    let dd = new Date();
    document.getElementById("T1").innerHTML = dd.toLocaleString();
  }, 1000);
}

/*
//変数
let greeting = 'Hello World!';
console.log(greeting);

//定数
const bigGreeting = 'Hi World';
console.log(bigGreeting);
*/

//配列
let foo = ['いち', 'に', 'さん', 'よん']
//console.log(foo[0]);

/*
//ループ文
let index = 0;
while (index < foo.length) {
    //繰り返したい命令
    console.log(foo[index]);
    index++; //絶対に必要。無限ループにしないこと！！
}

//if / else
if (foo.length > 5) {
    console.log('OK!');
} else {
    console.log('NG...')
}
*/

/*
//関数
const test = () => {
    //ここに実行したい命令を書く
    if (foo.length > 3) {
        console.log('OK!');
    } else {
        console.log('NG...')
    }
}
test();
*/

/*
//関数(引数)
const test = (arg) => {
    //ここに実行したい命令を書く
    if (foo.length > arg) {
        console.log('OK!');
    } else {
        console.log('NG...')
    }
};
test(3);
test(10);
test(0);
test(-1);
*/

/*
//ｵﾌﾞｼﾞｪｸﾄ
const hoge = {
    color: 'pink',
    size: 'big',
    purfume: 'mint',
    goTo: () => {
        console.log('HELLO WORLD');
    }
};
console.log(hoge.goTo());
*/
//特殊ｵﾌﾞｼﾞｪｸﾄ
console.log(window); //windowの情報を取得
console.log(document); //documentの情報を取得
//クリックした時に動作する
document.getElementsByTagName('button')[0].addEventListener('click', () => {
    //命令を書く
    window.alert('GoodMorning!');
});


