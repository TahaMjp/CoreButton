// moveButtons.js
const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "src", "Components", "Buttons", "Solid");

fs.readdirSync(baseDir).forEach((file) => {
  const filePath = path.join(baseDir, file);

  // Ignore folders and non-js files
  if (fs.lstatSync(filePath).isDirectory() || !file.endsWith(".js")) return;

  const match = file.match(/^([A-Za-z]+Primary)-md\.js$/);
  if (match) {
    const folderName = match[1];
    const targetDir = path.join(baseDir, folderName);

    // Make sure the target folder exists
    if (!fs.existsSync(targetDir)) {
      console.log(`⚠️  Folder not found: ${folderName}`);
      return;
    }

    const newFilePath = path.join(targetDir, file);

    // Move the file
    fs.renameSync(filePath, newFilePath);
    console.log(`✅ Moved ${file} → ${folderName}/`);
  }
});
