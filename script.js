
 document.querySelector("#registrar").onclick=registrarIMC
 let n=0

function registrarIMC(){
   
    let nome=document.querySelector("#nome").value;
    let altura=document.querySelector("#altura").value;
    altura=altura.replace(",",".")
    altura=parseFloat(altura)
    let peso=document.querySelector("#peso").value;
    peso=peso.replace(",",".")
    peso=parseFloat(peso)
    let IMC= peso/(altura*altura)
    IMC=IMC.toFixed(2)
    n=n+1

    let tr = document.createElement("tr")
    let td1 =document.createElement("td")
    let td2 =document.createElement("td")
    let td3 =document.createElement("td")
    let td4 =document.createElement("td")
    let td5 =document.createElement("td")

    let table = document.querySelector("table")

    td1.append(n)
    td2.append(nome)
    td3.append(altura)
    td4.append(peso)
    td5.append(IMC)
    
    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    tr.append(td4)
    tr.append(td5)

    table.append(tr)


}
