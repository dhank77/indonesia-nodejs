import csv from 'csvtojson';
import * as fs from 'fs';
import * as path from 'path';

const files = [
    { csvFile: 'data/csv/provinces.csv', jsonFile: 'data/json/provinces.json' },
    { csvFile: 'data/csv/cities.csv', jsonFile: 'data/json/cities.json' },
    { csvFile: 'data/csv/districts.csv', jsonFile: 'data/json/districts.json' },
    { csvFile: 'data/csv/villages.csv', jsonFile: 'data/json/villages.json' },
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