import districts from '../data/json/districts.json';
import cities from '../data/json/cities.json';
import { District } from './types';

export async function getAllDistricts(): Promise<District[]> {
    return districts as District[];
}

export async function getDistrictById(code: string): Promise<District> {
    const district = districts.find((item: any) => item.code === code);
    if (!district) {
        throw new Error(`District with code ${code} not found`);
    }
    return district as District;
}

export async function getDistrictByName(name: string): Promise<District> {
    const district = districts.find((item: any) => item.name.toLowerCase().includes(name.toLowerCase()));
    if (!district) {
        throw new Error(`District with name ${name} not found`);
    }
    return district as District;
}

export async function getDistrictsOfCityCode(cityCode: string): Promise<District[]> {
    return districts.filter((item: any) => item.city_code === cityCode) as District[];
}

export async function getDistrictsOfCityName(cityName: string): Promise<District[]> {
    const city = cities.find((item: any) => item.name.toLowerCase().includes(cityName.toLowerCase()));
    if (!city) {
        throw new Error(`City with name ${cityName} not found`);
    }
    return districts.filter((item: any) => item.city_code === (city as any).code) as District[];
}