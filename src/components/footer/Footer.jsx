

// import 
import bild_Footer from "../../img/Footer.png";

// import css
import "./Footer.scss";




// sfc
const Footer = () => {
    return ( 

<section style={ {backgroundImage: `url( ${ bild_Footer } )`} }  className="sec_Footer">

<h2>Footer</h2>

<p></p>

<h2>WOODIES</h2>
<p>(012) 8967453</p>
<p>woodies@gmail.com</p>
<p>Jakarta, Indonesia</p>

<p>©️ 2020 WOODIES</p>


</section>

     );
}
 
export default Footer;