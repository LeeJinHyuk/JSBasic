/**
 * Created by eerto_000 on 2016-09-11.
 */
"use strict";
// 1. 실행 컨텍스트 : 실행 가능한 자바스크립트 코드 블록이 실행되는 환경
/*
 * 전역 변수 및 전역 함수 (전역 컨텍스트)
 */
var globalVariable = "globalVariable";
function globalFunc() {
    // 독자적인 컨텍스트 실행1
    var localVariable1 = "localVariable1";
    console.log("globalFunc");
    console.log(localVariable1);

    function localFunc() {
        var localVariable2 = "localVariable2";
        console.log("localFunc");
        console.log(localVariable2);
    }
    // 독자적인 컨텍스트 실행2
    localFunc();
}

/*
 * 전역 변수 확인 및 전역 함수 호출
 */
console.log(window.globalVariable);
window.globalFunc();

console.log("##########################################");

// 2. 스코프 체인 : 실행 컨텍스트 안에서 연결 리스트 형태로 존재하며 변수 접근에 사용

/*
 * 전역 스코프 체인
 */
var test1 = "test1";
var test2 = "test2";

/*
 * func1 실행 스코프 체인
 */
function func1() {
    var test1 = 1;
    var test2 = 2;
    console.log(test1);
    console.log(test2);
    function func2() {
        var test2 = 22;
        console.log(test2);
    }
    func2();
}
func1();
console.log(test1);
console.log(test2);

console.log("##########################################");

/*
 * func3 실행 스코프 체인
 */
function func3(func) {
    var test1 = 1;
    func();
    console.log(test1);
}

function func4() {
    console.log(test1);
}

func3(func4);

console.log("##########################################");
