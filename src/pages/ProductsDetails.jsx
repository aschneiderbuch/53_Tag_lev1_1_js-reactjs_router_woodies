// links zu einzelnen Produkten     mit useParams
import { useParams } from "react-router-dom";


// import Data
import dataArrObj from "../data/Data.jsx"


// sfc
const ProductsDetails = () => {

    const params = useParams();
    console.log(params);

    if (params.name ==="Jenson"){
        console.log("in if");
    console.log(params.name); 
    }
    console.log(dataArrObj);
    const data = dataArrObj.dataArrObj[0].imgSrc;
    console.log(data);



    return (

        <>
            {/* // !! hier nie    if       sondern nur   ?  und  :   */}


            <h1>hallo ich params   zu den einzelnen Produkten  du bis bei {params.name}</h1>

        


        </>

    );
}

export default ProductsDetails;