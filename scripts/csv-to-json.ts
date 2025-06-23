import csv from 'csvtojson';
import * as fs from 'fs';
import * as path from 'path';

const files = [
    { csvFile: 'data/provinces.csv', jsonFile: 'src/provinces.json' },
    { csvFile: 'data/cities.csv', jsonFile: 'src/cities.json' },
    { csvFile: 'data/districts.csv', jsonFile: 'src/districts.json' },
    { csvFile: 'data/villages.csv', jsonFile: 'src/villages.json' },
];

async function convertCSVtoJSON() {
    for (const file of files) {
        let jsonArray;
        
        if (file.csvFile.includes('provinces')) {
            jsonArray = await csv({
                noheader: true,
                headers: ['code', 'name']
            }).fromFile(path.resolve(file.csvFile));
        } else if (file.csvFile.includes('cities')) {
            jsonArray = await csv({
                noheader: true,
                headers: ['code', 'province_code', 'name']
            }).fromFile(path.resolve(file.csvFile));
        } else if (file.csvFile.includes('districts')) {
            jsonArray = await csv({
                noheader: true,
                headers: ['code', 'city_code', 'name']
            }).fromFile(path.resolve(file.csvFile));
        } else if (file.csvFile.includes('villages')) {
            jsonArray = await csv({
                noheader: true,
                headers: ['code', 'district_code', 'name']
            }).fromFile(path.resolve(file.csvFile));
        }
        
        fs.writeFileSync(path.resolve(file.jsonFile), JSON.stringify(jsonArray, null, 2));
        console.log(`Converted: ${file.csvFile} -> ${file.jsonFile}`);
    }
    console.log('All files converted successfully!');
}

convertCSVtoJSON();