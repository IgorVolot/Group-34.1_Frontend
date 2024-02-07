let nickName = 'John';
function greeting() {
    let nickName = 'Peter';
    return function () {
        let nickName = 'Hans';
        console.log(nickName);
    }
}

nickName = 'Rabindranate';
const hello = greeting();
hello();