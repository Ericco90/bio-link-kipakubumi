import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.resolve('./src/assets');
const folders = [
  'privat keilmuan',
  'privat paket keilmuan',
  'privat paket padepokan',
  'privat spiritual siap praktek'
];

async function processImages() {
  for (const folder of folders) {
    const folderPath = path.join(assetsDir, folder);
    if (!fs.existsSync(folderPath)) continue;

    const files = fs.readdirSync(folderPath);
    let count = 0;
    
    for (const file of files) {
      if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.png')) {
        const filePath = path.join(folderPath, file);
        const tempPath = path.join(folderPath, `temp_${file}`);
        
        try {
          // Rename original file to a temp name
          fs.renameSync(filePath, tempPath);
          
          // Process temp file and save back to original filename
          await sharp(tempPath)
            .resize({ width: 1080, withoutEnlargement: true }) // max width 1080px
            .jpeg({ quality: 80, progressive: true }) // compress jpeg to 80%
            .toFile(filePath);
            
          // If successful, delete the temp file
          fs.unlinkSync(tempPath);
          count++;
        } catch (err) {
          console.error(`Error processing ${file}:`, err);
          // Try to recover original file
          if (fs.existsSync(tempPath) && !fs.existsSync(filePath)) {
            fs.renameSync(tempPath, filePath);
          }
        }
      }
    }
    console.log(`Processed ${count} images in ${folder}`);
  }
  console.log("All images processed successfully!");
}

processImages();
