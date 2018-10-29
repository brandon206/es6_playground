// import { add, subtract, multiply, divide } from './math';
import * as math from './math';
import { addToDom as atd } from './helpers';

console.log('Math: ', math);

atd('h1' , `23 + 67 = ${math.add(23,67)}`);
atd('h1' , `56 - 14 = ${math.subtract(56,14)}`);
atd('h1', `10 * 2 = ${math.multiply(10,2)}`);
atd('h1', `22 / 11 = ${math.divide(22,11)}`);