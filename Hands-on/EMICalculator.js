function EmiCalculator(){
    var r=parseInt(document.getElementById("interestRate").value);
    var N=parseInt(document.getElementById("tenure").value);
    var P=parseInt(document.getElementById("principalAmount").value);
    var R=(r/100)/12;
    var x=1+R;
    var y = Math.pow(x,N);
    var emi = P*R(x/(y-1));
    document.getElementById("result").innerHTML="EMI is Rs." + emi.toFixed(2);
     //document.getElementById("result").innerHTML=R.toString();
    return false;
}
