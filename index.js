/* ************** minus button  ************ */

let moinsbtn = document.getElementsByClassName("minus-btn");
for(let i=0 ;  i < moinsbtn.length ; i++){
    let mins = moinsbtn[i];
    mins.addEventListener("click", function(){
        if (mins.nextElementSibling.value > 1)
        {mins.nextElementSibling.value--;} 
        total ();
        total1();
        total2();
        total3();

    });

}

/* ************** plus button  ************ */

let plusbtn = document.getElementsByClassName("plus-btn");
for(let i=0 ;  i < plusbtn.length ; i++) {
    let bplus = plusbtn[i];
    bplus.addEventListener("click", function(){
        bplus.previousElementSibling.value++;
        total ();
        total1();
        total2();
        total3();
    });
}

/* ************** delete button  ************ */

let del = document.getElementsByClassName("delete");
for(let i =0; i<del.length ; i++)
{
    let s = del[i];
    s.addEventListener("click",function(){
        s.parentElement.remove();
        total ();
        total1();
        total2();
        total3();
    });
} 
/* ************** intialisation functions  ************ */

let items = document.getElementsByClassName("Item");
let pricete = document.getElementById("finalPrice");
function total ()
{let s = 0 ;
    for(let i =0;i< items.length ; i++){
        let item = items[i];
        s=s+ item.querySelector(".Quant").value * item.querySelector(".price");

    }
    return (pricete.value= s);
}

function total1()
{
    let q1=document.getElementById("q1");
    let p1=document.getElementById("p1");
    p1.innerText=q1.value*1379;
}

function total2()
{
    let q2=document.getElementById("q2");
    let p2=document.getElementById("p2");
    p2.innerText = q2.value * 176;
}

function total3()
{
    let q3=document.getElementById("q3");
    let p3=document.getElementById("p3");
    p3.innerText = q3.value*500;
}

// ******  likes  ******//
let likes = document.getElementsByClassName("like");
// console.log(likes);
for(let i=0; i < likes.length ; i++)
{
    let like = likes[i];
    like.addEventListener("click", function(){
        if(like.firstChild.style.color=="black"){like.firstChild.style.color="red";}
        else {like.firstChild.style.color="black";}
    });
}