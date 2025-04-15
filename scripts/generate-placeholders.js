const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create directories if they don't exist
const projectDir = path.join(__dirname, '../public/images/project');
if (!fs.existsSync(projectDir)) {
  fs.mkdirSync(projectDir, { recursive: true });
}

// Function to create a placeholder image
function createPlaceholderImage(filename, text, bgColor = '#1a1a1a', textColor = '#00A3FF') {
  const width = 1200;
  const height = 800;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = textColor;
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Add subtitle
  ctx.font = '24px Arial';
  ctx.fillText('Image Coming Soon', width / 2, height / 2 + 60);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(projectDir, filename), buffer);
  console.log(`Created ${filename}`);
}

// Function to create a hero image with gradient
function createHeroImage() {
  const width = 1920;
  const height = 1080;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, '#000000');
  gradient.addColorStop(0.5, '#1a1a1a');
  gradient.addColorStop(1, '#000000');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add some visual elements
  for (let i = 0; i < 20; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const radius = Math.random() * 100 + 50;
    const alpha = Math.random() * 0.1 + 0.05;
    
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 163, 255, ${alpha})`;
    ctx.fill();
  }

  // Add text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 72px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('OTR Project', width / 2, height / 2);

  // Add subtitle
  ctx.font = '36px Arial';
  ctx.fillText('Formula SAE Electric Vehicle', width / 2, height / 2 + 80);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
  fs.writeFileSync(path.join(projectDir, 'hero-bg.jpg'), buffer);
  console.log('Created hero-bg.jpg');
}

// Create placeholder images
createHeroImage();
createPlaceholderImage('design.jpg', 'Design Phase', '#1a1a1a', '#00A3FF');
createPlaceholderImage('manufacturing.jpg', 'Manufacturing', '#1a1a1a', '#00A3FF');
createPlaceholderImage('testing.jpg', 'Testing & Validation', '#1a1a1a', '#00A3FF');
createPlaceholderImage('competition.jpg', 'Competition', '#1a1a1a', '#00A3FF');

console.log('All placeholder images created successfully!'); 