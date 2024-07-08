// 변수 생성 시 var 사용
var a = 100; // 숫자형 변수이지만
a = "ㅋㅋㅋ"; // 이렇게 문자형으로 변수를 바꿔도 된다

var bye = 20000;

console.log(a, bye); // ㅋㅋㅋ 20000

// 기본 데이터 타입
// 문자열, 숫자, undefined, null, NaN, boolean(true, flase)

var num = 100; // 숫자형
var message = '엄마가 "그런 짓 하면 안돼" 라고 하셨어';

console.log(message);
console.log(typeof message); // string
console.log(typeof num); // number

var b;
var c = true; // boolean:따옴표없이

console.log(b); // undefined
console.log(c); // true

console.log(1 > 100); // false

var x = 100;
var y = x;
x = 200;

console.log(x, y); // 200 100
