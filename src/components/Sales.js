import Header from './header'
import {Button, Modal} from 'react-bootstrap'
import {useState} from 'react'
import Price from './Price'
import { FaThLarge } from 'react-icons/fa'

const Sales = ({products, onAdd}) => {
//modal handler
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   
    return (
       <div>
       
     
      
        <Header /> 
        <div className="card" style={{minHeight:"500px"}}>
      <div className="card-body">
      <div className="row ml-auto mr-auto">
       {products.map((products)=>(
         
           <div className="col-3 border border-success border-rounded" >

           <img key={products.id} src={products.pics} height="200" width="200" className="pt-2 pb-2 imgs" onClick={handleShow} style={{cursor: "pointer"}}  />

           <button id="bt1" className="text-white" onClick={()=>onAdd(products)} >{products.name}</button>
           </div> 
           
       ))}
        </div>
        <Modal show={show} onHide={handleClose}>
       
       <Modal.Body>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Vivamus varius fringilla urna vitae commodo. Aenean pretium, 
      nibh in malesuada condimentum, neque nulla gravida nisi, 
      nec dapibus mi elit at velit. Pellentesque pellentesque rutrum
      nisl, id cursus tellus fringilla porta. Phasellus porta odio 
      sed magna tincidunt, at hendrerit ligula elementum. Sed vel 
      pellentesque nunc. Orci varius natoque penatibus et magnis dis 
      parturient montes, nascetur ridiculus mus. Ut purus est, aliquet 
      ac orci blandit, viverra venenatis mauris. Mauris eget congue felis, 
      a faucibus nibh. Vestibulum quis accumsan felis. Nam eu efficitur erat. 
      Nulla facilisi. Morbi consequat arcu mi, id efficitur ante porta sit amet. </p>
       </Modal.Body>
       
     </Modal>
        
        </div>
        </div>
        <button className="btn2">MAN'S BAG</button>
            
          
            <button className="btn2">FEMALE'S BAG</button>
            <button className="btn2"><FaThLarge style={{color:"green"}} /></button>
            
          
           
       

        
        
        </div>
    )
}

export default Sales
