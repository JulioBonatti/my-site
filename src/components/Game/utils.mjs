class Box {
    constructor (xPos, yPos, mass) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.mass = mass;
        this.xAcel = 0;
        this.yVel = 0;
        this.xAbsoluteP = 0;
        this.yAbsoluteP = 0;
    };
} 

class BoxPhisics extends Box {
    constructor(xPos, yPos, mass, xForce, gravity, timeDelta) {
        super(xPos, yPos, mass);

        this.xForce = xForce;
        this.gravity = gravity;
        this.timeDelta = timeDelta / 1000; // Convert timeDelta to seconds
    }
    
    calculateResultant () {
        this.xAbsoluteP += this.xForce * this.timeDelta / this.mass;
        this.yVel += this.gravity * this.mass * (this.timeDelta ** 2) / 2;
        this.yAbsoluteP += this.yVel; 

        this.xPos = this.xAbsoluteP * 100;
        this.yPos += this.yAbsoluteP * 100;
        
        return {
            xPos: this.xPos,
            yPos: this.yPos
        }
    }
}

export default BoxPhisics;