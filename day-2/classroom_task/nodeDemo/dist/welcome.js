"use strict";
class MyClass {
    // let b:number=10
    showName(uname = "admin", email = 'aaa@email.com') {
        console.log('welcome to Ts');
        console.log('welcome to TS ' + uname + ' ' + email);
        console.log(`welcome to TS  ${uname} ${email}`);
    }
}
const userdata = ['admin', 'manager'];
console.log(...userdata);
let classDemo = new MyClass();
classDemo.showName('poonam', 'poonam@gmail.com');
