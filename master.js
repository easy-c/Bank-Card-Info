let fullName = document.querySelector(".fullName");
let selectType = document.querySelector(".cardType");
let cardNum = document.querySelector(".cardNum");
let bankName = document.querySelector(".bankName");
let expiryDate = document.querySelector(".expiryDate");
let cvv = document.querySelector(".cvv");
let submit = document.querySelector(".submit");

//Full Name
let fullNameFun = function(){
    let fullNameValue = fullName.value;
    let fName = document.querySelector(".fName");

    let fullNameList = Array.from(fullNameValue);

    let realTimeValue = fullNameList.reduce(function(acc, curr){
    return acc.length < curr.length? "": curr ;
    })

    let fnText = document.createTextNode(realTimeValue);
    fName.appendChild(fnText);
}
fullName.onkeyup = fullNameFun;
fullName.onpast = fullNameFun;

//Select Type Of Card (Visa/MasterCard)
selectType.onchange = function(){
    let selectTypeValue = selectType.value;
    let cType = document.querySelector(".cType");

    let cTypeList = Array.from(cType.children);
    if(cType.children.length > 0){
        cTypeList.forEach(function(e){
            e.remove();
        })
    }

    let ctLogo = document.createElement("img");
    ctLogo.setAttribute("src",`./${selectTypeValue}.png`)
    cType.appendChild(ctLogo);
}

//Card Number
let cardNumFun = function(){

    let cardNumValue = cardNum.value;
    let cNumber = document.querySelector(".cNumber");

    let cardNumList = Array.from(cardNumValue);

    let realTimeValue = cardNumList.reduce(function(acc, curr){
    return acc.length < curr.length? "": curr ;
    })


        let cnText = document.createTextNode(realTimeValue);

        cNumber.appendChild(cnText);
        cNumber.style.color = "#111344";
        cNumber.style.fontWeight = "900";
        cNumber.style.letterSpacing = "2px";
        cNumber.style.fontSize = "25px";
        
}

cardNum.onkeyup = cardNumFun;
cardNum.onpast = cardNumFun;

//Bank Name 
bankName.onchange = function(){
    let bankNameValue = bankName.value;
    let bName = document.querySelector(".bName");

    let bNameList = Array.from(bName.children);
    if(bName.children.length > 0){
        bNameList.forEach(function(e){
            e.remove();
        })
    }

    let bnImg = document.createElement("img");
    bnImg.setAttribute("src",`./${bankNameValue}.png`);
    bName.appendChild(bnImg);

    if(bnImg.attributes[0].value === "./BankChaabi.png"){
        bnImg.style.width="40px"
    }
}

//Expiry Date
expiryDate.onchange = function(){
    let expiryDateValue = expiryDate.value;
    let eDateSpan = document.querySelector(".eDate span");

    let edText = document.createTextNode(expiryDateValue);
    eDateSpan.appendChild(edText);
}

//CVV
cvv.onkeyup = function(){
    let cvvValue = cvv.value;
    let cvvContentSpan = document.querySelector(".cvvContent span");

    let cvvList = Array.from(cvvValue);

    let realTimeValue = cvvList.reduce(function(acc, curr){
    return acc.length < curr.length? "": curr ;
    })

    let ccText = document.createTextNode(realTimeValue);
    cvvContentSpan.appendChild(ccText)
}

//All These Info To Console 
submit.onclick = function(e){

    e.preventDefault();

    let fullNameValue = fullName.value;
    let selectTypeValue = selectType.value;
    let cardNumValue = cardNum.value;
    let bankNameValue = bankName.value;
    let expiryDateValue = expiryDate.value;
    let cvvValue = cvv.value;

    let allInfo = document.createTextNode(`Bank Card Info:
    Full Name: ${fullNameValue}, Card Type: ${selectTypeValue}, Card Number: ${cardNumValue}, Bank Name: ${bankNameValue}, Expiry Date: ${expiryDateValue}, CVV: ${cvvValue}`);
    console.log(allInfo);
}