const fs = require("fs/promises")
const http = new coreHTTP;

async function ReadData() {
  try {
    const data = await fs.readFile('listdata.json', 'utf8');
    console.log('File content:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}
 
async function WriteData(dataOut) {
  try {
    await fs.writeFile(filePath, dataOut, 'utf8');
    console.log('File written successfully');
  } catch (err) {
    console.error('Error writing to file:', err);
  }
}
 
exports.ReadData = ReadData;
exports.WriteData = WriteData;