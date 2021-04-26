import Priceheader from './Priceheader'
import {Modal, Button} from 'react-bootstrap';
import {useState} from 'react'
const Price = (product) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="mr-0 ml-0">
           <Priceheader/> 
            <div className="card">
                <div className="card-body" style={{minHeight:"500px", border:"none", }}>
                <p onClick={handleShow}>Coke <span className="float-right">12.34</span></p>
                <hr/>

                <p></p>

                <p></p>


                <p style={{marginTop:"210px"}}>Total <span className="float-right">50.34</span></p>
                <hr/>
                
                </div>
            </div>
            <button className="btn1">OPEN TICKET</button>
            
          
            <button className="btn1">CHARGE {product.price}</button>
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
    )
}

export default Price