const {
  // Province functions
  getAllProvinces,
  getProvinceByCode,
  getProvinceByName,
  
  // City/Regency functions
  getAllRegencies,
  getCityByCode,
  getCityByName,
  getRegenciesOfProvinceCode,
  getRegenciesOfProvinceName,
  
  // District functions
  getAllDistricts,
  getDistrictByCode,
  getDistrictByName,
  getDistrictsOfCityCode,
  getDistrictsOfCityName,
  
  // Village functions
  getAllVillages,
  getVillageByCode,
  getVillageByName,
  getVillagesOfDistrictCode,
  getVillagesOfDistrictName
} = require('../dist/index.js');

// ===== TEST CONFIGURATION =====
const TEST_CONFIG = {
  SAMPLE_PROVINCE_CODE: 11,
  SAMPLE_CITY_CODE: 1101,
  SAMPLE_DISTRICT_CODE: 110101,
  SAMPLE_VILLAGE_CODE: 1101012001,
  SAMPLE_PROVINCE_NAME: 'Jakarta',
  SAMPLE_CITY_NAME: 'Jakarta Pusat',
  SAMPLE_DISTRICT_NAME: 'Bakongan',
  SAMPLE_VILLAGE_NAME: 'Keude Bakongan'
};

// ===== LOGGING UTILITIES =====
const LogLevel = {
  INFO: 0,
  SUCCESS: 1,
  WARNING: 2,
  ERROR: 3
};

function log(level, message) {
  const prefixes = ['ℹ️', '✅', '⚠️', '❌'];
  const colors = ['\x1b[36m', '\x1b[32m', '\x1b[33m', '\x1b[31m'];
  const reset = '\x1b[0m';
  console.log(`${colors[level]}${prefixes[level]} ${message}${reset}`);
}

// ===== VALIDATION UTILITIES =====
function validateProvince(province) {
  return province && 
         typeof province.code === 'number' && 
         typeof province.name === 'string';
}

function validateCity(city) {
  return city && 
         typeof city.code === 'number' && 
         typeof city.province_code === 'number' &&
         typeof city.name === 'string';
}

function validateDistrict(district) {
  return district && 
         typeof district.code === 'number' && 
         typeof district.city_code === 'number' &&
         typeof district.name === 'string';
}

function validateVillage(village) {
  return village && 
         typeof village.code === 'number' && 
         typeof village.district_code === 'number' &&
         typeof village.name === 'string';
}

// ===== TEST STATISTICS =====
const testStats = {
  passed: 0,
  failed: 0,
  skipped: 0,
  totalTime: 0
};

// ===== MODULE EXPORT TESTS =====
function testModuleExports() {
  log(LogLevel.INFO, 'TESTING MODULE EXPORTS');
  console.log('━'.repeat(50));
  
  const expectedExports = [
    'getAllProvinces', 'getProvinceByCode', 'getProvinceByName',
    'getAllRegencies', 'getCityByCode', 'getCityByName', 'getRegenciesOfProvinceCode', 'getRegenciesOfProvinceName',
    'getAllDistricts', 'getDistrictByCode', 'getDistrictByName', 'getDistrictsOfCityCode', 'getDistrictsOfCityName',
    'getAllVillages', 'getVillageByCode', 'getVillageByName', 'getVillagesOfDistrictCode', 'getVillagesOfDistrictName'
  ];
  
  const moduleExports = require('../dist/index.js');
  
  expectedExports.forEach(exportName => {
    if (typeof moduleExports[exportName] === 'function') {
      log(LogLevel.SUCCESS, `Export '${exportName}' is available and is a function`);
      testStats.passed++;
    } else {
      log(LogLevel.ERROR, `Export '${exportName}' is missing or not a function`);
      testStats.failed++;
    }
  });
  
  console.log('');
}

// ===== INDIVIDUAL TEST FUNCTIONS =====
async function testFunction(testName, testFn, validator) {
  try {
    const startTime = Date.now();
    const result = await testFn();
    const endTime = Date.now();
    
    if (validator && !validator(result)) {
      log(LogLevel.WARNING, `${testName} - Data validation failed`);
      testStats.skipped++;
      return null;
    }
    
    log(LogLevel.SUCCESS, `${testName} (${endTime - startTime}ms)`);
    testStats.passed++;
    return result;
  } catch (error) {
    log(LogLevel.ERROR, `${testName} - ${error.message}`);
    testStats.failed++;
    return null;
  }
}

