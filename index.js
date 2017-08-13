const add = a => b => ({
  a: a + b,
  b: b - a,
  c: 'tuna',
}); // tester

const add2 = add(2);

console.log(add2(1)); // -> testeee
