export interface Province {
    code: string;
    name: string;
}

export interface City {
    code: string;
    province_code: string;
    name: string;
}

export interface District {
    code: string;
    city_code: string;
    name: string;
}

export interface Village {
    code: string;
    district_code: string;
    name: string;
}

export function getAllProvinces(): Promise<Province[]>;
export function getProvinceById(code: string): Promise<Province>;
export function getProvinceByName(name: string): Promise<Province>;

export function getAllRegencies(): Promise<City[]>;
export function getCityById(code: string): Promise<City>;
export function getCityByName(name: string): Promise<City>;
export function getRegenciesOfProvinceCode(provinceCode: string): Promise<City[]>;
export function getRegenciesOfProvinceName(provinceName: string): Promise<City[]>;

export function getAllDistricts(): Promise<District[]>;
export function getDistrictById(code: string): Promise<District>;
export function getDistrictByName(name: string): Promise<District>;
export function getDistrictsOfCityCode(cityCode: string): Promise<District[]>;
export function getDistrictsOfCityName(cityName: string): Promise<District[]>;

export function getAllVillages(): Promise<Village[]>;
export function getVillageById(code: string): Promise<Village>;
export function getVillageByName(name: string): Promise<Village>;
export function getVillagesOfDistrictCode(districtCode: string): Promise<Village[]>;
export function getVillagesOfDistrictName(districtName: string): Promise<Village[]>;
