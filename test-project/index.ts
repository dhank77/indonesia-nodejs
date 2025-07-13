import {
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
  getVillagesOfDistrictName,
  
  // Type imports
  Province,
  City,
  District,
  Village
} from 'indonesia-nodejs';

// ===== CONFIGURATION =====
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
enum LogLevel {
  INFO = 0,
  SUCCESS = 1,
  WARNING = 2,
  ERROR = 3
}

function log(level: LogLevel, message: string): void {
  const prefixes = ['ℹ️', '✅', '⚠️', '❌'];
  const colors = ['\x1b[36m', '\x1b[32m', '\x1b[33m', '\x1b[31m'];
  const reset = '\x1b[0m';
  console.log(`${colors[level]}${prefixes[level]} ${message}${reset}`);
}

// ===== VALIDATION UTILITIES =====
function validateProvince(province: any): boolean {
  return province && 
         typeof province.code === 'number' && 
         typeof province.name === 'string';
}

function validateCity(city: any): boolean {
  return city && 
         typeof city.code === 'number' && 
         typeof city.province_code === 'number' &&
         typeof city.name === 'string';
}

function validateDistrict(district: any): boolean {
  return district && 
         typeof district.code === 'number' && 
         typeof district.city_code === 'number' &&
         typeof district.name === 'string';
}

function validateVillage(village: any): boolean {
  return village && 
         typeof village.code === 'number' && 
         typeof village.district_code === 'number' &&
         typeof village.name === 'string';
}

// ===== TEST STATISTICS =====
interface TestStats {
  passed: number;
  failed: number;
  skipped: number;
  totalTime: number;
}

const testStats: TestStats = {
  passed: 0,
  failed: 0,
  skipped: 0,
  totalTime: 0
};

// ===== INDIVIDUAL TEST FUNCTIONS =====
async function testFunction<T>(
  testName: string,
  testFunction: () => Promise<T>,
  validator?: (result: T) => boolean
): Promise<T | null> {
  try {
    const startTime = Date.now();
    const result = await testFunction();
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
    log(LogLevel.ERROR, `${testName} - ${(error as Error).message}`);
    testStats.failed++;
    return null;
  }
}

