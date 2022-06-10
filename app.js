var math=prompt("Enter Yours Marks in Maths: -");
var english=prompt("Enter Yours Marks in English: -");
var urdu=prompt("Enter Yours Marks in Urdu: -");
var physics=prompt("Enter Yours Marks in Physics: -");
var chem=prompt("Enter Yours Marks in Chemistry: -");

var m =Number(math);
var e =Number(english);
var u =Number(urdu);
var p =Number(physics);
var c =Number(chem);
var total= m+e+u+p+c;
var pertotal=(total/500)*100;


setInterval(function () {
document.getElementById("Math").innerText=math;
document.getElementById("permath").innerText=math;
document.getElementById("english").innerText=english;
document.getElementById("perenglish").innerText=english;
document.getElementById("urdu").innerText=urdu;
document.getElementById("perurdu").innerText=urdu;
document.getElementById("phy").innerText=physics;
document.getElementById("perphy").innerText=physics;
document.getElementById("chem").innerText=chem;
document.getElementById("perchem").innerText=chem;
document.getElementById("total").innerText=total;
document.getElementById("pertotal").innerText=pertotal;
if(math>=50)
{
    document.getElementById("p1").innerText="Pass";   
}
else{
    document.getElementById("p1").innerText="Fail";
}
if(english>=50)
{
    document.getElementById("p2").innerText="Pass";   
}
else{
    document.getElementById("p2").innerText="Fail";
}
if(urdu>=50)
{
    document.getElementById("p3").innerText="Pass";   
}
else{
    document.getElementById("p3").innerText="Fail";
}
if(physics>=50)
{
    document.getElementById("p4").innerText="Pass";   
}
else{
    document.getElementById("p4").innerText="Fail";
}
if(chem>=50)
{
    document.getElementById("p5").innerText="Pass";   
}
else{
    document.getElementById("p5").innerText="Fail";
}
if(pertotal>=50)
{
    document.getElementById("p6").innerText="Pass";   
}
else{
    document.getElementById("p6").innerText="Fail";
}
if(pertotal>=90)
{
    document.getElementById("grads").innerText="A";
}
else if (pertotal>=80 && pertotal<90)
{
    document.getElementById("grads").innerText="A-";
}
else if (pertotal>=70 && pertotal<80)
{
    document.getElementById("grads").innerText="B";
}
else if (pertotal>=60 && pertotal<70)
{
    document.getElementById("grads").innerText="C";
}
else if (pertotal>=50 && pertotal<60)
{
    document.getElementById("grads").innerText="D";
}
else 
{
    document.getElementById("grads").innerText="F";
}

}, 1000);

// if(math>50)
// {
//     document.getElementById("p1").innerText="Pass";   
// }
// else{
//     document.getElementById("p1").innerText="fail";
// }