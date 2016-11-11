const path = require('path');
const express = require('express');
const multer = require('multer');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const storage = multer.memoryStorage();
const upload = multer({storage});

app.use(express.static(publicPath));

app.post('/upload', upload.single('data'), (req, res, next) => {
  if(req.file) {
    res.json({
      filename: req.file.originalname,
      size: req.file.size,
      type: req.file.mimetype
    });
  } else {
    res.status(500).json({error: 'File was not uploaded'});
  }
  next();
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
