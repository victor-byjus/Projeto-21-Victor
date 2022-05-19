class Parede {
    constructor(posX,posY,lar,alt){
        var config = {
            isStatic: true
        }
        this.posX = posX;
        this.posY = posY;
        this.lar = lar;
        this.alt = alt;
        this.corpo = Bodies.rectangle(posX,posY,lar,alt,config);
        World.add(world,this.corpo)
    }
    exibir(){
        var pos = this.corpo.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.lar,this.alt);
        pop();
    }
}