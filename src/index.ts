import provinces from '../data/json/provinces.json';
import cities from '../data/json/cities.json';
import districts from '../data/json/districts.json';
import villages from '../data/json/villages.json';

export function getProvinces() {
    return provinces;
}

export function getCities(provinceCode: string) {
    return cities.filter((item: { province_code: string; }) => item.province_code === provinceCode);
}

export function getDistricts(regencyCode: string) {
    return districts.filter((item: { city_code: string; }) => item.city_code === regencyCode);
}

export function getVillages(districtCode: string) {
    console.log(villages);
    
    // return villages.filter((item: { district_code: string; }) => item.district_code === districtCode);
}