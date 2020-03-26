'use strict';

class Element {
    constructor({x0 = 0, y0 = 0, color='#ff6501'}) {
      this.x0 = x0;
      this.y0 = y0;
      this.color = color
    }
    setOrigin(x0, y0) {  
        this.x0 = x0;
        this.y0 = y0;
    }
      
    setColor(color) {  
        this.color = color 
    }

    addOnScreen(){
        return {
            type: null,
            x0:this.x0,
            y0:this.y0,
            color:this.color,
        }
    }
}


class Rectangle extends Element {
    constructor ({x0 = 0, y0 = 0, color='#ff6501', width = 10, height = 10}) {
        super({x0, y0, color})
        this.width= width;
        this.height = height;
    }

    setHeigth(height) {  
        this.height = height;
    }
  
    setwidth(width) {  
        this.width = width;
    }
    
    addOnScreen(){
        return {
            type:'rectangle',
            x0:this.x0,
            y0:this.y0,
            color:this.color,
            width:this.width,
            height:this.height
        }
    }
}