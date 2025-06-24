import districts from '../data/json/districts.json';
import cities from '../data/json/cities.json';
import { District } from '../types';

export async function getAllDistricts(): Promise<District[]> {
    return districts.map((item: any) => ({
        code: parseInt(item.code),
        city_code: parseInt(item.city_code),
        name: item.name
    }));
}

export async function getDistrictByCode(code: number): Promise<District> {
    const district = districts.find((item: any) => parseInt(item.code) === code);
    if (!district) {
        throw new Error(`District with code ${code} not found`);
    }
    return {
        code: parseInt(district.code),
        city_code: parseInt(district.city_code),
        name: district.name
    };
}

export async function getDistrictByName(name: string): Promise<District> {
    const district = districts.find((item: any) => item.name.toLowerCase().includes(name.toLowerCase()));
    if (!district) {
        throw new Error(`District with name ${name} not found`);
    }
    return {
        code: parseInt(district.code),
        city_code: parseInt(district.city_code),
        name: district.name
    };
}

export async function getDistrictsOfCityCode(cityCode: number): Promise<District[]> {
    return districts.filter((item: any) => parseInt(item.city_code) === cityCode).map((item: any) => ({
        code: parseInt(item.code),
        city_code: parseInt(item.city_code),
        name: item.name
    }));
}

export async function getDistrictsOfCityName(cityName: string): Promise<District[]> {
    const city = cities.find((item: any) => item.name.toLowerCase().includes(cityName.toLowerCase()));
    if (!city) {
        throw new Error(`City with name ${cityName} not found`);
    }
    return districts.filter((item: any) => parseInt(item.city_code) === parseInt((city as any).code)).map((item: any) => ({
        code: parseInt(item.code),
        city_code: parseInt(item.city_code),
        name: item.name
    }));
}