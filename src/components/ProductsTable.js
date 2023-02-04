import ProductsRow from "./ProductRow"

const ProductsTable = ({products}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>    
                    <th>Availability</th>
                    <th>Category</th>                   
                </tr>
            </thead>
            {products.map( (el, idx) => <ProductsRow {...el} key = {idx}/>)}
        </table>
    )
}

export default ProductsTable