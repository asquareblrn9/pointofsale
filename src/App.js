import 'bootstrap/dist/css/bootstrap.min.css';
import Sales from './components/Sales'
import Price from './components/Price'
import {useState} from  'react'
import './App.css'
import Data from './data'

function App() {
  const {products} = Data;
  const [proItems, setProducts] = useState([])

  const onAdd = (products) => {
    const exist = proItems.find(x => x.id === products.id);
    if(exist){
      setProducts(proItems.map(x => x.id === products.id ? {...exist, qty: exist.qty + 1}: x))
    }else{
      setProducts([...proItems, {...products, qty: 1}])
    }
  }
  return (
    <div className="container-fluid">
    <div className="row">
    <div className="col-8">
          <Sales  products={products} onAdd={onAdd}/>
    </div>

    <div className="col-4">
            <Price proItems={proItems} onAdd={onAdd}  />
        </div>
   </div>
   
    </div>
    
  );
}

export default App;
 