// ===== MAIN TEST SUITE =====
async function runTests(): Promise<void> {
  const overallStartTime = Date.now();
  
  console.log('\n🚀 ===== INDONESIA-NODEJS LIBRARY TEST SUITE =====\n');
  
  // Memory monitoring
  const memBefore = process.memoryUsage();
  
  try {
    // ===== PROVINCE TESTS =====
    log(LogLevel.INFO, 'TESTING PROVINCES');
    console.log('━'.repeat(50));
    
    const provinces = await testFunction(
      'Get all provinces',
      () => getAllProvinces(),
      (result: Province[]) => Array.isArray(result) && result.length > 0 && validateProvince(result[0])
    );
    
    if (provinces && provinces.length > 0) {
      console.log(`   📊 Total provinces: ${provinces.length}`);
      console.log(`   🏛️  First province: ${provinces[0].name} (${provinces[0].code})`);
      
      await testFunction(
        `Get province by ID ${TEST_CONFIG.SAMPLE_PROVINCE_CODE}`,
        () => getProvinceByCode(TEST_CONFIG.SAMPLE_PROVINCE_CODE),
        validateProvince
      );
      
      await testFunction(
        `Get province by name '${TEST_CONFIG.SAMPLE_PROVINCE_NAME}'`,
        () => getProvinceByName(TEST_CONFIG.SAMPLE_PROVINCE_NAME),
        validateProvince
      );
    }
    
    console.log('');
    
    // ===== CITY/REGENCY TESTS =====
    log(LogLevel.INFO, 'TESTING CITIES/REGENCIES');
    console.log('━'.repeat(50));
    
    const regencies = await testFunction(
      'Get all regencies',
      () => getAllRegencies(),
      (result: City[]) => Array.isArray(result) && result.length > 0 && validateCity(result[0])
    );
    
    if (regencies && regencies.length > 0) {
      console.log(`   📊 Total regencies: ${regencies.length}`);
      console.log(`   🏙️  First regency: ${regencies[0].name} (${regencies[0].code})`);
      
      await testFunction(
        `Get city by ID ${TEST_CONFIG.SAMPLE_CITY_CODE}`,
        () => getCityByCode(TEST_CONFIG.SAMPLE_CITY_CODE),
        validateCity
      );
      
      await testFunction(
        `Get city by name '${TEST_CONFIG.SAMPLE_CITY_NAME}'`,
        () => getCityByName(TEST_CONFIG.SAMPLE_CITY_NAME),
        validateCity
      );
      
      const regenciesOfProvince = await testFunction(
        `Get regencies of province ${TEST_CONFIG.SAMPLE_PROVINCE_CODE}`,
        () => getRegenciesOfProvinceCode(TEST_CONFIG.SAMPLE_PROVINCE_CODE),
        (result: City[]) => Array.isArray(result) && result.length > 0
      );
      
      if (regenciesOfProvince) {
        console.log(`   📍 Found ${regenciesOfProvince.length} cities in province`);
        console.log(`   🔍 Examples: ${regenciesOfProvince.slice(0, 3).map(r => r.name).join(', ')}`);
      }
      
      await testFunction(
        `Get regencies by province name '${TEST_CONFIG.SAMPLE_PROVINCE_NAME}'`,
        () => getRegenciesOfProvinceName(TEST_CONFIG.SAMPLE_PROVINCE_NAME),
        (result: City[]) => Array.isArray(result) && result.length > 0
      );
    }
    
    console.log('');
    
    // ===== DISTRICT TESTS =====
    log(LogLevel.INFO, 'TESTING DISTRICTS');
    console.log('━'.repeat(50));
    
    const districts = await testFunction(
      'Get all districts',
      () => getAllDistricts(),
      (result: District[]) => Array.isArray(result) && result.length > 0 && validateDistrict(result[0])
    );
    
    if (districts && districts.length > 0) {
      console.log(`   📊 Total districts: ${districts.length}`);
      console.log(`   🏘️  First district: ${districts[0].name} (${districts[0].code})`);
      
      await testFunction(
        `Get district by ID ${TEST_CONFIG.SAMPLE_DISTRICT_CODE}`,
        () => getDistrictByCode(TEST_CONFIG.SAMPLE_DISTRICT_CODE),
        validateDistrict
      );
      
      await testFunction(
        `Get district by name '${TEST_CONFIG.SAMPLE_DISTRICT_NAME}'`,
        () => getDistrictByName(TEST_CONFIG.SAMPLE_DISTRICT_NAME),
        validateDistrict
      );
      
      const districtsOfCity = await testFunction(
        `Get districts of city ${TEST_CONFIG.SAMPLE_CITY_CODE}`,
        () => getDistrictsOfCityCode(TEST_CONFIG.SAMPLE_CITY_CODE),
        (result: District[]) => Array.isArray(result) && result.length > 0
      );
      
      if (districtsOfCity) {
        console.log(`   📍 Found ${districtsOfCity.length} districts in city`);
        console.log(`   🔍 Examples: ${districtsOfCity.slice(0, 3).map(d => d.name).join(', ')}`);
      }
      
      await testFunction(
        `Get districts by city name '${TEST_CONFIG.SAMPLE_CITY_NAME}'`,
        () => getDistrictsOfCityName(TEST_CONFIG.SAMPLE_CITY_NAME),
        (result: District[]) => Array.isArray(result) && result.length > 0
      );
    }
    
    console.log('');
    
    // ===== VILLAGE TESTS =====
    log(LogLevel.INFO, 'TESTING VILLAGES');
    console.log('━'.repeat(50));
    
    const villages = await testFunction(
      'Get all villages',
      () => getAllVillages(),
      (result: Village[]) => Array.isArray(result) && result.length > 0 && validateVillage(result[0])
    );
    
    if (villages && villages.length > 0) {
      console.log(`   📊 Total villages: ${villages.length}`);
      console.log(`   🏡 First village: ${villages[0].name} (${villages[0].code})`);
      
      await testFunction(
        `Get village by ID ${TEST_CONFIG.SAMPLE_VILLAGE_CODE}`,
        () => getVillageByCode(TEST_CONFIG.SAMPLE_VILLAGE_CODE),
        validateVillage
      );
      
      await testFunction(
        `Get village by name '${TEST_CONFIG.SAMPLE_VILLAGE_NAME}'`,
        () => getVillageByName(TEST_CONFIG.SAMPLE_VILLAGE_NAME),
        validateVillage
      );
      
      const villagesOfDistrict = await testFunction(
        `Get villages of district ${TEST_CONFIG.SAMPLE_DISTRICT_CODE}`,
        () => getVillagesOfDistrictCode(TEST_CONFIG.SAMPLE_DISTRICT_CODE),
        (result: Village[]) => Array.isArray(result) && result.length > 0
      );
      
      if (villagesOfDistrict) {
        console.log(`   📍 Found ${villagesOfDistrict.length} villages in district`);
        console.log(`   🔍 Examples: ${villagesOfDistrict.slice(0, 3).map(v => v.name).join(', ')}`);
      }
      
      await testFunction(
        `Get villages by district name '${TEST_CONFIG.SAMPLE_DISTRICT_NAME}'`,
        () => getVillagesOfDistrictName(TEST_CONFIG.SAMPLE_DISTRICT_NAME),
        (result: Village[]) => Array.isArray(result) && result.length > 0
      );
    }
    
  } catch (error) {
    log(LogLevel.ERROR, `Unexpected error: ${(error as Error).message}`);
    testStats.failed++;
  }
  
  // ===== FINAL REPORT =====
  const overallEndTime = Date.now();
  const memAfter = process.memoryUsage();
  testStats.totalTime = overallEndTime - overallStartTime;
  
  console.log('\n' + '═'.repeat(60));
  console.log('📋 TEST SUMMARY REPORT');
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
    log(LogLevel.SUCCESS, 'ALL TESTS COMPLETED SUCCESSFULLY! 🎉');
  } else {
    log(LogLevel.WARNING, `Tests completed with ${testStats.failed} failures`);
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
