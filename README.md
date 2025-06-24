<div align="center">

# 🇮🇩 Indonesia NodeJS

[![npm version](https://img.shields.io/npm/v/indonesia-nodejs.svg?style=flat-square)](https://www.npmjs.org/package/indonesia-nodejs)
[![install size](https://img.shields.io/bundlephobia/min/indonesia-nodejs?style=flat-square)](https://packagephobia.com/result?p=indonesia-nodejs)
[![npm downloads](https://img.shields.io/npm/dm/indonesia-nodejs.svg?style=flat-square)](https://npm-stat.com/charts.html?package=indonesia-nodejs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**Data Wilayah Indonesia terbaru berdasarkan Kepmendagri tahun 2025**

*Provinsi, Kabupaten/Kota, Kecamatan, dan Desa/Kelurahan*

</div>

## 📋 Daftar Isi

- [Fitur](#-fitur)
- [Instalasi](#-instalasi)
- [Penggunaan](#-penggunaan)
  - [Provinsi](#provinsi)
  - [Kabupaten/Kota](#kabupatenkota)
  - [Kecamatan](#kecamatan)
  - [Desa/Kelurahan](#desakelurahan)
- [Struktur Data](#-struktur-data)
- [Kontribusi](#-kontribusi)
- [Lisensi](#-lisensi)

## ✨ Fitur

- ✅ **Data Lengkap**: Mencakup 38 provinsi, 514 kabupaten/kota, 7.285 kecamatan, dan 83.762 desa/kelurahan
- ✅ **TypeScript Support**: Dilengkapi dengan type definitions untuk pengembangan yang lebih aman
- ✅ **Promise-based API**: Semua fungsi mengembalikan Promise untuk mendukung async/await
- ✅ **Pencarian Fleksibel**: Pencarian berdasarkan kode atau nama
- ✅ **Relasi Hierarkis**: Kemudahan mendapatkan data berdasarkan relasi (provinsi → kota → kecamatan → desa)
- ✅ **Zero Dependencies**: Tidak memiliki dependencies pada runtime
- ✅ **Ringan**: Ukuran package yang kecil dan efisien

## 📦 Instalasi

```bash
# Menggunakan npm
npm install indonesia-nodejs

# Menggunakan yarn
yarn add indonesia-nodejs

# Menggunakan pnpm
pnpm add indonesia-nodejs
```

## 🚀 Penggunaan

### Provinsi

```typescript
import { 
  getAllProvinces, 
  getProvinceById, 
  getProvinceByName 
} from 'indonesia-nodejs';

// Mendapatkan semua provinsi
const provinces = await getAllProvinces();

// Mendapatkan provinsi berdasarkan kode
const jakarta = await getProvinceById('31');

// Mendapatkan provinsi berdasarkan nama (case-insensitive)
const bali = await getProvinceByName('bali');
```

### Kabupaten/Kota

```typescript
import { 
  getAllRegencies, 
  getCityById, 
  getCityByName,
  getRegenciesOfProvinceCode,
  getRegenciesOfProvinceName 
} from 'indonesia-nodejs';

// Mendapatkan semua kabupaten/kota
const cities = await getAllRegencies();

// Mendapatkan kabupaten/kota berdasarkan kode
const bandung = await getCityById('3273');

// Mendapatkan kabupaten/kota berdasarkan nama
const surabaya = await getCityByName('surabaya');

// Mendapatkan semua kabupaten/kota di provinsi tertentu (berdasarkan kode)
const citiesInJakarta = await getRegenciesOfProvinceCode('31');

// Mendapatkan semua kabupaten/kota di provinsi tertentu (berdasarkan nama)
const citiesInJogja = await getRegenciesOfProvinceName('yogyakarta');
```

### Kecamatan

```typescript
import { 
  getAllDistricts, 
  getDistrictById, 
  getDistrictByName,
  getDistrictsOfCityCode,
  getDistrictsOfCityName 
} from 'indonesia-nodejs';

// Mendapatkan semua kecamatan
const districts = await getAllDistricts();

// Mendapatkan kecamatan berdasarkan kode
const kecamatan = await getDistrictById('327301');

// Mendapatkan kecamatan berdasarkan nama
const cilandak = await getDistrictByName('cilandak');

// Mendapatkan semua kecamatan di kota tertentu (berdasarkan kode)
const districtsInBandung = await getDistrictsOfCityCode('3273');

// Mendapatkan semua kecamatan di kota tertentu (berdasarkan nama)
const districtsInSurabaya = await getDistrictsOfCityName('surabaya');
```

### Desa/Kelurahan

```typescript
import { 
  getAllVillages, 
  getVillageById, 
  getVillageByName,
  getVillagesOfDistrictCode,
  getVillagesOfDistrictName 
} from 'indonesia-nodejs';

// Mendapatkan semua desa/kelurahan
const villages = await getAllVillages();

// Mendapatkan desa/kelurahan berdasarkan kode
const kelurahan = await getVillageById('3273011001');

// Mendapatkan desa/kelurahan berdasarkan nama
const pondokIndah = await getVillageByName('pondok indah');

// Mendapatkan semua desa/kelurahan di kecamatan tertentu (berdasarkan kode)
const villagesInDistrict = await getVillagesOfDistrictCode('327301');

// Mendapatkan semua desa/kelurahan di kecamatan tertentu (berdasarkan nama)
const villagesInCilandak = await getVillagesOfDistrictName('cilandak');
```

## 📊 Struktur Data

### Province (Provinsi)

```typescript
interface Province {
  code: string;   // Kode provinsi (contoh: "31")
  name: string;   // Nama provinsi (contoh: "Daerah Khusus Ibukota Jakarta")
}
```

### City (Kabupaten/Kota)

```typescript
interface City {
  code: string;          // Kode kabupaten/kota (contoh: "3171")
  province_code: string; // Kode provinsi (contoh: "31")
  name: string;          // Nama kabupaten/kota (contoh: "Kota Administrasi Jakarta Pusat")
}
```

### District (Kecamatan)

```typescript
interface District {
  code: string;      // Kode kecamatan (contoh: "317101")
  city_code: string; // Kode kabupaten/kota (contoh: "3171")
  name: string;      // Nama kecamatan (contoh: "Tanah Abang")
}
```

### Village (Desa/Kelurahan)

```typescript
interface Village {
  code: string;          // Kode desa/kelurahan (contoh: "3171011001")
  district_code: string; // Kode kecamatan (contoh: "317101")
  name: string;          // Nama desa/kelurahan (contoh: "Gelora")
}
```

## 🤝 Kontribusi

Kontribusi selalu diterima dengan tangan terbuka! Jika Anda menemukan bug atau memiliki saran untuk perbaikan, silakan buat issue atau pull request di [GitHub repository](https://github.com/dhank77/indonesia-nodejs).

## 📄 Lisensi

Project ini dilisensikan di bawah [MIT License](https://opensource.org/licenses/MIT).

---

<div align="center">

Dibuat dengan ❤️ oleh [M. Hamdani Ilham Latjoro](https://github.com/dhank77)

</div>