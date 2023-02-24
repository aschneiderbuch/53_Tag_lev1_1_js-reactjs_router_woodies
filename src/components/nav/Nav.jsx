// import Library Link
import { Link } from "react-router-dom";

// import img
import logo from "../../img/Logo.png";

// import css
import "./Nav.scss";


// sfc
const Nav = () => {
    return (

        <section className="sec_Nav">

            <article>
                <img src={logo} alt="Firmen logo Woodies" />
            </article>
            <article>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/products">Products</Link>
            </article>
        </section>
    );
}

export default Nav;