// ===== MAIN TEST SUITE =====
async function runTests() {
  const overallStartTime = Date.now();
  
  console.log('\n🚀 ===== TESTING COMPILED INDEX.JS MODULE =====\n');
  
  // Memory monitoring
  const memBefore = process.memoryUsage();
  
  try {
    // Test module exports first
    testModuleExports();
    
    // ===== PROVINCE TESTS =====
    log(LogLevel.INFO, 'TESTING PROVINCE FUNCTIONS');
    console.log('━'.repeat(50));
    
    const provinces = await testFunction(
      'getAllProvinces() from compiled module',
      () => getAllProvinces(),
      (result) => Array.isArray(result) && result.length > 0 && validateProvince(result[0])
    );
    
    if (provinces && provinces.length > 0) {
      console.log(`   📊 Total provinces: ${provinces.length}`);
      console.log(`   🏛️  First province: ${provinces[0].name} (${provinces[0].code})`);
      
      await testFunction(
        `getProvinceByCode(${TEST_CONFIG.SAMPLE_PROVINCE_CODE}) from compiled module`,
        () => getProvinceByCode(TEST_CONFIG.SAMPLE_PROVINCE_CODE),
        validateProvince
      );
      
      await testFunction(
        `getProvinceByName('${TEST_CONFIG.SAMPLE_PROVINCE_NAME}') from compiled module`,
        () => getProvinceByName(TEST_CONFIG.SAMPLE_PROVINCE_NAME),
        validateProvince
      );
    }
    
    console.log('');
    
    // ===== CITY/REGENCY TESTS =====
    log(LogLevel.INFO, 'TESTING CITY/REGENCY FUNCTIONS');
    console.log('━'.repeat(50));
    
    const regencies = await testFunction(
      'getAllRegencies() from compiled module',
      () => getAllRegencies(),
      (result) => Array.isArray(result) && result.length > 0 && validateCity(result[0])
    );
    
    if (regencies && regencies.length > 0) {
      console.log(`   📊 Total regencies: ${regencies.length}`);
      console.log(`   🏙️  First regency: ${regencies[0].name} (${regencies[0].code})`);
      
      await testFunction(
        `getCityByCode(${TEST_CONFIG.SAMPLE_CITY_CODE}) from compiled module`,
        () => getCityByCode(TEST_CONFIG.SAMPLE_CITY_CODE),
        validateCity
      );
      
      await testFunction(
        `getCityByName('${TEST_CONFIG.SAMPLE_CITY_NAME}') from compiled module`,
        () => getCityByName(TEST_CONFIG.SAMPLE_CITY_NAME),
        validateCity
      );
      
      const regenciesOfProvince = await testFunction(
        `getRegenciesOfProvinceCode(${TEST_CONFIG.SAMPLE_PROVINCE_CODE}) from compiled module`,
        () => getRegenciesOfProvinceCode(TEST_CONFIG.SAMPLE_PROVINCE_CODE),
        (result) => Array.isArray(result) && result.length > 0
      );
      
      if (regenciesOfProvince) {
        console.log(`   📍 Found ${regenciesOfProvince.length} cities in province`);
        console.log(`   🔍 Examples: ${regenciesOfProvince.slice(0, 3).map(r => r.name).join(', ')}`);
      }
      
      await testFunction(
        `getRegenciesOfProvinceName('${TEST_CONFIG.SAMPLE_PROVINCE_NAME}') from compiled module`,
        () => getRegenciesOfProvinceName(TEST_CONFIG.SAMPLE_PROVINCE_NAME),
        (result) => Array.isArray(result) && result.length > 0
      );
    }
    
    console.log('');
    
    // ===== DISTRICT TESTS =====
    log(LogLevel.INFO, 'TESTING DISTRICT FUNCTIONS');
    console.log('━'.repeat(50));
    
    const districts = await testFunction(
      'getAllDistricts() from compiled module',
      () => getAllDistricts(),
      (result) => Array.isArray(result) && result.length > 0 && validateDistrict(result[0])
    );
    
    if (districts && districts.length > 0) {
      console.log(`   📊 Total districts: ${districts.length}`);
      console.log(`   🏘️  First district: ${districts[0].name} (${districts[0].code})`);
      
      await testFunction(
        `getDistrictByCode(${TEST_CONFIG.SAMPLE_DISTRICT_CODE}) from compiled module`,
        () => getDistrictByCode(TEST_CONFIG.SAMPLE_DISTRICT_CODE),
        validateDistrict
      );
      
      await testFunction(
        `getDistrictByName('${TEST_CONFIG.SAMPLE_DISTRICT_NAME}') from compiled module`,
        () => getDistrictByName(TEST_CONFIG.SAMPLE_DISTRICT_NAME),
        validateDistrict
      );
      
      const districtsOfCity = await testFunction(
        `getDistrictsOfCityCode(${TEST_CONFIG.SAMPLE_CITY_CODE}) from compiled module`,
        () => getDistrictsOfCityCode(TEST_CONFIG.SAMPLE_CITY_CODE),
        (result) => Array.isArray(result) && result.length > 0
      );
      
      if (districtsOfCity) {
        console.log(`   📍 Found ${districtsOfCity.length} districts in city`);
        console.log(`   🔍 Examples: ${districtsOfCity.slice(0, 3).map(d => d.name).join(', ')}`);
      }
      
      await testFunction(
        `getDistrictsOfCityName('${TEST_CONFIG.SAMPLE_CITY_NAME}') from compiled module`,
        () => getDistrictsOfCityName(TEST_CONFIG.SAMPLE_CITY_NAME),
        (result) => Array.isArray(result) && result.length > 0
      );
    }
    
    console.log('');
    
    // ===== VILLAGE TESTS =====
    log(LogLevel.INFO, 'TESTING VILLAGE FUNCTIONS');
    console.log('━'.repeat(50));
    
    const villages = await testFunction(
      'getAllVillages() from compiled module',
      () => getAllVillages(),
      (result) => Array.isArray(result) && result.length > 0 && validateVillage(result[0])
    );
    
    if (villages && villages.length > 0) {
      console.log(`   📊 Total villages: ${villages.length}`);
      console.log(`   🏡 First village: ${villages[0].name} (${villages[0].code})`);
      
      await testFunction(
        `getVillageByCode(${TEST_CONFIG.SAMPLE_VILLAGE_CODE}) from compiled module`,
        () => getVillageByCode(TEST_CONFIG.SAMPLE_VILLAGE_CODE),
        validateVillage
      );
      
      await testFunction(
        `getVillageByName('${TEST_CONFIG.SAMPLE_VILLAGE_NAME}') from compiled module`,
        () => getVillageByName(TEST_CONFIG.SAMPLE_VILLAGE_NAME),
        validateVillage
      );
      
      const villagesOfDistrict = await testFunction(
        `getVillagesOfDistrictCode(${TEST_CONFIG.SAMPLE_DISTRICT_CODE}) from compiled module`,
        () => getVillagesOfDistrictCode(TEST_CONFIG.SAMPLE_DISTRICT_CODE),
        (result) => Array.isArray(result) && result.length > 0
      );
      
      if (villagesOfDistrict) {
        console.log(`   📍 Found ${villagesOfDistrict.length} villages in district`);
        console.log(`   🔍 Examples: ${villagesOfDistrict.slice(0, 3).map(v => v.name).join(', ')}`);
      }
      
      await testFunction(
        `getVillagesOfDistrictName('${TEST_CONFIG.SAMPLE_DISTRICT_NAME}') from compiled module`,
        () => getVillagesOfDistrictName(TEST_CONFIG.SAMPLE_DISTRICT_NAME),
        (result) => Array.isArray(result) && result.length > 0
      );
    }
    
  } catch (error) {
    log(LogLevel.ERROR, `Unexpected error: ${error.message}`);
    testStats.failed++;
  }
  
  // ===== FINAL REPORT =====
  const overallEndTime = Date.now();
  const memAfter = process.memoryUsage();
  testStats.totalTime = overallEndTime - overallStartTime;
  
  console.log('\n' + '═'.repeat(60));
  console.log('📋 COMPILED MODULE TEST SUMMARY');
  console.log('═'.repeat(60));
  console.log(`✅ Passed: ${testStats.passed}`);
  console.log(`❌ Failed: ${testStats.failed}`);
  console.log(`⚠️  Skipped: ${testStats.skipped}`);
  console.log(`⏱️  Total Time: ${testStats.totalTime}ms`);
  console.log(`💾 Memory Used: ${((memAfter.heapUsed - memBefore.heapUsed) / 1024 / 1024).toFixed(2)} MB`);
  
  const totalTests = testStats.passed + testStats.failed + testStats.skipped;
  const successRate = totalTests > 0 ? ((testStats.passed / totalTests) * 100).toFixed(1) : '0';
  console.log(`📊 Success Rate: ${successRate}%`);
  
  if (testStats.failed === 0) {
    log(LogLevel.SUCCESS, 'ALL COMPILED MODULE TESTS COMPLETED SUCCESSFULLY! 🎉');
  } else {
    log(LogLevel.WARNING, `Compiled module tests completed with ${testStats.failed} failures`);
  }
  
  console.log('═'.repeat(60) + '\n');
}

// ===== EXECUTION =====
if (require.main === module) {
  runTests().catch((error) => {
    log(LogLevel.ERROR, `Fatal error: ${error.message}`);
    process.exit(1);
  });
}

module.exports = {
  runTests,
  testStats,
  TEST_CONFIG
};