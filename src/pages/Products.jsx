// import Library für Link
import { Link } from "react-router-dom";


// import Footer
import ButtonShopNow from "../components/button/ButtonShopNow.jsx";
import Footer from "../components/footer/Footer.jsx";

// import css
import "./Products.scss";

// sfc
const Products = () => {
    return (

        <section className="sec_Products">

            <h1>Products</h1>

            <h2> hallo</h2>

            <article>
                <p>image als hintergrund</p>
                <h2>Jenson</h2>
                <p>link bauen</p>

                <Link to="/products/Jenson"> Shop now zu Jenson </Link>

                <ButtonShopNow> </ButtonShopNow>

            </article>

            <article>
                <p>image als hintergrund</p>
                <h2>Deo</h2>
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

