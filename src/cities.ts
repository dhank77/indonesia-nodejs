import cities from '../data/json/cities.json';
import provinces from '../data/json/provinces.json';
import { City } from './types';

export async function getAllRegencies(): Promise<City[]> {
    return cities as City[];
}

export async function getCityById(code: string): Promise<City> {
    const city = cities.find((item: any) => item.code === code);
    if (!city) {
        throw new Error(`City with code ${code} not found`);
    }
    return city as City;
}

export async function getCityByName(name: string): Promise<City> {
    const city = cities.find((item: any) => item.name.toLowerCase().includes(name.toLowerCase()));
    if (!city) {
        throw new Error(`City with name ${name} not found`);
    }
    return city as City;
}

export async function getRegenciesOfProvinceCode(provinceCode: string): Promise<City[]> {
    return cities.filter((item: any) => item.province_code === provinceCode) as City[];
}

export async function getRegenciesOfProvinceName(provinceName: string): Promise<City[]> {
    const province = provinces.find((item: any) => item.name.toLowerCase().includes(provinceName.toLowerCase()));
    if (!province) {
        throw new Error(`Province with name ${provinceName} not found`);
    }
    return cities.filter((item: any) => item.province_code === (province as any).code) as City[];
}