"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVillagesOfDistrictName = exports.getVillagesOfDistrictCode = exports.getVillageByName = exports.getVillageByCode = exports.getAllVillages = exports.getDistrictsOfCityName = exports.getDistrictsOfCityCode = exports.getDistrictByName = exports.getDistrictByCode = exports.getAllDistricts = exports.getRegenciesOfProvinceName = exports.getRegenciesOfProvinceCode = exports.getCityByName = exports.getCityByCode = exports.getAllRegencies = exports.getProvinceByName = exports.getProvinceByCode = exports.getAllProvinces = void 0;
var provinces_1 = require("./provinces");
Object.defineProperty(exports, "getAllProvinces", { enumerable: true, get: function () { return provinces_1.getAllProvinces; } });
Object.defineProperty(exports, "getProvinceByCode", { enumerable: true, get: function () { return provinces_1.getProvinceByCode; } });
Object.defineProperty(exports, "getProvinceByName", { enumerable: true, get: function () { return provinces_1.getProvinceByName; } });
var cities_1 = require("./cities");
Object.defineProperty(exports, "getAllRegencies", { enumerable: true, get: function () { return cities_1.getAllRegencies; } });
Object.defineProperty(exports, "getCityByCode", { enumerable: true, get: function () { return cities_1.getCityByCode; } });
Object.defineProperty(exports, "getCityByName", { enumerable: true, get: function () { return cities_1.getCityByName; } });
Object.defineProperty(exports, "getRegenciesOfProvinceCode", { enumerable: true, get: function () { return cities_1.getRegenciesOfProvinceCode; } });
Object.defineProperty(exports, "getRegenciesOfProvinceName", { enumerable: true, get: function () { return cities_1.getRegenciesOfProvinceName; } });
var districts_1 = require("./districts");
Object.defineProperty(exports, "getAllDistricts", { enumerable: true, get: function () { return districts_1.getAllDistricts; } });
Object.defineProperty(exports, "getDistrictByCode", { enumerable: true, get: function () { return districts_1.getDistrictByCode; } });
Object.defineProperty(exports, "getDistrictByName", { enumerable: true, get: function () { return districts_1.getDistrictByName; } });
Object.defineProperty(exports, "getDistrictsOfCityCode", { enumerable: true, get: function () { return districts_1.getDistrictsOfCityCode; } });
Object.defineProperty(exports, "getDistrictsOfCityName", { enumerable: true, get: function () { return districts_1.getDistrictsOfCityName; } });
var villages_1 = require("./villages");
Object.defineProperty(exports, "getAllVillages", { enumerable: true, get: function () { return villages_1.getAllVillages; } });
Object.defineProperty(exports, "getVillageByCode", { enumerable: true, get: function () { return villages_1.getVillageByCode; } });
Object.defineProperty(exports, "getVillageByName", { enumerable: true, get: function () { return villages_1.getVillageByName; } });
Object.defineProperty(exports, "getVillagesOfDistrictCode", { enumerable: true, get: function () { return villages_1.getVillagesOfDistrictCode; } });
Object.defineProperty(exports, "getVillagesOfDistrictName", { enumerable: true, get: function () { return villages_1.getVillagesOfDistrictName; } });
