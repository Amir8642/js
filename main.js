let str = 'aaa@bbb@ccc'
let str_ = str.split('@').join('!')
console.log(str_);

const str1= 'HELLOWORLD'
let str__ = str1.replace('ELLOWORLD', 'ello world')
console.log(str__);

let str2 = 'Hello, it is HTML'
let str___ = str2.split('HTML').join('not JS')
console.log(str___);

let a = 'alex'
let res = a.split('a').join('A')
console.log(res);

function how (max) {
    return Math.floor(Math.random() * max)
}
console.log(how(100000000))

let name = 'Lex Luter has a big suit'
let nameres = name.split('Lex Luter has a big suit').join('Alex')
console.log(nameres);