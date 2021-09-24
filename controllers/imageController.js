const multer  = require('multer');
const uniqid = require('uniqid');

const storage = multer.diskStorage({
    
    destination: function (req, file, cb) {
      cb(null, './data/uploads')
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
        } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
      },
    filename: function (req, file, cb) {
     
      if(file.mimetype == "image/jpeg"){
         ext="jpeg"          
      }
      else if(file.mimetype == "image/jpg"){
        ext = "jpg"
      }
      else if(file.mimetype == "image/png"){
        ext = "png"
      }
      else{
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!! '));

      }

      const uniqueSuffix = uniqid();
      cb(null, file.fieldname + '-' + uniqueSuffix+ "." + ext)
    }
  })
  
 const upload = multer({ storage: storage ,limits: { fileSize: 1 * 1024 * 1024  }}).single("avatar")

 module.exports = upload
