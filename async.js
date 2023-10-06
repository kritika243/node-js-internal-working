const https = require('https')


const start = Date.now()

function sendRequest() {
  https.request('https://www.google.com', res => {
    res.on('data', () => { })
    res.on('end', () => {
      console.log(Date.now() - start)
    })
  }).end()
}
sendRequest()
sendRequest()
sendRequest()
sendRequest()
sendRequest()
sendRequest()