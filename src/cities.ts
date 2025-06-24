import cities from '../data/json/cities.json';
import provinces from '../data/json/provinces.json';
import { City } from '../types';

export async function getAllRegencies(): Promise<City[]> {
    return cities.map((item: any) => ({
        code: parseInt(item.code),
        province_code: parseInt(item.province_code),
        name: item.name
    }));
}

export async function getCityById(code: number): Promise<City> {
    const city = cities.find((item: any) => parseInt(item.code) === code);
    if (!city) {
        throw new Error(`City with code ${code} not found`);
    }
    return {
        code: parseInt(city.code),
        province_code: parseInt(city.province_code),
        name: city.name
    };
}

export async function getCityByName(name: string): Promise<City> {
    const city = cities.find((item: any) => item.name.toLowerCase().includes(name.toLowerCase()));
    if (!city) {
        throw new Error(`City with name ${name} not found`);
    }
    return {
        code: parseInt(city.code),
        province_code: parseInt(city.province_code),
        name: city.name
    };
}

export async function getRegenciesOfProvinceCode(provinceCode: number): Promise<City[]> {
    return cities.filter((item: any) => parseInt(item.province_code) === provinceCode).map((item: any) => ({
        code: parseInt(item.code),
        province_code: parseInt(item.province_code),
        name: item.name
    }));
}

export async function getRegenciesOfProvinceName(provinceName: string): Promise<City[]> {
    const province = provinces.find((item: any) => item.name.toLowerCase().includes(provinceName.toLowerCase()));
    if (!province) {
        throw new Error(`Province with name ${provinceName} not found`);
    }
    return cities.filter((item: any) => parseInt(item.province_code) === parseInt((province as any).code)).map((item: any) => ({
        code: parseInt(item.code),
        province_code: parseInt(item.province_code),
        name: item.name
    }));
}