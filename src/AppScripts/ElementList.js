

// Rectangle (x0 = 0, y0 = 0, color='#ff6501', width = 10, height = 10)


const right_racket = ({ x0:50, y0: 250, color:'#ff6501', width:10, height:80})
const left_racket  = ({ x0:540,y0: 250, color:'#ff6501', width:10, height:80})
const ball         = ({ x0:290,y0: 290, color:'#000000', width:10, height:10})
const ball2        = ({ x0:390,y0: 290, color:'#0000ff', width:10, height:10})


const elements = []
elements.push( new Rectangle(right_racket) )
elements.push( new Rectangle(left_racket ))
elements.push( new Rectangle(ball ))