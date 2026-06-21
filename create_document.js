import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Menangani __dirname di ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mengambil argumen dari terminal
const args = process.argv.slice(2);
const command = args[0];

// Handle quoted strings - if the original input had quotes, preserve spaces
const documentName = args.slice(1).join(' ');

if (!command || !documentName) {
  console.error("Gunakan format:");
  console.error("  npm run create brief [nama brief]");
  console.error("  npm run create task [nama task]");
  console.error("  npm run create both [nama dokumen]");
  console.error("  npm run create api [nama api contract]");
  console.error("  npm run create fixing [nama fixing]");
  process.exit(1);
}

// Format Tanggal dan Waktu
const now = new Date();
const date = String(now.getDate()).padStart(2, '0');
const monthNames = ["januari", "februari", "maret", "april", "mei", "juni", 
                    "juli", "agustus", "september", "oktober", "november", "desember"];
const monthName = monthNames[now.getMonth()];
const monthNum = String(now.getMonth() + 1).padStart(2, '0');
const year = now.getFullYear();
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');

// Fungsi untuk membuat file
function createFile(type, name) {
  const folderName = `${date} ${monthName} ${year}`;
  const fileName = `${type}_${year}${monthNum}${date}_${hours}${minutes}_${name.toLowerCase().replace(/\s+/g, '_')}.md`;
  const dirPath = path.join(__dirname, 'documentation', type, folderName);
  const filePath = path.join(dirPath, fileName);

  try {
    // 1. Buat folder secara rekursif
    fs.mkdirSync(dirPath, { recursive: true });

    // 2. Isi konten default file
    let title, content;
    if (type === 'api') {
      title = 'API Contract';
      content = `# API Contract: ${name}\nTanggal: ${date} ${monthName} ${year} ${hours}:${minutes}\n\n## Endpoint\n\n## Request\n\n## Response\n\n## Example\n\n---`;
    } else if (type === 'fixing') {
      title = 'Fix';
      content = `# Fix Documentation: ${name}\nTanggal: ${date} ${monthName} ${year} ${hours}:${minutes}\n\n## Problem Description:\n\n## Root Cause Analysis:\n\n## Solution Applied:\n\n### Files Modified:\n\n### Changes Made:\n\n## Key Fixes:\n\n## Impact Assessment:\n\n## Testing Checklist:\n\n## Affected Components:\n\n## Lessons Learned:\n\n---`;
    } else {
      title = type === 'brief' ? 'Brief' : 'Task';
      content = `# ${title}: ${name}\nTanggal: ${date} ${monthName} ${year} ${hours}:${minutes}\n\n---`;
    }

    // 3. Tulis file
    fs.writeFileSync(filePath, content);
    
    const displayType = type === 'api' ? 'API Contract' : (type === 'brief' ? 'Brief' : (type === 'fixing' ? 'Fix' : 'Task'));
    console.log(`\n${displayType} berhasil dibuat!`);
    console.log(`Path: documentation/${type}/${folderName}/${fileName}\n`);
    
    return true;
  } catch (err) {
    console.error(`Gagal membuat ${type}:`, err);
    return false;
  }
}

// Eksekusi berdasarkan command
switch (command) {
  case 'brief':
    createFile('brief', documentName);
    break;
  case 'task':
    createFile('task', documentName);
    break;
  case 'api':
    createFile('api', documentName);
    break;
  case 'fixing':
    createFile('fixing', documentName);
    break;
  case 'both':
    console.log('Membuat Brief dan Task...\n');
    const briefSuccess = createFile('brief', documentName);
    const taskSuccess = createFile('task', documentName);
    
    if (briefSuccess && taskSuccess) {
      console.log('Semua dokumen berhasil dibuat!');
    }
    break;
  default:
    console.error("Command tidak valid. Gunakan 'brief', 'task', 'api', 'fixing', atau 'both'");
    process.exit(1);
}
