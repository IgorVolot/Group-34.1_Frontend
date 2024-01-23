let a = 10;
console.log(typeof a);

a = '' + a;   // String(a);
console.log(typeof a);

a = '42';
a = +a;       // Number('42');
console.log(typeof a);
console.log(a);

a = "0";      // 0 - false, '0' - true
a = 42;
a = !!a;      // Boolean(a); 
console.log(typeof a);
console.log(a);
