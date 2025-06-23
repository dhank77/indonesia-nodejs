import provinces from '../data/json/provinces.json';
import { Province } from './types';

export async function getAllProvinces(): Promise<Province[]> {
    return provinces as Province[];
}

export async function getProvinceById(code: string): Promise<Province> {
    const province = provinces.find((item: any) => item.code === code);
    if (!province) {
        throw new Error(`Province with code ${code} not found`);
    }
    return province as Province;
}

export async function getProvinceByName(name: string): Promise<Province> {
    const province = provinces.find((item: any) => item.name.toLowerCase().includes(name.toLowerCase()));
    if (!province) {
        throw new Error(`Province with name ${name} not found`);
    }
    return province as Province;
}