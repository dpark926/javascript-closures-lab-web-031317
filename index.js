const app = "I don't do much."

function bumpCounter() {
  var counter = 0

  var addBump = function() {
    counter += 1
  }

  var getBumps = function() {
    return counter
  }

  return {addBump, getBumps}
}

/////////////////////////////////////////////////

function createAnimal(animalType) {
  function crazyAnimal(deadlyDevice) {
    return {animalType: animalType, deadlyDevice: deadlyDevice}
  }

  return crazyAnimal;
}


var sharkCreator = createAnimal("Shark")
var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")
var sharkWithFrickinCannon = sharkCreator("Cannon")
