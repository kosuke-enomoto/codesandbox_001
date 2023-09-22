// /**
//  * const,let等の変数宣言
//  */
// var val1 = "var変数1";

// console.log(val1);

// val1 = "あああ";
// console.log(val1);

// const val4 = {
//   name: "eno",
//   age: 39,
// };

// // constで定義したオブジェクトのプロパティは変更可能
// console.log(val4.name + val4.age);
// val4.name = "bababa";
// val4.sex = "male";
// console.log(val4);

// // constで定義した配列は変更可能
// const val5 = ["dog", "cat"];
// val5[0] = "dag";
// val5.push("bird");
// console.log(val5);

// /**
//  * テンプレート文字列
//  */
// const name = "eno";
// const age = 30;

// // 私の名前は eno　です。30歳です。
// //従来の方法
// const message1 = "私の名前は" + name + "です。" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列
// const message2 = `私の名前は${name}です。${age}歳ですよ。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//   return str;
//  }
// const func1 = function (str) {
//   return str;
// };

// console.log(func1("aaaa"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("bbb"));

// const sum = (x, y) => {
//   return x + y;
// };
// console.log(sum(1, 2));

/**
 * 分割代入
 */
// const myProf = {
//   name: "eno",
//   age: 30,
// };
// const message = `my name is ${myProf.name} です。${myProf.age}です。`;
// console.log(message);

// const { name, age } = myProf;
// const message2 = `my name is ${name}. ${age}years old。`;
// console.log(message2);

// const myProf = ["えの", 20];
// const message3 = `name ${myProf[0]} で、age ${myProf[1]}`;
// console.log(message3);

// const [name1, age1] = myProf;
// const message4 = `name ${name1} で、ageaa ${age1}`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "guest") => {
//   return console.log(`Hello ${name} san!`);
// };
// sayHello("aaa");
// sayHello();

/**
 * スプレッド構文 ...
 */
//配列の展開
const arr1 = [1, 2];
console.log(arr1);
