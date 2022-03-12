# isNum.JS
Advanced integer checking methods for javascript
## Functions
`isNum.int`
```js
isNum.int(1); // True
isNum.int(3e3); // True
isNum.int(0xff); // True
isNum.int(0); // True
isNum.int(1.1); // True
isNum.int('1'); // True
isNum.int('0'); // True
isNum.int('4.5'); // True
isNum.int(parseInt('4.2')); // True
isNum.int(parseInt('9e2')); // True
```
Benchmarks:
**Int** : `481590178.57 ops/s ±`
**String**: `6323350.12 ops/s ±`
View on [JSBench.me](https://jsbench.me/ohl0nw7kl0)

`isNum.infinite`
```js
isNum.infinite(1); // True
isNum.infinite(3e3); // True
isNum.infinite(0xff); // True
isNum.infinite(0); // True
isNum.infinite(1.1); // True
isNum.infinite('1'); // True
isNum.infinite('0'); // True
isNum.infinite('4.5'); // True
isNum.infinite(Number.MAX_VALUE + 1); // False
isNum.infinite(1.7976931348623157e+308 * 2); // False
```
Benchmarks:
**Int** : `444638960.97 ops/s ±`
**String**: `2850417.84 ops/s ±`
View on [JSBench.me](https://jsbench.me/x4l0nwdbq8)

`isNum.finite`
```js
isNum.finite(1); // True
isNum.finite(3e3); // True
isNum.finite(0xff); // True
isNum.finite(0); // True
isNum.finite(1.1); // True
isNum.finite('1'); // True
isNum.finite('0'); // True
isNum.finite('4.5'); // True
isNum.finite(Number.MAX_VALUE + 1); // False
isNum.finite(Number.MIN_VALUE - 1); // False
```
Benchmarks:
**Int** : `56695098.32 ops/s ±`
**String**: `5673362.28 ops/s ±`
View on [JSBench.me](https://jsbench.me/ael0nwfyy0)

`isNum.zero`
```js
isNum.zero(1); // False
isNum.zero(3e3); // False
isNum.zero(0xff); // False
isNum.zero(0); // True
isNum.zero(1.1); // False
isNum.zero('1'); // False
isNum.zero('0'); // True
isNum.zero('4.5'); // False
isNum.zero(Number.MAX_VALUE + 1); // False
isNum.zero(Number.MIN_VALUE - 1); // True
```
Benchmarks:
**Int** : `470544993.9 ops/s ±`
**String**: `6761291.78 ops/s ±`
View on [JSBench.me](https://jsbench.me/ghl0nwi3mr)

`isNum.infinity.negative`
```js
isNum.infinity.negative(1); // False
isNum.infinity.negative(3e3); // False
isNum.infinity.negative(0xff); // False
isNum.infinity.negative(0); // False
isNum.infinity.negative(1.1); // False
isNum.infinity.negative(Number.MAX_VALUE + 1); // False
isNum.infinity.negative(Number.MIN_VALUE - 1); // True
isNum.infinity.negative(-Infinity); // True
```
Benchmarks:
**Int** : `468378730.25 ops/s ±`
View on [JSBench.me](https://jsbench.me/h6l0nwkk1h)

`isNum.infinity.positive`
```js
isNum.infinity.positive(1); // False
isNum.infinity.positive(3e3); // False
isNum.infinity.positive(0xff); // False
isNum.infinity.positive(0); // False
isNum.infinity.positive(1.1); // False
isNum.infinity.positive(Number.MAX_VALUE + 1); // True
isNum.infinity.positive(Number.MIN_VALUE - 1); // False
isNum.infinity.positive(Infinity); // True
```
Benchmarks:
**Int** : `476275024.3 ops/s ±`
View on [JSBench.me](https://jsbench.me/usl0nwmha2)

`isNum.safeInt`
```js
isNum.infinity.positive(1); // True
isNum.infinity.positive(3e3); // True
isNum.infinity.positive(0xff); // True
isNum.infinity.positive(0); // True
isNum.infinity.positive(1.1); // True
isNum.infinity.positive(Number.MAX_VALUE + 1); // False
isNum.infinity.positive(Number.MIN_VALUE - 1); // False
isNum.infinity.positive(Infinity); // True
```
Benchmarks:
**Int** : `475236840.47 ops/s ±`
View on [JSBench.me](https://jsbench.me/hql0nwnrj3)

##License
Copyright © 2022, Wraith. Released under the [MIT License](https://github.com/wraithtest2/isNum.JS/blob/main/LICENSE).
