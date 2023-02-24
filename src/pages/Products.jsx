// import Library für Link
import { Link } from "react-router-dom";


// import Footer
import ButtonShopNow from "../components/button/ButtonShopNow.jsx";
import Footer from "../components/footer/Footer.jsx";

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

            <h1>Products</h1>


            <h2> hallo</h2>

            <article /* style={ { backgroundImage: ` url(${imgSrc}) ` } } */  >
                <p >image als hintergrund</p>
                <h2>Jenson</h2>
                <p>link bauen</p>

                <Link to="/products/Jenson"> Shop now zu Jenson </Link>

                <ButtonShopNow> </ButtonShopNow>

{/* davor // ! .map drüber lassen  und um alles   { }  herum, da js */}
                <ProductsSchabloneItem
                style={{ backgroundImage: `url(${imgSrc2})` }}
                titel={dataArrObj.dataArrObj[0].productTitel}
                /* titel={weg zu titel im map} */
                to={`/products/${dataArrObj.dataArrObj[0].productTitel}`}

                ></ProductsSchabloneItem>

            </article>

            <article>
                <p>image als hintergrund</p>
                <h2>Deon</h2>
                <p>link bauen</p>
            </article>

            <article>
                <p>image als hintergrund</p>
                <h2>Krisha</h2>
                <p>link bauen</p>
            </article>




            <Footer> </Footer>
        </section>

    );
}

export default Products

