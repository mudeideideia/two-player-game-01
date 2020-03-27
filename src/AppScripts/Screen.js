'use strict';

class MyCanvas {
    constructor(height = 600, width = 600){
        this.canvas = document.createElement('canvas')
        this.canvas.width = width
        this.canvas.height = height
        this.ctx = this.canvas.getContext('2d');
        this.x = width*0.5
        this.y = height*0.5
        this.addEvents()
    }

    insertOnHTML(element){
        if(element !== undefined) {
            element.appendChild(this.canvas)
        } else {
            console.log("Impossible append it on undefined.");
            
        }
    }
    clearCanvas() {
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect( 0, 0,
            this.canvas.width,
            this.canvas.height
        )
    }

    insertOnCanvas(json){
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


    mousePosition() {
        return {
            x:this.x,
            y:this.y,
        }
    }

    addEvents(){
        window.onload = () => {
            this.rect = this.canvas.getBoundingClientRect()
        }
        this.canvas.addEventListener('mousemove', e => {
            this.x = e.clientX - this.rect.left;
            this.y = this.canvas.height - (e.clientY - this.rect.top);
        });
        this.canvas.addEventListener('touchstart', e => {
            const clientX = e.touches[0].clientX;
            const clientY = e.touches[0].clientY;
            this.x = clientX - this.rect.left;
            this.y = this.canvas.height - (clientY - this.rect.top);
        });
        this.canvas.addEventListener('touchmove', e => {
            const clientX = e.touches[0].clientX;
            const clientY = e.touches[0].clientY;
            
            this.x = clientX - this.rect.left;
            this.y = this.canvas.height - (clientY - this.rect.top);
        });
    }

}

// canvas.style.border = "1px solid #000"
