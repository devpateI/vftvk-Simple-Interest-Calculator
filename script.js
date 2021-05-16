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
    document.getElementById("result").innerHTML="<b>"+interest+"</b>";
    document.getElementById("resultfinal").innerHTML="If you deposit <b>"+principal+"</b>,\<br\>at an interest rate of <b>"+rate+"</b>%\<br\>You will receive an total amount of <b>"+amount+"</b>,\<br\>in the year <b>"+year+"</b>\<br\>";
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value+"%";
    document.getElementById("rate_val").innerText=rateval;
}
        