import multer from "multer";
import path from "path";

// Destination to store the images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "";

    if (req.baseUrl.includes("users")) {
      folder = "users";
    }
    if (req.baseUrl.includes("pets")) {
      folder = "pet";
    }
  },
  filename: (req, file, cb) => {},
});
