import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';

import ProductsPage from './ProductsPage';

function App() {
  return (
    <>
      <Container>
      <ProductsPage/>
      </Container>
    </>
  );
}

export default App;
