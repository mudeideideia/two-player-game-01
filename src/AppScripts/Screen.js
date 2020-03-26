'use strict';

class Screen {
    constructor(height = 600, width = 600){
        this.canvas = document.createElement('canvas')
        this.canvas.width = width
        this.canvas.height = height
        this.ctx = this.canvas.getContext('2d');
    }

    insertOnElement(element){
        if(element !== undefined) {
            element.appendChild(this.canvas)
        } else {
            console.log("Impossible append it on undefined.");
            
        }
    }

    insertOnScreen(json){
        this.ctx.fillStyle = json.color 
        switch (json.type) {
            case 'rectangle':
                this.ctx.fillRect(
                    json.x0,
                    this.canvas.height -json.height - json.y0,
                    json.width,json.height)
                break;
        
            default:
                this.ctx.fillRect(
                    json.x0,
                    this.canvas.height - 10 - json.y0,
                    10, 10)
                break;
        }
    }
}

// canvas.style.border = "1px solid #000"
