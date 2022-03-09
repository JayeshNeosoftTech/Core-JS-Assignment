let fnameNode=document.getElementById("fname");
let lnameNode=document.getElementById("lname");
let passNode=document.getElementById("passwd");
let emailNode=document.getElementById("email");
let mobileNode=document.getElementById("mobile");

let border1= "2px solid red";
let border2= "2px solid green";
let tdNode1=document.getElementById("error1");
let tdNode2=document.getElementById("error2");
let tdNode3=document.getElementById("error3");
let tdNode4=document.getElementById("error4");
let tdNode5=document.getElementById("error5");

function valide1(){
    tdNode1.textContent="";
    let fName=fnameNode.value;
    let regEx= new RegExp("^[A-Za-z]*$");
    console.log(regEx.test(fName));
    if(fName==''){
        tdNode1.textContent="This field is required";
        fnameNode.style.border=border1;
        return false;
    }
    else if(regEx.test(fName)==false){
        tdNode1.textContent="Only Chars";
        fnameNode.style.border=border1;
        return false;
    }
    else{
        fnameNode.style.border=border2;
        return true;
    }
}

function valide2(){
    tdNode2.textContent="";
    let lName=lnameNode.value;
    regEx= new RegExp("^[A-Za-z]*$");
    if(lName==''){
        tdNode2.textContent="This field is required";
        lnameNode.style.border=border1;
        return false;
    }
    else if(regEx.test(lName)==false){
        tdNode2.textContent="Only Chars";
        lnameNode.style.border=border1;
        return false;
    }
    else{
        lnameNode.style.border=border2;
        return true;
    }
}

function valide3(){
    tdNode3.textContent="";
    let passWd=passNode.value;
    let regExp= new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,12}")
    if(passWd==''){
        tdNode2.textContent="This field is required";
        passNode.style.border=border1;
        return false;
    }
    else if(regExp.test(passWd)==false){
        let spanNode=document.createElement("span");
        spanNode.textContent="The password should contain atleast one";
        let ulnode= document.createElement("ul");
        let linode1=document.createElement("li");
        linode1.textContent="Capital letter";
        let linode2=document.createElement("li");
        linode2.textContent="Small letter";
        let linode3=document.createElement("li");
        linode3.textContent="Digit";
        let linode4=document.createElement("li");
        linode4.textContent="Special symbol";
        ulnode.append(linode1,linode2,linode3,linode4);
        tdNode3.append(spanNode,ulnode);
        passWd.style.border=border1;
        return false;
    }
    else if(passWd.length<5 || passWd.length>12){
        tdNode3.textContent="Password shoild be atleast 5 and atmost 12 chars";
        passWd.style.border=border1;
        return false;
    }
    else{
        passNode.style.border=border2;
        return true;
    }            //pattern="(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,10}"
}

function valide4(){
    tdNode4.textContent="";
    let email=emailNode.value;
    if(email==''){
        tdNode4.textContent="This field is required";
        emailNode.style.border=border1;
        return false;
    }
    else if(!email.includes('@') || ss==''){
        tdNode4.textContent="Put valid email ID";
        emailNode.style.border=border1;
        return false;
    }
    else{
        emailNode.style.border=border2;
        return true;
    }
}

function valide5(){
    tdNode5.textContent="";
    let mobileNum=mobileNode.value;
    var regExp= new RegExp("/^[789]\d{9,9}$/g");
    if(mobileNum==''){
        tdNode5.textContent="This field is required";
        mobileNode.style.border=border1;
        return false;
    }
    else if(regExp.test(mobileNum)==false){
        tdNode5.textContent="Put valid mobile number!";
        mobileNode.style.border=border1;
        return false;
    }
    else{
        mobileNode.style.border=border2;
        return true;
    }
}

let checkNode=document.getElementById("showp");
function show(){
    if(checkNode.checked){
        passNode.type="text";
    }
    else{
        passNode.type="password";
    }
}

function validateForm(){
    let str1=valide1();
    let str2=valide2();
    let str3=valide3();
    let str4=valide4();
    let str5=valide5();
    return str1 && str2 && str3 && str4 && str5 ;
}