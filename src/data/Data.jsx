// import Library uuid
import { v4 as uuidv4 } from "uuid";

// import Product bilder
import bild_0 from "../img/bild_0.png"; // Tisch
import bild_1 from "../img/bild_1.png"; // Stuhl
import bild_2 from "../img/bild_2.png"; // Schuesseln

// Array Produkt titel
const productTitelArr = ["Jenson", "Deon", "Krisa"]

// Array id 
const key = [];
for (let i = 0; i < productTitelArr.length; i++){
key.push(i)
}
console.log(key)

const uuidArr = [];
for (let i = 0; i < productTitelArr.length; i++){
    uuidArr.push(uuidv4())
}
console.log(uuidArr)

// Array imgSrc
const imgSrcArr = [bild_0, bild_1, bild_2];

// Array imgSrc2 
const imgSrcArr2 = [];
for (let i = 0; i < productTitelArr.length; i++){
    imgSrcArr2.push( { [ `bild_${i}` ]: `../img/bild_${i}.png` } )
}

console.log(imgSrcArr2)

console.log(imgSrcArr)
console.log(imgSrcArr[0])


// Bauplan für Objekt
class Bauplan_Objekt {
    constructor(key, uuid, productTitel, imgSrc, imgSrc2){
        this.key = key;
        this.uuid = uuid;
        this.productTitel = productTitel;
        this.imgSrc = imgSrc;
        this.imgSrc2 = imgSrc2;
    }
    description(){
        console.log(this.key, this.uuid, this.productTitel, this.imgSrc, this.imgSrc2)
    }
}

const dataArrObj = [];
for (let i = 0; i < productTitelArr.length; i++){
    const dataObj_i_runden = new Bauplan_Objekt(key[i], uuidArr[i], productTitelArr[i], imgSrcArr[i], imgSrcArr2[i]);
    dataArrObj.push(dataObj_i_runden)
}



// sfc
export {dataArrObj}
 export default { dataArrObj}


/* 
{
    "dataArrObj": [
        {
            "key": 0,
            "uuid": "b2d7e54a-7bdf-42d2-b704-518f06c91beb",
            "productTitel": "Jenson",
            "imgSrc": "/static/media/bild_0.0598a9846a7a5b4211bf.png",
            "imgSrc2": {
                "bild_0": "../img/bild_0.png"
            }
        },
        {
            "key": 1,
            "uuid": "8bcfba61-971a-40d9-9a66-3a39f7e27a65",
            "productTitel": "Deon",
            "imgSrc": "/static/media/bild_1.f1b59455ba346b8f39cd.png",
            "imgSrc2": {
                "bild_1": "../img/bild_1.png"
            }
        },
        {
            "key": 2,
            "uuid": "39688dfb-f48d-4344-b6e4-0792bfbfbb5e",
            "productTitel": "Krisa",
            "imgSrc": "/static/media/bild_2.f8fb5a999661162b65c5.png",
            "imgSrc2": {
                "bild_2": "../img/bild_2.png"
            }
        }
    ]
}

*/


/* 

{
    "dataArrObj": [
        {
            "key": 0,
            "uuid": "ce77b675-27eb-4ce4-90c3-64ecb9047991",
            "productTitel": "Jenson",
            "imgSrc": "/static/media/bild_0.0598a9846a7a5b4211bf.png",
            "imgSrc2": {
                "bild_0": "../img/bild_0.png"
            }
        },
        {
            "key": 1,
            "uuid": "30064b94-9280-41df-b943-9e2c24a33590",
            "productTitel": "Deon",
            "imgSrc": "/static/media/bild_1.f1b59455ba346b8f39cd.png",
            "imgSrc2": {
                "bild_1": "../img/bild_1.png"
            }
        },
        {
            "key": 2,
            "uuid": "7bc2906e-9220-41e3-87fb-d72a54e58419",
            "productTitel": "Krisa",
            "imgSrc": "/static/media/bild_2.f8fb5a999661162b65c5.png",
            "imgSrc2": {
                "bild_2": "../img/bild_2.png"
            }
        }
    ]
}




*/