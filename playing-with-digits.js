//Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
digPow(89, 1) //should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) //should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) //should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) //should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51


function digPow(n, p) {
  let suma = 0
  //separar n en A-B-C
  let numbers = n.toString().split("")
  //elevar A a p, elevar B a p+1, elevar C p+1 y asignar a  SUMA
  for (i = 0; i < numbers.length; i++) {
    suma += Math.pow(numbers[i],p++)
  }
  //dividir suma de las elevaciones entre n
  suma = suma/n

  //usar Math. floor() para obtener la parte entera de SUMA y restársela al SUMA y si el resultado es 0 el número es entero;
  //si la suma es entero regrersar suma, caso contrario regrersar -1
  return ( (Math.floor(suma))-suma=== 0 ? suma : -1);
}
