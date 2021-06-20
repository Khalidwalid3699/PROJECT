function calculate() {

    document.getElementById("borang").style.display="none";
    document.getElementById("output").style.display="block";

    custName = document.getElementById("custName").value;
    item1 = document.getElementById("item1").value;
    item2 = document.getElementById("item2").value;       

    unit1 = document.getElementById("unitPrice1").value;
    barang1 = document.getElementById("quantity1").value;
    unit2 = document.getElementById("unitPrice2").value;
    barang2 = document.getElementById("quantity2").value;

    document.getElementById("custName2").innerHTML = custName;
    document.getElementById("item3").innerHTML = item1;
    document.getElementById("item4").innerHTML = item2;
    document.getElementById("unitPrice3").innerHTML = unit1;    
    document.getElementById("quantity3").innerHTML = barang1;
    document.getElementById("unitPrice4").innerHTML = unit2;
    document.getElementById("quantity4").innerHTML = barang2;

    var num1 = parseFloat(document.getElementById("unitPrice1").value);
    var num2 = document.getElementById("quantity1").value;
    var num3 = parseFloat(document.getElementById("unitPrice2").value);
    var num4 = document.getElementById("quantity2").value;
	
    if(num1&&num2&&num3&&num4)
    {	
        
        var totalprice1=parseFloat(num1*num2);
        document.getElementById("totalPrice1").innerHTML = "RM" + totalprice1;
        
    
        var totalprice2=parseFloat(num3*num4);
        document.getElementById("totalPrice2").innerHTML = "RM" + totalprice2;	
        
        
        var grandtotal=parseFloat(totalprice1+totalprice2);
        document.getElementById("grandTotal").innerHTML = "RM"+ grandtotal;	

        
        if(document.getElementById("Yes").checked){
                document.getElementById("Yes1").innerHTML = "Yes, Has Membership Card";
                discount=Math.round(grandtotal*0.05);
                document.getElementById("discount").innerHTML = "5%";	
                document.getElementById("finalPrice").innerHTML ="RM"+(grandtotal-discount);	
        	}
            if(document.getElementById("No").checked){
                document.getElementById("No1").innerHTML = "No, Doesn't has Membership Card";
                document.getElementById("discount").innerHTML = 0;	
                document.getElementById("finalPrice").innerHTML = grandtotal;	
            }
            alert("Calculation success, Press Ok to see result");	
    } 
    else{
        alert("Complete your form");
    } 
    return false;   
}
