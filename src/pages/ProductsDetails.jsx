// links zu einzelnen Produkten     mit useParams
import { useParams } from "react-router-dom";


// import Data
import dataArrObj from "../data/Data.jsx"


// sfc
const ProductsDetails = () => {

    const params = useParams();
    console.log(params);
let text =""
    if (params.name =="Jenson"){
        console.log("in if");
    console.log(params.name); 
    text = "verstehen sie spaß "

    } else{}
    console.log(dataArrObj);
    const data = dataArrObj.dataArrObj[0].imgSrc;
    console.log(data);



    return (

        <>
            {/* // !! hier nie    if       sondern nur   ?  und  :   */}


            <h1>hallo ich params   zu den einzelnen Produkten  du bis bei {params.name}</h1>

<h1>{text}</h1>
        


        </>

    );
}

export default ProductsDetails;