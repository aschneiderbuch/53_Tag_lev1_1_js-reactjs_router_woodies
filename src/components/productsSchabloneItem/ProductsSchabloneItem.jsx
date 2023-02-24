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
                <h2>{props.titel}</h2>
                <Link to={props.to}>Shop now</Link> 
 

            </article>


        </section>

    );
}

export default ProductsSchabloneItem;
