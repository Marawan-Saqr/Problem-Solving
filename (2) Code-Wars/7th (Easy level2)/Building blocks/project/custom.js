class Block{
  constructor(data){
    this.getWidth = function() {
      return data[0];
    }

    this.getLength = function() {
      return data[1];
    }

    this.getHeight = function() {
      return data[2];
    }

    this.getVolume = function() {
      return data[0] * data[1] * data[2];
    }

    this.getSurfaceArea = function() {
      return 2 * (data[0] * data[1] + data[1] * data[2] + data[0] * data[2]);
    }
  }
}


let smallBlock = new Block([2, 4, 6]);
console.log(smallBlock.getWidth());
console.log(smallBlock.getLength());
console.log(smallBlock.getHeight());
console.log(smallBlock.getVolume());
console.log(smallBlock.getSurfaceArea());