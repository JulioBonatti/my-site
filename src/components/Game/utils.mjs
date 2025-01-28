class Box {
    constructor (xPos, yPos, mass) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.mass = mass;
        this.xAcel = 0;
        this.xVel = 0;
        this.yVel = 0;
        this.xAbsPos = 0;
        this.yAbsPos = 0;
    };
} 

class BoxPhisics extends Box {
    constructor(xPos, yPos, mass, xForce, gravity, timeDelta) {
        super(xPos, yPos, mass);

        this.xForce = xForce;
        this.gravity = gravity;
        this.timeDelta = timeDelta / 1000;

        this.xVel = this.xForce
    }
    
    checkFloorCollision () {
        if (this.ypos >= 100) {
            return true;
        };
        return false;
    }

    calculateResultant () {
        this.xAbsPos += this.xForce * this.timeDelta / this.mass;
        this.yVel += this.gravity * this.mass * (this.timeDelta ** 2) / 2;
        this.yAbsPos += this.yVel; 

        this.xPos = this.xAbsPos * 100;
        this.yPos += this.yAbsPos * 100;

        return (this.checkFloorCollision ? {
            xPos: this.xPos,
            yPos: 100,
            endScene: true // This actually needs to be ended wheen x and y velocity are 0
        } : {
            xPos: this.xPos,
            yPos: this.yPos,
            endScene: false
        });
    }
}

export default BoxPhisics;