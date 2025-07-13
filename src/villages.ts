import villagesData from '../data/json/villages.json';
import districtsData from '../data/json/districts.json';
import { Village } from '../types';

const villages = villagesData as any[];
const districts = districtsData as any[];

export async function getAllVillages(): Promise<Village[]> {
    return villages.map((item: any) => ({
        code: parseInt(item.code),
        district_code: parseInt(item.district_code),
        name: item.name,
        postal_code: parseInt(item.postal_code)
    }));
}

export async function getVillageByCode(code: number): Promise<Village> {
    const village = villages.find((item: any) => parseInt(item.code) === code);
    if (!village) {
        throw new Error(`Village with code ${code} not found`);
    }
    return {
        code: parseInt(village.code),
        district_code: parseInt(village.district_code),
        name: village.name,
        postal_code: parseInt(village.postal_code)
    };
}

export async function getVillageByName(name: string): Promise<Village> {
    const village = villages.find((item: any) => item.name.toLowerCase().includes(name.toLowerCase()));
    if (!village) {
        throw new Error(`Village with name ${name} not found`);
    }
    return {
        code: parseInt(village.code),
        district_code: parseInt(village.district_code),
        name: village.name,
        postal_code: parseInt(village.postal_code)
    };
}

export async function getVillagesOfDistrictCode(districtCode: number): Promise<Village[]> {
    return villages.filter((item: any) => parseInt(item.district_code) === districtCode).map((item: any) => ({
        code: parseInt(item.code),
        district_code: parseInt(item.district_code),
        name: item.name,
        postal_code: parseInt(item.postal_code)
    }));
}

export async function getVillagesOfDistrictName(districtName: string): Promise<Village[]> {
    const district = districts.find((item: any) => item.name.toLowerCase().includes(districtName.toLowerCase()));
    if (!district) {
        throw new Error(`District with name ${districtName} not found`);
    }
    return villages.filter((item: any) => parseInt(item.district_code) === parseInt((district as any).code)).map((item: any) => ({
        code: parseInt(item.code),
        district_code: parseInt(item.district_code),
        name: item.name,
        postal_code: parseInt(item.postal_code)
    }));
}