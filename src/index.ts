export {
    getAllProvinces,
    getProvinceById,
    getProvinceByName
} from './provinces';

export {
    getAllRegencies,
    getCityById,
    getCityByName,
    getRegenciesOfProvinceCode,
    getRegenciesOfProvinceName
} from './cities';

export {
    getAllDistricts,
    getDistrictById,
    getDistrictByName,
    getDistrictsOfCityCode,
    getDistrictsOfCityName
} from './districts';

export {
    getAllVillages,
    getVillageById,
    getVillageByName,
    getVillagesOfDistrictCode,
    getVillagesOfDistrictName
} from './villages';

export type { Province, City, District, Village } from './types';