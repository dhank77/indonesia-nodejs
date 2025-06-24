import { District } from '../types';
export declare function getAllDistricts(): Promise<District[]>;
export declare function getDistrictByCode(code: number): Promise<District>;
export declare function getDistrictByName(name: string): Promise<District>;
export declare function getDistrictsOfCityCode(cityCode: number): Promise<District[]>;
export declare function getDistrictsOfCityName(cityName: string): Promise<District[]>;
