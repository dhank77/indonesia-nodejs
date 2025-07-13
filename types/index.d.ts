export interface Province {
    code: number;
    name: string;
}

export interface City {
    code: number;
    province_code: number;
    name: string;
}

export interface District {
    code: number;
    city_code: number;
    name: string;
}

export interface Village {
    code: number;
    district_code: number;
    name: string;
    postal_code: number;
}

export function getAllProvinces(): Promise<Province[]>;
export function getProvinceByCode(code: number): Promise<Province>;
export function getProvinceByName(name: string): Promise<Province>;

export function getAllRegencies(): Promise<City[]>;
export function getCityByCode(code: number): Promise<City>;
export function getCityByName(name: string): Promise<City>;
export function getRegenciesOfProvinceCode(provinceCode: number): Promise<City[]>;
export function getRegenciesOfProvinceName(provinceName: string): Promise<City[]>;

export function getAllDistricts(): Promise<District[]>;
export function getDistrictByCode(code: number): Promise<District>;
export function getDistrictByName(name: string): Promise<District>;
export function getDistrictsOfCityCode(cityCode: number): Promise<District[]>;
export function getDistrictsOfCityName(cityName: string): Promise<District[]>;

export function getAllVillages(): Promise<Village[]>;
export function getVillageByCode(code: number): Promise<Village>;
export function getVillageByName(name: string): Promise<Village>;
export function getVillagesOfDistrictCode(districtCode: number): Promise<Village[]>;
export function getVillagesOfDistrictName(districtName: string): Promise<Village[]>;
