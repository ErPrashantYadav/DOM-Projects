// Generate Random Color

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i=0; i<6 ; i++)
    {
      color += hex[Math.floor(Math.random()*16)]
    }
    return color
  }
  
  let intervelID;
  
  const startChangingColor = function(){
    if (!intervelID){
      intervelID = setInterval(changeBgColor,1000)
    }
  
    function changeBgColor (){
      document.body.style.backgroundColor = randomColor()
    }
  }
  
  const stopChangingColor = function(){
    clearInterval(intervelID)
    intervelID = null
  }
  
  const start = document.getElementById('start')
  const stop = document.getElementById('stop')
  
  start.addEventListener('click',startChangingColor)
  stop.addEventListener('click',stopChangingColor)
  