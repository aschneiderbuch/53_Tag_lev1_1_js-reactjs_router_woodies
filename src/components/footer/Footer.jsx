

// import img
import bild_Footer from "../../img/Footer.png";
import logo from "../../img/Logo.png";


// import css
import "./Footer.scss";




// sfc
const Footer = () => {
    return ( 

<section style={ {backgroundImage: `url( ${ bild_Footer } )`} }  className="sec_Footer">

<article>
<p></p>  {/* macht den Style Strich */}

<img src={logo} alt="Firmen logo Woodies" />
<p>(012) 8967453</p>
<p>woodies@gmail.com</p>
<p>Jakarta, Indonesia</p>
</article>

<article>
<p>©️ 2020 WOODIES</p>
</article>

</section>

     );
}
 
export default Footer;