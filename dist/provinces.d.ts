import { Province } from '../types';
export declare function getAllProvinces(): Promise<Province[]>;
export declare function getProvinceByCode(code: number): Promise<Province>;
export declare function getProvinceByName(name: string): Promise<Province>;
