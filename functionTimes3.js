function product(...args1) {
  return function (...args2) {
    return function (...args3) {
      return args1[0] * args2[0] * args3[0] + args1[1] * args2[1] * args3[1];
    };
  };
}

console.log(product(1, 2)(1, 1)(2, 3));

console.log(product(10, 2)(5, 0)(2, 3));
