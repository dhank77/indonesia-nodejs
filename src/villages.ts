import villagesData from '../data/json/villages.json';
import districtsData from '../data/json/districts.json';
import { Village } from './types';

const villages = villagesData as any[];
const districts = districtsData as any[];

export async function getAllVillages(): Promise<Village[]> {
    return villages as Village[];
}

export async function getVillageById(code: string): Promise<Village> {
    const village = villages.find((item: any) => item.code === code);
    if (!village) {
        throw new Error(`Village with code ${code} not found`);
    }
    return village as Village;
}

export async function getVillageByName(name: string): Promise<Village> {
    const village = villages.find((item: any) => item.name.toLowerCase().includes(name.toLowerCase()));
    if (!village) {
        throw new Error(`Village with name ${name} not found`);
    }
    return village as Village;
}

export async function getVillagesOfDistrictCode(districtCode: string): Promise<Village[]> {
    return villages.filter((item: any) => item.district_code === districtCode) as Village[];
}

export async function getVillagesOfDistrictName(districtName: string): Promise<Village[]> {
    const district = districts.find((item: any) => item.name.toLowerCase().includes(districtName.toLowerCase()));
    if (!district) {
        throw new Error(`District with name ${districtName} not found`);
    }
    return villages.filter((item: any) => item.district_code === (district as any).code) as Village[];
}