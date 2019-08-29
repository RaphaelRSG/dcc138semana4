function Sprite(params ={}){
    var exemplo = {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        h: 10,
        w: 10,
        angulo:0.8,
        vm:0,
        va: 0,
        color: "purple",
        imune: 0,
        atirando: 0,
        comportar: undefined,
        scene: undefined,
        cooldown: 1 
    }
    Object.assign(this, exemplo, params);
}
Sprite.prototype = new Sprite();
Sprite.prototype.constructor = Sprite;

Sprite.prototype.desenhar = function (ctx){
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.strokeRect(-this.w/2,-this.h/2,this.w,this.h);
    ctx.rotate(this.angulo);
    ctx.fillStyle =this.color;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;

    //ctx.fillRect(-this.w/2,-this.h/2,this.w,this.h);
    //

    ctx.beginPath();
    ctx.moveTo(-this.w/2,-this.h/2);
    ctx.lineTo(-this.w/2,+this.h/2);
    ctx.lineTo(+this.w/2,0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();   
}
Sprite.prototype.mover = function (dt){
    this.angulo = this.angulo+this.va*dt;

    this.vx = this.vm*Math.cos(this.angulo);
    this.vy = this.vm*Math.sin(this.angulo);

    this.x = this.x +this.vx*dt;
    this.y = this.y +this.vy*dt;

    this.cooldown = this.cooldown-dt;

}