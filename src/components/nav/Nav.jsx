// import Library Link
import { Link } from "react-router-dom";



// import css
import "./Nav.scss";


// sfc
const Nav = () => {
    return ( 

        <section className="sec_Nav">
        
        <h2> Nav WOODIES </h2>

        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/products">Products</Link>

        </section>

     );
}
 
export default Nav;