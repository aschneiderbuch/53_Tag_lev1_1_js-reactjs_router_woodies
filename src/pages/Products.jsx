// import Library für Link
import { Link } from "react-router-dom";


// import Footer
import Footer from "../components/footer/Footer.jsx";

// import Logo
import Logo_klein from "../img/Logo_klein.png";

// import css
import "./Products.scss";

// import dataArrObj
import dataArrObj from "../data/Data.jsx";

// import Schablone Item
import ProductsSchabloneItem from "../components/productsSchabloneItem/ProductsSchabloneItem.jsx";



// sfc
const Products = () => {
    console.log("data");
    const dataTest = dataArrObj.dataArrObj[0].uuid
    console.log(dataTest);
    const imgSrc2 = dataArrObj.dataArrObj[0].imgSrc2.bild_0;
    console.log(imgSrc2);
    const imgSrc = dataArrObj.dataArrObj[0].imgSrc
    console.log(imgSrc);


    return (

        <section className="sec_Products">



            <article> 
                <img src={Logo_klein} alt="Logo klein" />
                <h2 className="h2_Products">What we have</h2>  
            </article>

                {/*    <ButtonShopNow> </ButtonShopNow> */}

                {/* davor // ! .map drüber lassen  und um alles   { }  herum, da js */}
                {/* // ! Vorischt durch den export default wird um das dataArrObj nochmal ein 
                // !  Objekt drum herum gepackt  :-(    */}
                {dataArrObj.dataArrObj.map((itemObj, index) => {
                    return <ProductsSchabloneItem
                        key={index}
                        key_={itemObj.uuid}
                        style={{ backgroundImage: `url(${itemObj.imgSrc})` }}
                        titel={itemObj.productTitel}
                        /* titel={weg zu titel im map} */
                        to={`/products/${itemObj.productTitel}`}

                    ></ProductsSchabloneItem>
                })}

          



            <Footer> </Footer>
        </section>

    );
}

export default Products




