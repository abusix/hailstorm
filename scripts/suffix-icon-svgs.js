const { readdirSync, rename } = require("fs");

const imageDirPath = "./assets/icons";

const files = readdirSync(imageDirPath);

files.forEach((file) => {
  if (file.endsWith(".svg" && !file.includes("-icon.svg"))) {
    const newFileName = file.replace(/\.svg$/, "-icon.svg");
    rename(
      imageDirPath + `/${file}`,
      imageDirPath + `/${newFileName}`,
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  }
});
