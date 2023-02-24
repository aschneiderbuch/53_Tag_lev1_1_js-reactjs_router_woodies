// import Library für Link
 import { Link } from "react-router-dom"

// import css
import "./ProductsSchabloneItem.scss"




// sfc
// props
const ProductsSchabloneItem = (props) => {
    console.log(props.style)
    return (


        <section className="sec_ProductsSchabloneItem">
            <article style={props.style}>
                <p> imgSrc2 - backImg artic</p>
                <h2>{props.titel}</h2>
                <p></p>
                <Link to={props.to}> titel = Jenson</Link> 
 

            </article>


        </section>

    );
}

export default ProductsSchabloneItem;
