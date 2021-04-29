import Priceheader from './Priceheader'
import {Modal, Button} from 'react-bootstrap';
import {useState} from 'react'
const Price = ({proItems, onAdd}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const itemPrice = proItems.reduce((a, c) => a + c.price * c.qty, 0)
    const taxPrice = itemPrice * 0.75
    const itemTotal = itemPrice + taxPrice;
        return (
        <div className="mr-0 ml-0">
           <Priceheader/> 
            <div className="card">
                <div className="card-body" style={{minHeight:"500px", border:"none", }}>
                {proItems.length === 0 && <p></p>}
                <p onClick={handleShow}>
                {proItems.map((item)=>(
                    <>
                    <div key={item.id} className="row">
                        <div className="col-6">{item.name}</div> 
                       <div className="4 float-right ml-auto">
                       {item.price}
                       </div>
               
                    </div>
                    <hr></hr>
                   </>
                ))}
                 
                 </p>
                

                   {proItems.length !==0 &&(
                       <>
                       <p style={{marginTop:"85px"}}>Sub Total <span className="float-right">{itemPrice.toFixed(2)}</span></p>
                <hr/>
                
                <p style={{marginTop:"5px"}}>Tax <span className="float-right">{taxPrice.toFixed(2)}</span></p>
                <hr/>
                <p style={{marginTop:"5px"}}>Total <span className="float-right">{itemTotal.toFixed(2)}</span></p>
                <hr/>
                </>
                   )} 
                
                </div>
            </div>
            <button className="btn1">OPEN TICKET</button>
            
          
            <button className="btn1">CHARGE</button>
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