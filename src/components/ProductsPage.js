import { Component } from "react";
import products from '../data.json'
import ProductsTable from "./ProductsTable";
import SearchBar from "./SearchBar";

class ProductsPage extends Component{
    constructor(){
        super()
        this.state = {
            products,
            previousSearchProduct: ''
        }
    }

    searchProduct = (searchInput, inStore) => {    
        let newProductsList = products.filter( el => el.name.toLowerCase().includes( searchInput.toLowerCase() ))
        newProductsList = inStore ? newProductsList.filter( el => el.inStock === inStore) : newProductsList
        this.setState({
            products: newProductsList
        })
    }

    // searchProduct = (searchInput) => {        
    //     if( !searchInput.toLowerCase().includes( this.previousSearchProduct?.toLowerCase() )){
    //         let newProductsList = products.filter( el => el.name.toLowerCase().includes( searchInput.toLowerCase() ))
    //         this.setState({
    //             products: newProductsList
    //         })
    //     }else{
    //         //could have filtered the initial products string each timebut for efficiency chose to filter the current state
    //         const tempProductsList = [...this.state.products]
    //         this.setState({
    //         products: tempProductsList.filter( el => el.name.toLowerCase().includes( searchInput.toLowerCase() )).filter( el => el.inStock === inStore)
    //     })
    //     }
    // }

    render = () => (
        <>
            <SearchBar searchProduct = { (searchInput, inStore) => this.searchProduct(searchInput, inStore)}/>
            <br/>
            <ProductsTable products = {this.state.products}/>
        </>
    )
}

export default ProductsPage
