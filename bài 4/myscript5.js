const CONERT = 23000;
function convertmoney(){
   
    let amounMoney =document.getElementById("AmountMoney").value;
    let frommoney = document.getElementById("FromMoney").value;
    let tomoney = document.getElementById("ToMoney").value;
  
    if(frommoney == "USD"){
        if (tomoney == "USD"){
            document.getElementById("result").innerHTML = "result: " + amounMoney + ' ' + tomoney;
        }
        else {
            document.getElementById("result").innerHTML ="result:" + (amounMoney * 23000) + ' ' + tomoney;
        }
        }
    else {
            if(tomoney == "USD"){
                document.getElementById("result").innerHTML = "result:" + (amounMoney /23000)+ ' ' + tomoney;
            }
            else{
                document.getElementById("result").innerHTML ="result:" +' '+ tomoney;

            }}
        
document.getElementById("result")= result ;
        }