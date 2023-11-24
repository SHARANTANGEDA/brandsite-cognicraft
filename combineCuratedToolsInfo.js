// combineJson.js
const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'curated-tools');
const outputFilePath = path.join(__dirname, 'src', 'curatedToolsData.json');

try {
    const categories = fs.readdirSync(docsDir);
    const allProperties = [];

    categories.forEach(category => {
        const propertiesPath = path.join(docsDir, category, 'properties.json');
        if (fs.existsSync(propertiesPath)) {
            const properties = JSON.parse(fs.readFileSync(propertiesPath, 'utf8'));
            allProperties.push({ ...properties, category });
        }
    });

    fs.writeFileSync(outputFilePath, JSON.stringify(allProperties, null, 2));
    console.log('Combined JSON data created successfully.');
} catch (error) {
    console.error('Error combining JSON files:', error);
}
