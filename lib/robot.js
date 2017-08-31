'use strict';

function Robot() {
  // implement your solution here!
  this.coordinates = []
}

const directions = ['north', 'east', 'south', 'west']

Robot.prototype.orient = function orient(currentDirection){
  if (!directions.includes(currentDirection)) {
    throw new Error ("Invalid Robot Bearing")
  } else {
    this.bearing = currentDirection
  }
}

Robot.prototype.turnRight = function turnRight(){
  let whereYaAt = directions.indexOf(this.bearing)
  if (whereYaAt === 3){
    this.bearing = directions[0]
  }else{
    this.bearing = directions[whereYaAt+1]
  }
}

Robot.prototype.turnLeft = function turnLeft(){
  let whereYaAt = directions.indexOf(this.bearing)
  if (whereYaAt === 0){
    this.bearing = directions[3]
  }else{
    this.bearing = directions[whereYaAt-1]
  }
}

Robot.prototype.at = function at(x, y){
  this.coordinates = [x, y]
}

Robot.prototype.advance = function advance(){
  if (this.bearing === directions[0]) {
    this.coordinates[1] += 1
  } else if (this.bearing === directions[1]) {
    this.coordinates[0] += 1
  } else if (this.bearing === directions[2]) {
    this.coordinates[1] -= 1
  } else {
    this.coordinates[0] -= 1
  }

}

Robot.prototype.instructions = function instructions(instr){
  let arrOfInstr = instr.split("")
  let newArr = []
  for (let i = 0; i< arrOfInstr.length;i++){
    if(arrOfInstr[i] === "A"){
      newArr.push('advance')
    }else if(arrOfInstr[i] === "L"){
      newArr.push("turnLeft")
    }else{
      newArr.push("turnRight")
    }
  }
  return newArr
}

Robot.prototype.place = function place(obj) {
  this.coordinates[0] = obj.x
  this.coordinates[1] = obj.y
  this.bearing = obj.direction
}

Robot.prototype.evaluate = function evaluate(directionString){
  let newArr = this.instructions(directionString)
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "advance") {
      this.advance()
    } else if (newArr[i] === "turnLeft") {
      this.turnLeft()
    } else {
      this.turnRight()
    }
  }
}









//
