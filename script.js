let Kilogram = document.getElementById("Kilogram")
let Pounds = document.getElementById("Pounds")
let Ounces = document.getElementById("Ounces")
let btn = document.getElementById("btn")


function checkNull(unit){
   
}
Kilogram.addEventListener('input' ,()=>{
    let pound = Kilogram.value/0.45359237
    pound.toFixed(2)
    Pounds.value=pound
    let ounce = Kilogram.value*35.273962
    ounce.toFixed(2)
    Ounces.value=ounce
    if(Kilogram.value==''){
    btn.style.display="none"
   }else{
     btn.style.display="block"
   }
});

Pounds.addEventListener('input' ,()=>{
      let kilogram = Pounds.value*0.45359237
       Kilogram.value=kilogram
        
      let ounce = Pounds.value*16    
      Ounces.value = ounce   
 
      if(Pounds.value==''){
        btn.style.display="none"
       }else{
         btn.style.display="block"
       }
    })
 Ounces.addEventListener('input' ,()=>{
    kilogram = Ounces.value*0.0283495
    Kilogram.value = kilogram
   
    let pound = Ounces.value/16
    Pounds.value=pound
    if(Ounces.value==''){
        btn.style.display="none"
       }else{
         btn.style.display="block"
       } 
})

 btn.addEventListener('click' , ()=>{
    Kilogram.value=''
    Ounces.value=''
    Pounds.value=''
    btn.style.display="none" 
})