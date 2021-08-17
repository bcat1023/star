console.log("Server entrypoint met")
//gitaccess
var downloadUrl = require('download')
var gitclone = require('git-clone')
var rm = require('rimraf').sync
//webserver
const express = require('express')
const app = express()
console.log("Server opened to public")
app.get('/deploy/:user/:gitrepo/', function (req, res) {
  res.send('Deployment in progress')
  try{
        console.log(`User ${user} deployed ${repo}`)
        
        download(`${user}/${gitrepo}`, 'test/tmp', function (err) {
            console.log(err ? 'Error' : 'Success')
          })
  } catch {
      console.log(`ERROR: ${user} tried to deploy ${repo} and failed`)
  }
})
 
app.listen(20)