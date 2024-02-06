// var nickName = 'John';
window.nickName = 'John';
console.log(window);
console.log(window.nickName === nickName);
console.log(window.greeting === greeting);
// var a = 10;
// var a = 15;
window.a = 10;
window.a = 15;

function greeting() {
    console.log('Hello');
}