let isstatus=document.querySelector(".st");
let btn=document.querySelector("#add");
// let remove=document.querySelector("#remove");
let check=0;
btn.addEventListener("click",()=>
{
    if(check==0)
    {
        isstatus.innerHTML="Friend";
        isstatus.style.color="green";
        btn.innerHTML="Remove Friend"
        check=1;
    }
    else{
        isstatus.innerHTML="Stranger";
      isstatus.style.color="red";
      check=0;
      btn.innerHTML="Add Friend";
    }
   
})

// remove.addEventListener("click",()=>
// {
//     isstatus.innerHTML="Stranger";
//     isstatus.style.color="red";
// })