var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();
var sourcePath = path.join(path.dirname(__dirname), 'about.txt');
var destinationPath = path.join(path.dirname(__dirname), 'newabout.txt');

// Async write file
router.get('/copy-file-async', (req, res) => {
    console.log(req.body);
    fs.copyFile(sourcePath, destinationPath, (err)=> {
        if(err){
            return res.status(500).json({ message: 'Error copying file', error: err });
        }
        res.json({message: "File copying successfully"});
    });
  });
  
  // Sync write file
  router.get('/copy-file-sync', (req, res) => {
    try {
      fs.copyFileSync(sourcePath, destinationPath);
      res.json({ message: 'File copying successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error copying file', error: err });
    }
  });

  module.exports = router;
  