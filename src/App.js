import './App.css';
import React, {useState} from "react";
import {Col, Row, Card, CardImg, Button} from "react-bootstrap";
import img1 from './assets/download (1).png';
// import img2 from './assets/download.png';

function App() {
    const [data, setData] = useState([
        {name: 'Left Shopping Window',info: 'Only for Women', img: img1},
        // {name: 'Right Shopping Window', info: 'For all', img: img2},
        // {name: 'Left', info: 'Only for Kids', img: img3},
    ])

    const Window = ({d}) =>{
        const [show, setShow] = useState(false)
        return(
            <Card className='zoom'>
                <Card.Img variant="top" src={d.img} />
                <Card.Body>
                    <Card.Title>{d.name}</Card.Title>
                    <Card.Text>
                        {d.info}
                    </Card.Text>
                </Card.Body>
                <Button onClick={()=>setShow(!show)} variant={show ? 'danger' : 'success'}>
                    {show?'Off': 'On'}
                </Button>
            </Card>
        )
    }

  return (
      <>
      <div className='container w-100 p-4'>
          <h2 style={{color: "whitesmoke", textAlign: "center"}}>My App</h2>
          <Row >
            
              {data.map(d=>(
                  <Col className='mb-2' sm={12} md={6} lg={4}>
                      <Window d={d}/>
                  </Col>
              ))}
            
          </Row>
      </div>
       <div className='container w-100 p-4'>
       <h2 style={{color: "whitesmoke", textAlign: "center"}}>My App</h2>
       <Row >
         
           {data.map(d=>(
               <Col className='mb-2' sm={12} md={6} lg={4}>
                   <Window d={d}/>
               </Col>
           ))}
         
       </Row>
   </div>
   </>

  );
}
export default App;