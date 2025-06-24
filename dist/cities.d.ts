import { City } from '../types';
export declare function getAllRegencies(): Promise<City[]>;
export declare function getCityByCode(code: number): Promise<City>;
export declare function getCityByName(name: string): Promise<City>;
export declare function getRegenciesOfProvinceCode(provinceCode: number): Promise<City[]>;
export declare function getRegenciesOfProvinceName(provinceName: string): Promise<City[]>;
