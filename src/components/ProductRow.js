const ProductsRow = (el) => {
    const color = el.inStock ? "inherit" : "red"
    return(
<tbody>
    <tr style = {{color: color}}>
        <td>{el.name}</td>
        <td>{el.price}</td>
        <td>{el.inStock ? "available" : "not available"}</td>
        <td>{el.category}</td>
        <td>{el.inStock}</td>
    </tr>
</tbody>

    )
}

export default ProductsRow