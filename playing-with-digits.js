//Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// digPow(89, 1) //should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) //should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) //should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) //should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51


function digPow(n, p) {
  //convertir n a string
  let num = n.toString()
  let res = Number
  //separar n en A-B-C
  //elevar A a p, elevar B a p+1, elevar C p+1 y asignar a  SUMA
  num.split("").reduce((a, b) => {
    let A = Math.pow(a, p)
    let B = Math.pow(b, p+=1)
    console.log(A);
    console.log(B);

    }
  )
  //usar Math. floor() para obtener la parte entera de SUMA y restársela al SUMA y si el resultado es 0 el número es entero
  //si la suma de las elevaciones es entero regrersar 1
}
