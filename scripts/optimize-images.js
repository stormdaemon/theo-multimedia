const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

// Get all PNG files in public directory
const pngFiles = fs.readdirSync(publicDir).filter(file => file.endsWith('.png'));

console.log(`Found ${pngFiles.length} PNG files to optimize...\n`);

async function optimizeImage(filename) {
  const inputPath = path.join(publicDir, filename);
  const outputFilename = filename.replace('.png', '.webp');
  const outputPath = path.join(publicDir, outputFilename);

  // Get original file size
  const originalStats = fs.statSync(inputPath);
  const originalSize = originalStats.size;

  try {
    // Convert to WebP with quality 85 (good balance)
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);

    // Get new file size
    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    console.log(`✓ ${filename} → ${outputFilename}`);
    console.log(`  ${(originalSize / 1024).toFixed(0)} KB → ${(newSize / 1024).toFixed(0)} KB (${reduction}% smaller)\n`);

    return { filename, originalSize, newSize, reduction };
  } catch (error) {
    console.error(`✗ Error optimizing ${filename}:`, error.message);
    return null;
  }
}

// Optimize all images
(async () => {
  const results = [];

  for (const file of pngFiles) {
    const result = await optimizeImage(file);
    if (result) results.push(result);
  }

  // Print summary
  const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
  const totalNew = results.reduce((sum, r) => sum + r.newSize, 0);
  const totalReduction = ((totalOriginal - totalNew) / totalOriginal * 100).toFixed(1);

  console.log('==========================================');
  console.log('SUMMARY:');
  console.log(`Total original size: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total new size: ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total reduction: ${totalReduction}%`);
  console.log(`Space saved: ${((totalOriginal - totalNew) / 1024 / 1024).toFixed(2)} MB`);
  console.log('==========================================');
})();
