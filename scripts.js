function drawANumber () {


    const max = Math.ceil ( document.querySelector(".input-max").value) 
    const min = Math.floor ( document.querySelector(".input-min").value)

    const result = Math.floor(Math.random() * (max - min + 1) + min);
    alert (result)
      


}