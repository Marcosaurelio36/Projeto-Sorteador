function drawANumber () {


    const max = Math.ceil ( document.querySelector(".input-max").value) 
    const min = Math.floor ( document.querySelector(".input-min").value)

    if (min >= max){
        alert(" 🚨 O valor minino deve ser MENOR que o valor maximo🚨")
    } else {
        const result = Math.floor(Math.random() * (max - min + 1) + min);
    

 
    alert (result)
    }


}