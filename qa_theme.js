const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'client', 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  const filePath = path.join(componentsDir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace cool slate colors with warm cream opacities
  content = content.replace(/text-slate-400/g, 'text-cream/60');
  content = content.replace(/text-slate-500/g, 'text-cream/40');
  
  // Replace pure white shadows with cream shadows
  content = content.replace(/rgba\(255,255,255,/g, 'rgba(244,233,215,');
  
  // Replace pure black shadows/backgrounds with dark espresso (23,21,20)
  content = content.replace(/rgba\(0,0,0,/g, 'rgba(23,21,20,');
  content = content.replace(/bg-black/g, 'bg-background');
  content = content.replace(/text-black/g, 'text-background');
  
  fs.writeFileSync(filePath, content);
});

console.log('Successfully completed final QA color sweep.');
