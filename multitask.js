const https = require('https')
const crypto = require('crypto')
const fs = require('fs')

const start = Date.now()

// uses OS 
function sendRequest() {
  https.request('https://www.google.com', res => {
    res.on('data', () => { })
    res.on('end', () => {
      console.log(Date.now() - start)
    })
  }).end()
}


// uses thread pool
function performHash() {
  crypto.pbkdf2('x', 'y', 100000, 512, 'sha512', () => {
    console.log('Hash:', Date.now() - start)
  })
}

sendRequest()

// uses thread pool
fs.readFile('multitask.js', 'utf8', () => {
  console.log('Fs:', Date.now() - start)
})

performHash()
performHash()
performHash()
performHash()