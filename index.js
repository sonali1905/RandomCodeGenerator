let button=document.querySelector("#button");
let color=document.querySelector("#color");

const getColor=()=>{
    // 16777215 is a speciic value upto which we want to generate random number
    let randomNumber=Math.floor(Math.random()*16777215);
    //Now convert into hexadecimal islia 16 likha hai
    let randomCode="#"+randomNumber.toString(16);
    document.body.style.backgroundColor=randomCode;
    color.innerText=randomCode;
    //Copy the Code
    navigator.clipboard.writeText(randomCode);

}

//Event Call
button.addEventListener("click" , getColor);

//initial Call
getColor();