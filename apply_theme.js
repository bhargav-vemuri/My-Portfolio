const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'client', 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  const filePath = path.join(componentsDir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/cyan-400/g, 'terra');
  content = content.replace(/emerald-400/g, 'sage');
  content = content.replace(/blue-400/g, 'slate-blue');
  content = content.replace(/blue-500/g, 'slate-blue');
  
  content = content.replace(/text-white/g, 'text-cream');
  content = content.replace(/border-white/g, 'border-cream');
  content = content.replace(/bg-white/g, 'bg-cream');
  
  content = content.replace(/text-slate-300/g, 'text-cream/80');
  
  // Replace drop shadow RGBs
  // cyan-400 rgba(6,182,212,0.8) -> terra rgba(217,125,85,0.8)
  content = content.replace(/rgba\(6,182,212/g, 'rgba(217,125,85');
  // emerald-400 rgba(52,211,153,0.8) -> sage rgba(184,196,169,0.8)
  content = content.replace(/rgba\(52,211,153/g, 'rgba(184,196,169');

  fs.writeFileSync(filePath, content);
});

console.log('Successfully applied Palette 4 across all components.');
