class Box {
    constructor(xPos, yPos, mass) {
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
    constructor(xPos, yPos, mass, xForce, gravity, timeDelta, boxSize) {
        super(xPos, yPos, mass);

        this.xForce = xForce;
        this.gravity = gravity;
        this.timeDelta = timeDelta / 1000;

        this.xVel = this.xForce
        this.endScene = false;
        this.xSize = boxSize.bWidth
        this.ySize = boxSize.bHeight
    }

    checkFloorCollision() {
        if (this.xPos >= 100 - this.xSize && this.yPos >= 100 - this.ySize) {
            this.endScene = true;
            this.xPos = 100 - this.xSize
            this.yPos = 100 - this.ySize
        }
        if (this.yPos >= 100 - this.ySize) {
            this.endScene = true;
            this.yPos = 100 - this.ySize
        };
        if (this.xPos >= 100 - this.xSize) {
            this.endScene = true;
            this.xPos = 100 - this.xSize
        };
    }

    calculateResultant() {
        if (!this.endScene) {
            this.xPos += this.xForce * this.timeDelta / this.mass;
            this.yVel += this.gravity * (this.timeDelta ** 2) / 2;
            this.yPos += this.yVel * 100;
    
            this.checkFloorCollision();
        }

        return {
            xPos: this.xPos,
            yPos: this.yPos,
            endScene: this.endScene // This actually needs to be ended wheen x and y velocity are 0
        }
    }

}
function* lazyCalculatePostions(box) {
    if (box.calculateResultant.endScene) {
        return;
    }
    yield box.calculateResultant();
}

export default BoxPhisics;
