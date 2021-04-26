import 'bootstrap/dist/css/bootstrap.min.css';
import Sales from './components/Sales'
import Price from './components/Price'
import {useState} from  'react'
import './App.css'

function App() {
  
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'coke',
      price: 12.32,
      category: 'drinks',
      pics: 'images/coke.jpg',
    },
    {
      id: 2,
      name: 'fanta',
      price: 13.32,
      category: 'drinks',
      pics: 'images/fanta.jpg',
      
    },
    {
      id: 3,
      name: 'sprite',
      price: 14.32,
      category: 'drinks',
      pics: 'images/sprite.jpg',
      
    },
    {
      id: 4,
      name: 'cokee',
      price: 15.32,
      category: 'drinks',
      pics: 'images/cokee.jpg',
      
    },
    {
      id: 5,
      name: 'schweps',
      price: 12.32,
      category: 'drinks',
      pics: 'images/schweps.jpg',
      
    },
    {
      id: 6,
      name: 'blacks',
      price: 23.32,
      category: 'drinks',
      pics: 'images/blacks.jpg',
      
    }


  ])
  return (
    <div className="container-fluid">
    
  
          {products.length > 0 ? <Sales product={products}/>:"No products available"}
    
   
   
    </div>
    
  );
}

export default App;
 