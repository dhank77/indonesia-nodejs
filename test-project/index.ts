import {
  // Province functions
  getAllProvinces,
  getProvinceById,
  getProvinceByName,
  
  // City/Regency functions
  getAllRegencies,
  getCityById,
  getCityByName,
  getRegenciesOfProvinceCode,
  getRegenciesOfProvinceName,
  
  // District functions
  getAllDistricts,
  getDistrictById,
  getDistrictByName,
  getDistrictsOfCityCode,
  getDistrictsOfCityName,
  
  // Village functions
  getAllVillages,
  getVillageById,
  getVillageByName,
  getVillagesOfDistrictCode,
  getVillagesOfDistrictName
} from 'indonesia-nodejs';

async function runTests() {
  console.log('=== TESTING INDONESIA-NODEJS LIBRARY ===\n');
  
  try {
    // ===== PROVINCE TESTS =====
    console.log('📍 TESTING PROVINCES:');
    
    // Get all provinces
    const provinces = await getAllProvinces();
    console.log(`✅ Total provinces: ${provinces.length}`);
    console.log(`   First province: ${provinces[0].name} (${provinces[0].code})`);
    
    // Get province by ID
    const provinceById = await getProvinceById(11);
    console.log(`✅ Province by ID 11: ${provinceById.name}`);
    
    // Get province by name
    const provinceByName = await getProvinceByName('Jakarta');
    console.log(`✅ Province by name 'Jakarta': ${provinceByName.name} (${provinceByName.code})`);
    
    console.log('');
    
    // ===== CITY/REGENCY TESTS =====
    console.log('🏙️ TESTING CITIES/REGENCIES:');
    
    // Get all regencies
    const regencies = await getAllRegencies();
    console.log(`✅ Total regencies: ${regencies.length}`);
    console.log(`   First regency: ${regencies[0].name} (${regencies[0].code})`);
    
    // Get city by ID
    const cityById = await getCityById(1101);
    console.log(`✅ City by ID 1101: ${cityById.name}`);
    
    // Get city by name
    const cityByName = await getCityByName('Jakarta Selatan');
    console.log(`✅ City by name 'Jakarta Selatan': ${cityByName.name} (${cityByName.code})`);
    
    // Get regencies of province code
    const regenciesOfProvince = await getRegenciesOfProvinceCode(11);
    console.log(`✅ Regencies in province 11: ${regenciesOfProvince.length} cities`);
    console.log(`   Examples: ${regenciesOfProvince.slice(0, 3).map(r => r.name).join(', ')}`);
    
    // Get regencies of province name
    const regenciesOfProvinceName = await getRegenciesOfProvinceName('DKI Jakarta');
    console.log(`✅ Regencies in 'DKI Jakarta': ${regenciesOfProvinceName.length} cities`);
    
    console.log('');
    
    // ===== DISTRICT TESTS =====
    console.log('🏘️ TESTING DISTRICTS:');
    
    // Get all districts
    const districts = await getAllDistricts();
    console.log(`✅ Total districts: ${districts.length}`);
    console.log(`   First district: ${districts[0].name} (${districts[0].code})`);
    
    // Get district by ID
    const districtById = await getDistrictById(110101);
    console.log(`✅ District by ID 110101: ${districtById.name}`);
    
    // Get district by name
    const districtByName = await getDistrictByName('Gambir');
    console.log(`✅ District by name 'Gambir': ${districtByName.name} (${districtByName.code})`);
    
    // Get districts of city code
    const districtsOfCity = await getDistrictsOfCityCode(1101);
    console.log(`✅ Districts in city 1101: ${districtsOfCity.length} districts`);
    console.log(`   Examples: ${districtsOfCity.slice(0, 3).map(d => d.name).join(', ')}`);
    
    // Get districts of city name
    const districtsOfCityName = await getDistrictsOfCityName('Jakarta Pusat');
    console.log(`✅ Districts in 'Jakarta Pusat': ${districtsOfCityName.length} districts`);
    
    console.log('');
    
    // ===== VILLAGE TESTS =====
    console.log('🏡 TESTING VILLAGES:');
    
    // Get all villages
    const villages = await getAllVillages();
    console.log(`✅ Total villages: ${villages.length}`);
    console.log(`   First village: ${villages[0].name} (${villages[0].code})`);
    
    // Get village by ID
    const villageById = await getVillageById(1101012001);
    console.log(`✅ Village by ID 1101012001: ${villageById.name}`);
    
    // Get village by name
    const villageByName = await getVillageByName('Gambir');
    console.log(`✅ Village by name 'Gambir': ${villageByName.name} (${villageByName.code})`);
    
    // Get villages of district code
    const villagesOfDistrict = await getVillagesOfDistrictCode(110101);
    console.log(`✅ Villages in district 110101: ${villagesOfDistrict.length} villages`);
    console.log(`   Examples: ${villagesOfDistrict.slice(0, 3).map(v => v.name).join(', ')}`);
    
    // Get villages of district name
    const villagesOfDistrictName = await getVillagesOfDistrictName('Gambir');
    console.log(`✅ Villages in district 'Gambir': ${villagesOfDistrictName.length} villages`);
    
    console.log('');
    console.log('🎉 ALL TESTS COMPLETED SUCCESSFULLY!');
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

// Run the tests
runTests();
