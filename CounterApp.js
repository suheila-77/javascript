

//increment and reset
let number=document.querySelector("#tiro")
let increment=document.querySelector("#incrementBtn")
let decrement=document.querySelector("#decrementBtn")
let reset=document.querySelector("#resetBtn")
let initialvalue=0
increment.addEventListener("click",function(){
    initialvalue++
    number.innerHTML=initialvalue
    if(initialvalue==4){
        document.body.style.backgroundColor="skyblue"
    }
    // else if(initialvalue>=2){
    //     number.style.fontSize="130px"
    //     number.style.color="yellow"
    // }
    else if(initialvalue==5)
        {
            document.body.style.backgroundColor="purple"
        }
        else if(initialvalue==6)
            {
                document.body.style.backgroundColor="blue"
            }
            else if(initialvalue==7)
                {
                    document.body.style.backgroundColor="yellow"
                }
                else if(initialvalue==8)
                    {
                        document.body.style.backgroundColor="black"
                    }
    else{
        document.body.style.backgroundColor="white"

    }
})

reset.addEventListener("click",function(){
    initialvalue=0
    number.innerHTML=initialvalue
})


decrement.addEventListener("click",function(){
   if( initialvalue>0)
    initialvalue--
    number.innerHTML=initialvalue
})