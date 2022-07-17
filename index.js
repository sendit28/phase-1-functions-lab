function distanceFromHqInBlocks(blockNum) {
    // blockNum was below 42, so subtract from 42, 42- blockNum
    if (blockNum < 42) {
        return 42 - blockNum
        
    } else {
        return blockNum - 42
    }    
}

function distanceFromHqInFeet(blockNum) {
    return distanceFromHqInBlocks(blockNum) *264
}

function distanceTravelledInFeet(start, destination) {
    let startBlock = start 
    let endBlock = destination 
    if (endBlock < startBlock)
    {  
        return (startBlock - endBlock) * 264
    } else {
        return (endBlock - startBlock) * 264
    }  
}

function calculatesFarePrice(start, destination) {
    //first 400 free 
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0
    }
//400 to 2000  .02 * feet
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * .02
    }
//flatfare 2000 < 2500
    else if (distance > 2000 && distance <= 2500) {
        return 25

    } else {
        return 'cannot travel that far'
    }
   
//> 2500 return 'cannot travel that far'
  }
    