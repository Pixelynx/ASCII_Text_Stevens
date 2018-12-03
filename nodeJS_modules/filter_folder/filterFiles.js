const fs = require('fs')
const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

const filterFiles = (folder, ext, cb) {

fs.readdir(folder, (err, files) => {
  if (err) {
    cb(err);
    return;
  }
  cb(null, arr);

  files.filter((file) => {
    if (path.extname(file) === ext) {
      let arr = [];
      arr.push(file);
      arr.push(ext);
    }
  })
})

}





module.exports = {
  filterFiles
}
