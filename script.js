let con=document.querySelector("#container");
let love=document.querySelector("i");
con.addEventListener("click",function()
{
   love.style.transform="scale(1) translate(-50%,-50%)";
   love.style.opacity=0.8;
   setTimeout(function()
   {
    love.style.opacity=0;
   },1000)
   setTimeout(function()
{
    love.style.transform="scale(0) translate(-50%,-50%)";
},2000)
})

//settimeout mean delay i.e settimeout bhitra function hunxa jasle kehi time paxi tesma bhako code print garxa print garna delay garxa
