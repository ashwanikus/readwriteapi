var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();
var filePath = path.join(path.dirname(__dirname), 'newabout.txt');

/* GET file content. */

// Async read file
router.get('/read-file-async', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json({ message: 'Error reading file', error: err });
      }
      res.json({ data });
    });
});
  
  // Sync read file
router.get('/read-file-sync', (req, res) => {
try {
    const data = fs.readFileSync(filePath, 'utf8');
    res.json({ data });
    //res.render('index', { title: data });
} catch (err) {
    res.status(500).json({ message: 'Error reading file', error: err });
}
});

module.exports = router;


