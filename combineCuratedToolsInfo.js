// combineJson.js
const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'curated-tools');
const outputFilePath = path.join(__dirname, 'src', 'curatedToolsData.json');

try {
    const tools = fs.readdirSync(docsDir);
    const allProperties = [];

    tools.forEach(tool => {
        const propertiesPath = path.join(docsDir, tool, 'properties.json');
        if (fs.existsSync(propertiesPath)) {
            const properties = JSON.parse(fs.readFileSync(propertiesPath, 'utf8'));
            allProperties.push({ ...properties, tool });
        }
    });

    fs.writeFileSync(outputFilePath, JSON.stringify(allProperties, null, 2));
    console.log('Combined JSON data created successfully.');
} catch (error) {
    console.error('Error combining JSON files:', error);
}

const combinedJson = require(path.join(__dirname, 'src', 'curatedToolsData.json')); // Adjust the path as needed

const generateSidebarObject = (combinedData) => {
    const sidebar = {};

    combinedData.forEach(tool => {
        const categoryName = tool.category; // Assuming each tool has a category
        if (!sidebar[categoryName]) {
            sidebar[categoryName] = [];
        }
        sidebar[categoryName].push(`${tool.id}/index`);
    });

    return { someSidebar: sidebar };
};

const sidebars = generateSidebarObject(combinedJson);

fs.writeFileSync(
    path.join(__dirname, 'curatedToolsSidebar.js'),
    `module.exports = ${JSON.stringify(sidebars, null, 2)};`
);
