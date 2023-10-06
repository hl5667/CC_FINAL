//declare the name 
console.log("hi from shapesystem") //--> test if the file is linked
class ShapeSystem {
// construction
    constructor() {
            // - list of our shapes 
        this.shapes = []
    }
// make new shapes 
// methods
    createShape() {
        // make a new shape object
        let temp = new Shape (
            random (0, width),
            random (0, height),
            35,
            35,
            random (-5, 5),
            random (-5, 5)
        )
        temp.color = [
            random(255), random(255), random(255)
        ]
        // add it to our shapes arrey 
        this.shapes.push(temp)
    }
// get rid of old shapes 
    discardShapes() {

            for(let i = 0; i < this.shapes.length; i++)
            // then we remove it from the shape arey  

            if (this.shapes[i].age > 500) {
                this.shapes.splice (i, 5)
            // if a shape is too old            
            
            }

    
        }           
// update shapes 
    update() {
        // for each shape in our array
        // update its position base on it's speed.
            for(let i = 0; i < this.shapes.length; i++) {
                this.shapes[i].update()
            }
    }

// draw the shapes
    display() {
        //for each shape in our array, 
        //draw it. 
        for (let i = 0; i < this.shapes.length; i++) {
            this.shapes[i].display()
        }
    }
}