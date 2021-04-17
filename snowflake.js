class Snowflake{
	constructor(x,y,r)
	{
		var options={
			//isStatic:false,
            density:0.1,
			frictionAir:0.01
			}
		this.x=x;
		this.y=y;
		this.r=10;
		this.body=Bodies.circle(this.x, this.y, 10, options)
        this.image = loadImage("snow4.webp");
		World.add(world, this.body);
	}

	display()
	{
		var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 55,55);
        pop();
 }
}