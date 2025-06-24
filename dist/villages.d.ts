import { Village } from '../types';
export declare function getAllVillages(): Promise<Village[]>;
export declare function getVillageByCode(code: number): Promise<Village>;
export declare function getVillageByName(name: string): Promise<Village>;
export declare function getVillagesOfDistrictCode(districtCode: number): Promise<Village[]>;
export declare function getVillagesOfDistrictName(districtName: string): Promise<Village[]>;
