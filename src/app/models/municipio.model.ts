export class Municipio {

    idMunicipality: number;
    name: string;
    shield: string;
    region: string;
    province: string;
    ccaa: string;
    population: number;
    surface: number;
    altitude: number;
    density: number;
    nRestaurants: number;
    media: number;
    unpopulated: number;
    supermarkets:{
        name: string;
        address: number;
        distance: number;
    }[];
    stations: {
        cercanias: number;
        name: string;
        address: string
    }[]; 
    medicalcenters: {
        name: string;
        type: string;
        address: string
    }[];
}
/*
[
    {
        "idMunicipality": 26,
        "name": "Abades",
        "shield": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Bandera_de_Abades.svg",
        "region": "Santa María la Real de Nieva",
        "province": "Provincia de Segovia",
        "ccaa": "Castilla y León",
        "population": 971,
        "surface": 31.98,
        "altitude": 848,
        "density": 26.52
    }
]
*/