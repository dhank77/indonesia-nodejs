"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvinces = getProvinces;
exports.getCities = getCities;
exports.getDistricts = getDistricts;
exports.getVillages = getVillages;
var provinces_json_1 = __importDefault(require("../data/json/provinces.json"));
var cities_json_1 = __importDefault(require("../data/json/cities.json"));
var districts_json_1 = __importDefault(require("../data/json/districts.json"));
var villages_json_1 = __importDefault(require("../data/json/villages.json"));
function getProvinces() {
    return provinces_json_1.default;
}
function getCities(provinceCode) {
    return cities_json_1.default.filter(function (item) { return item.province_code === provinceCode; });
}
function getDistricts(regencyCode) {
    return districts_json_1.default.filter(function (item) { return item.city_code === regencyCode; });
}
function getVillages(districtCode) {
    console.log(villages_json_1.default);
    // return villages.filter((item: { district_code: string; }) => item.district_code === districtCode);
}
