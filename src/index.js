import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const name = "aaa";
const age = 28;
console.log(name);

//テンプレート文字列を用いる
const message2 = `私の名前は${name}です`;
console.log(message2);

//アロー関数
function func1(str) {
  str = str + "oooooo";
  return str;
}
console.log(func1("aaaaaaa"));

//アロー関数
const func2 = (str) => {
  return str;
};

console.log(func2("aaaaa"));

const func3 = (num1, num2) => {
  return num1 + num2;
};

console.log(func3(10, 20));
