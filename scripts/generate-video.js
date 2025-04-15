const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');
const { exec } = require('child_process');

// Create videos directory if it doesn't exist
const videosDir = path.join(__dirname, '../public/videos');
if (!fs.existsSync(videosDir)) {
  fs.mkdirSync(videosDir, { recursive: true });
}

// Create a simple video using ffmpeg
// This will create a 5-second video with a gradient background
const command = `ffmpeg -f lavfi -i color=c=black:s=1920x1080 -vf "drawtext=fontfile=/System/Library/Fonts/Helvetica.ttc:text='OTR Project':fontcolor=white:fontsize=72:x=(w-text_w)/2:y=(h-text_h)/2" -t 5 -c:v libx264 -pix_fmt yuv420p ${path.join(videosDir, 'project-hero.mp4')}`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  console.log('Placeholder video created successfully!');
}); 