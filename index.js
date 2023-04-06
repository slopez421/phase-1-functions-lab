// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
    return blocks - 42
    } else if (blocks < 42) {
        return 42 - blocks
    } 
} 

function distanceFromHqInFeet(blocks) {
   return distanceFromHqInBlocks(blocks)*264;
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
    return (destination - start) * 264
    } else if (destination < start) {
        return (start - destination) * 264
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
// note to self, don't write function when using a previous function. it breaks your code

    if (distance <= 400) {
        return 0;
    } 

    if (distance > 400 && distance <= 2000){
        return (distance-400)* 0.02;
    // - 400 bc the first 400 is free
}
    if (distance > 2000 && distance < 2500) {
        return 25
    }
    if (distance > 2500) {
    return 'cannot travel that far'
    }
}
