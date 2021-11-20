function calcul() {
   var A = document.getElementById("debit").elements["A"].value;
   if (A < 850 ||  A > 1200) {
      alert("le débit A doit varie entre 850 Kg/h et 1200 kg/h.");
    }
    else {
   var xA = 0.2
   var xB = 0.5
   var N = 82
   var H = 18
   var xC = N / (N + 3 * H)
   var V = A * ( 1 - xA/xB);
   var B = (A - V);
   var C = B * xB / xC ;
   var L = B - C ;
   var TC = 20
   var xL = 3 * 10 ** -8 * TC ** 4 - 10 ** -6 * TC ** 3 + 8 * 10 ** -6 * TC ** 2 + 0.0027 * TC + 0.2691 ;
   var R = (C * xC - L * xL) / (A * xA) * 10**2 ;
   document.getElementById("V").value = V
   document.getElementById("C").value = C
   document.getElementById("L").value = L
   document.getElementById("R").value = R
   document.getElementById("xL").value = xL
       }
}
function calcula() {
   var Aa = document.getElementById("temp").elements["Aa"].value;
   var TE = document.getElementById("temp").elements["TE"].value;
   var TC = document.getElementById("temp").elements["TC"].value;
   if (Aa < 850 || Aa > 1200) {
      alert("le débit A doit varie entre 850 Kg/h et 1200 kg/h.");
    }
    else {
    if (TE < -17 || TE > 58) {
      alert("Pour la Cristallisation se fait, TE doit etre vartie entre -17°C et 58°C ");
    }
    else {
    if (TC < -17 || TC > 58) {
      alert("Pour la Cristallisation se fait, TC doit etre vartie entre -17°C et 58°C ");
    }
    else {
    if (TE <  TC) {
      alert("La temperature d'evaporateur doit etre > temperature cristallisation! ");
    }
    else {
   var xA = 0.2
   var xB = 3 * 10 ** -8 * TE ** 4 - 10 ** -6 * TE ** 3 + 8 * 10 ** -6 * TE ** 2 + 0.0027 * TE + 0.2691 ;
   var N = 82
   var H = 18
   var xC = N / (N + 3 * H)
   var Va = Aa * ( 1 - xA/xB);
   var Ba = Aa - Va;
   var Ca = Ba * xB / xC ;
   var La = Ba - Ca ;
   var xLa = 3 * 10 ** - 8 * TC ** 4 - 10 ** -6 * TC ** 3 + 8 * 10 ** -6 * TC ** 2 + 0.0027 * TC + 0.2691 ;
   var Ra = (Ca * xC - La * xLa )/ (Aa * xA) *100 ;
   document.getElementById("xB").value = xB
   document.getElementById("xLa").value = xLa
   document.getElementById("Va").value = Va
   document.getElementById("Ca").value = Ca
   document.getElementById("La").value = La
   document.getElementById("Ra").value = Ra
}
}
}
}
}