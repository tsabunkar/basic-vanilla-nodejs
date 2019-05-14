const Buffer = require('buffer').Buffer;

const buf1 = Buffer.alloc(10);
console.log(buf1); // <Buffer 00 00 00 00 00 00 00 00 00 00>


// Creates a Buffer of length 10, filled with 0x1.
const buf2 = Buffer.alloc(10, 1);
console.log(buf2); // <Buffer 01 01 01 01 01 01 01 01 01 01>

// const buf3 = new Buffer([1, 2, 3, 4, 5])
const buf3 = Buffer.from([1, 2, 3, 4, 5])
console.log(buf3);

const buf33 = Buffer.from("Nodejs")
console.log(buf33);
console.log(Buffer.isEncoding('utf8'));
console.log(Buffer.isEncoding('ascii'));
console.log(Buffer.isEncoding('hex'));
console.log(Buffer.isEncoding(''));

const str1 = Buffer.alloc(15);
str1.write('Nodejs is great');
console.log(str1);
console.log(str1.toString());
console.log(str1.toString('utf8'));
console.log(str1.toString('utf8', 0, 5));
console.log(str1.toJSON('Nodejs'));
/* const buf4 = Buffer.allocUnsafe(10);
console.log(buf4);  */
