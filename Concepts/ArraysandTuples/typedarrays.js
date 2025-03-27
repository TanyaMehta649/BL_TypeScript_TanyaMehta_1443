"use strict";
//Using a Specified Length
//created with fixed length and their default value is 0
let intArray = new Int8Array(5);
console.log(intArray);
//froom an existing array
let floatArray = new Float32Array([2.5, 3.5, 4.5]);
console.log(floatArray);
//from an arraybuffer
let buffer = new ArrayBuffer(12);
let int16Array = new Int16Array(buffer);
console.log(int16Array);
//Typed arrays behave like regular arrays in terms of accessing and modifying their elements.
let unit8Array = new Uint8Array(4);
unit8Array[0] = 1;
unit8Array[1] = 2;
//remaining elements will come as 0 0
let uint16Array = new Uint16Array(4);
console.log(uint16Array.length);
console.log(uint16Array.byteLength);
// 4 elements × 2 bytes each)
console.log(uint16Array.buffer); // Output: ArrayBuffer { byteLength: 8 }
