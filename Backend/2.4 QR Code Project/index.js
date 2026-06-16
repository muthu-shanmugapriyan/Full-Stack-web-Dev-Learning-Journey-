import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));

    fs.writeFile("url.txt", url, (err) => {
      if (err) throw err;
      console.log("URL is saved ");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });
