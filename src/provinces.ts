import provinces from '../data/json/provinces.json';
import { Province } from '../types';

export async function getAllProvinces(): Promise<Province[]> {
    return provinces.map((item: any) => ({
        code: parseInt(item.code),
        name: item.name
    }));
}

export async function getProvinceById(code: number): Promise<Province> {
    const province = provinces.find((item: any) => parseInt(item.code) === code);
    if (!province) {
        throw new Error(`Province with code ${code} not found`);
    }
    return {
        code: parseInt(province.code),
        name: province.name
    };
}

export async function getProvinceByName(name: string): Promise<Province> {
    const province = provinces.find((item: any) => item.name.toLowerCase().includes(name.toLowerCase()));
    if (!province) {
        throw new Error(`Province with name ${name} not found`);
    }
    return {
        code: parseInt(province.code),
        name: province.name
    };
}