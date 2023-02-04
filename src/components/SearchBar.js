import { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            searchName: '',
            inStore: false
        }
    }

    // handleSearchChange = (e) => {
    //     this.setState({
    //         searchName: e.target.value
    //     })
    //     console.log(`Hey from handleSearchChange Looking for ${e.target.value}!!!`)
    //     console.log(`Hey from handleSearchChange Looking for ${this.state.searchName}!!!`)
    //     this.props.searchProduct(e.target.value, this.state.inStore)
    // }

    // handleCheckedChange = (e) => {
    //     this.setState({
    //         inStore: e.target.checked
    //     })
    //     this.props.searchProduct(this.state.searchName, e.target.checked)
    // }

    handleChange = (e) => {
        const {name, type, checked} = e.target
        const value = type === 'checkbox' ? checked : e.target.value
        this.setState({
            [name]: value
        })
    }

    // due to the asynchronous behaviour of setState it's necessary to wait for it and then lift the state up to the parent component
    componentDidUpdate(prevProps, prevState){
        if( this.state.inStore !== prevState.inStore || this.state.searchName !== prevState.searchName ){
            this.props.searchProduct(this.state.searchName, this.state.inStore)
        }
    }

    resetSearchInput = () => {
        this.setState({
            searchName: ''
        })
    }

    render = () => (   
        
        <Row>
            <Col xs={3}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Search</Form.Label>
                        <Form.Control name='searchName' type="text" placeholder="Enter search string" value={this.state.searchName} 
                            onChange={ (e) => this.handleChange(e) }/>
                        {/* <Form.Control name='searchName' type="text" placeholder="Enter search string" value={this.state.searchName} 
                            onChange={ (e) => this.handleSearchChange(e) }/> */}
                        <Form.Text className="text-muted">
                        Just write a few letters of the product's name.
                        </Form.Text>
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check name='inStore' type="checkbox" label="Check to display only available products" 
                            onChange={ (e) => this.handleChange(e) }
                            checked = {this.state.inStore}/>
                        {/* <Form.Check name='inStore' type="checkbox" label="Check to display only available products" 
                            onChange={ (e) => this.handleCheckedChange(e) }
                            checked = {this.state.inStore}/> */}
                    </Form.Group>
                </Form>           
            </Col>           
        </Row>
          );
        }
        
export default SearchBar;