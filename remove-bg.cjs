const Jimp = require('jimp');

async function processImage() {
  const imagePath = "C:\\Users\\krish\\.gemini\\antigravity\\brain\\520ab1a8-ca65-4e8b-aa8f-671d04d73413\\kp_unique_platinum_1775193793130.png";
  const outputPath = "public\\kp-favicon.png";
  
  const img = await Jimp.read(imagePath);
  
  img.resize(512, 512);
  
  img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    
    let luma = Math.max(r, g, b);
    let alpha = luma;
    if (luma < 25) {
        alpha = 0; 
    } else {
        alpha = Math.min(255, alpha * 2.5);
    }
    
    // We don't mess heavily with colors, just apply the alpha
    this.bitmap.data[idx + 3] = alpha;
  });

  await img.writeAsync(outputPath);
  console.log("Saved transparent favicon to", outputPath);
}

processImage().catch(console.error);
