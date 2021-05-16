function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate /100).toFixed(2);
    var year = new Date().getFullYear()+parseInt(years);
    

    if(principal<=0)
    {
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
    var amount=parseFloat(interest)+parseFloat(principal);
    var val=document.getElementById("result");
    val.innerHTML="If you deposit "+"<mark>"+principal+"</mark>"+",<br>at an interest rate of "+"<mark>"+rate+"</mark>"+"%<br>You will receive an amount of interest "+"<mark>"+interest+"</mark>"+",<br> and you recive total amount is "+"<mark>"+ amount+"</mark>" +"in the year "+"<mark>"+year+"</mark>"+"<br>";
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value+"%";
    document.getElementById("rate_val").innerText=rateval;
}
        