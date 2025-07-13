"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllVillages = getAllVillages;
exports.getVillageByCode = getVillageByCode;
exports.getVillageByName = getVillageByName;
exports.getVillagesOfDistrictCode = getVillagesOfDistrictCode;
exports.getVillagesOfDistrictName = getVillagesOfDistrictName;
var villages_json_1 = __importDefault(require("../data/json/villages.json"));
var districts_json_1 = __importDefault(require("../data/json/districts.json"));
var villages = villages_json_1.default;
var districts = districts_json_1.default;
function getAllVillages() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, villages.map(function (item) { return ({
                    code: parseInt(item.code),
                    district_code: parseInt(item.district_code),
                    name: item.name,
                    postal_code: parseInt(item.postal_code)
                }); })];
        });
    });
}
function getVillageByCode(code) {
    return __awaiter(this, void 0, void 0, function () {
        var village;
        return __generator(this, function (_a) {
            village = villages.find(function (item) { return parseInt(item.code) === code; });
            if (!village) {
                throw new Error("Village with code ".concat(code, " not found"));
            }
            return [2 /*return*/, {
                    code: parseInt(village.code),
                    district_code: parseInt(village.district_code),
                    name: village.name,
                    postal_code: parseInt(village.postal_code)
                }];
        });
    });
}
function getVillageByName(name) {
    return __awaiter(this, void 0, void 0, function () {
        var village;
        return __generator(this, function (_a) {
            village = villages.find(function (item) { return item.name.toLowerCase().includes(name.toLowerCase()); });
            if (!village) {
                throw new Error("Village with name ".concat(name, " not found"));
            }
            return [2 /*return*/, {
                    code: parseInt(village.code),
                    district_code: parseInt(village.district_code),
                    name: village.name,
                    postal_code: parseInt(village.postal_code)
                }];
        });
    });
}
function getVillagesOfDistrictCode(districtCode) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, villages.filter(function (item) { return parseInt(item.district_code) === districtCode; }).map(function (item) { return ({
                    code: parseInt(item.code),
                    district_code: parseInt(item.district_code),
                    name: item.name,
                    postal_code: parseInt(item.postal_code)
                }); })];
        });
    });
}
function getVillagesOfDistrictName(districtName) {
    return __awaiter(this, void 0, void 0, function () {
        var district;
        return __generator(this, function (_a) {
            district = districts.find(function (item) { return item.name.toLowerCase().includes(districtName.toLowerCase()); });
            if (!district) {
                throw new Error("District with name ".concat(districtName, " not found"));
            }
            return [2 /*return*/, villages.filter(function (item) { return parseInt(item.district_code) === parseInt(district.code); }).map(function (item) { return ({
                    code: parseInt(item.code),
                    district_code: parseInt(item.district_code),
                    name: item.name,
                    postal_code: parseInt(item.postal_code)
                }); })];
        });
    });
}
