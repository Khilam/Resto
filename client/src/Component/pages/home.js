

import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getItemAPI} from "../Action/item"
import { Card, Button } from 'react-bootstrap'
import Navbar from './navbar'

const Home = () => {
  const datas = useSelector(state => state.itemReducer.datas)
  const loading = useSelector(state => state.itemReducer.loading)
  
  const dispatch = useDispatch()
  
    useEffect(() => {
    dispatch(getItemAPI())
       }, [dispatch])
    console.log("my data",datas)
    return(

     
      <div>

<Navbar/>
               <h1>Delicious Menu</h1>
               <div className=" my-para "><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
               
               </div>
              <div className="d-flex justify-content-around" >
             <Card style={{ width: '18rem' }}>
              {datas.map((el,key )=> (
                <div  key={key}>
               
                 <Card.Img variant="top" src={el.imageUrl}  />
                 <Card.Body>
                 <Card.Title>{el.title}</Card.Title>
                 <Card.Text>
                 {el.description}
                </Card.Text>
                <Button variant="primary">Commander</Button>
                </Card.Body>
                </div>
             
             ))}
             </Card>
   
           </div>  
     
            </div>  
 
             )}
  
  export default Home