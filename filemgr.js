const fs = require("fs/promises")

async function ReadData() {
  try {
    const data = await fs.readFile('listdata.json', 'utf8');
    return data
  } catch (err) {
    console.error('Error reading file:', err);
  }
}
 
async function WriteData(dataOut) {
  try {
    console.log(dataOut)
    await fs.writeFile('listdata.json', dataOut, 'utf8');
    console.log('File written successfully');
  } catch (err) {
    console.error('Error writing to file:', err);
  }
}
 
exports.ReadData = ReadData;
exports.WriteData = WriteData;