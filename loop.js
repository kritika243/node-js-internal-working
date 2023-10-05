//  node myFile.js

const pendingTimers = []
const pendingOSTasks = []
const pendingLongOperations = []

myFile.runContents()


function shouldContinue() {
  //  check if any setInterval, setTimeout, setImmediate 
  // check for any OS tasks for eg if server listening to any port
  // check for any long pending operations like reading files with fs module
  return pendingTimers.length || pendingOSTasks.length || pendingLongOperations.length
}

while (shouldContinue()) {
  //  node looks for pendingTimers and their callbacks 

  //  node looks for pendingOSTasks and pendingLongOperations and their callbacks 

  // node takes a pause and continues when
  //  - for a new task / operation is done
  //  - a timer is about to get complete 

  // node looks for pending timers specifically setImmediate 

  // handle any clean up code through 'close' events
}


// exit to the terminal 