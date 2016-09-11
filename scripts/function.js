/**
 * Created by eerto_000 on 2016-09-11.
 */
// 1. 함수의 this
/**
 * 객체의 메서드에서 this
 * 메서드를 호출한 객체로 this가 바인딩된다.
 */
var object1 = {
    value : 1,
    objectFunc : function() {
        console.log(this.value);
    }
};

var object2 = {
    value : 2
};

object2.objectFunc = object1.objectFunc;

object1.objectFunc();
object2.objectFunc();

/*
 * 함수를 호출할 때의 this
 * 전역 객체에 this가 바인딩된다.
 */
var test1 = 3;

function testFunc() {
    console.log(this.test1);
}

testFunc();

/**
 * 생성자 함수로의 this
 * new 를통해 새로 생성되는 인스턴스에 this가 바인딩된다.
 */
function constructFunc(name) {
    this.name = name;
}
// constructFunc.prototype.testFunc = function() {
//   console.log(this.name);
// };

// console.dir(constructFunc);

var person1 = new constructFunc("lee");
var person2 = new constructFunc("kim");
console.log(person1.name);
console.log(person2.name);
// console.dir(person1);
// console.dir(person2);

// 2. call, apply 의 this
// call apply 의 경우 함수를 실행한다는 개념. 단, this를 변경하면서 실행.

function personFunc(name, age) {
    this.name = name;
    this.age = age;
}

var obj = {};
console.log(obj);
personFunc.call(obj, "lee", 30);
//personFunc.apply(obj, ["lee", 30]);
console.log(obj);