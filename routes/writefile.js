var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();
var filePath = path.join(path.dirname(__dirname), 'newabout.txt');

// Async write file
router.get('/write-file-async', (req, res) => {
    console.log(req.body);
    const { content } = req.query;
    fs.writeFile(filePath, content, 'utf8', (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error writing file', error: err });
      }
      res.json({ message: 'File written successfully' });
    });
  });
  
  // Sync write file
  router.get('/write-file-sync', (req, res) => {
    try {
      const { content } = req.query;
      fs.writeFileSync(filePath, content, 'utf8');
      res.json({ message: 'File written successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error writing file', error: err });
    }
  });

  module.exports = router;
  