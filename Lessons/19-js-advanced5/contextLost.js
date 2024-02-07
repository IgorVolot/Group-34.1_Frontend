class User {
    constructor(nickName) {
        this.nickName = nickName;
        // this.infoFunction = this.infoFunction.bind(this);
    }

    infoFunction = function () {
        console.log(`Nickname: ${this.nickName}`);
    }

    infoArrow = () => {
        console.log(`Nickname: ${this.nickName}`);
    }

    greeting = function (prefix, postfix) {
        console.log(`${prefix} ${this.nickName} ${postfix}`);

    }

}

const peter = new User('Peter');
console.log(peter);

console.log('===========  Function  ==========');
peter.infoFunction();

console.log('===========  Arrow  ==========');
peter.infoArrow();

console.log('===========  Context Lost  ==========');
const fn = peter.infoFunction.bind({nickName: 'Rabindranate'});
// const fn = peter.infoFunction;
fn();
func(peter.infoFunction.bind({nickName: 'John'}));


console.log('===========  call, apply  ==========');
peter.infoFunction.call({nickName: 'Mary'});
peter.infoFunction.apply({nickName: 'Ann'});
peter.greeting('Mr.', 'esquire');
peter.greeting.call({nickName: 'Hans'}, 'Mr.', 'esquire');
peter.greeting.apply({nickName: 'Hans'}, ['Mr.', 'esquire']);

function func(callback) {
    callback();
}

