import React from 'react'
import {useEffect} from "react"
//import {getItemAPI,deleteItem} from "../../../redux/actions/menu"
import UpdateItem from './updateItem'
import {useSelector,useDispatch} from 'react-redux'
import {getItemAPI, deleteItem} from "/home/mouna/Bureau/Mon Resto/client/src/Component/Action/item.js"
import { Link } from 'react-router-dom'
import AddItem from './addItem'
import { Card, Button } from 'react-bootstrap'


const Dashboard = () => {
const datas = useSelector(state => state.itemReducer.datas)
const loading = useSelector(state => state.itemReducer.loading)

const dispatch = useDispatch()
//get item
  useEffect(() => {
  dispatch(getItemAPI())
     }, [dispatch])
  console.log("my data",datas)
  //delete item

   //DeleteMenu
   const deleteItemm =(id)=>{
    dispatch (deleteItem(id) )
    console.log(deleteItem(id))
  }
  return(
    <div>
      <Link to="/">Back</Link>
      <AddItem/>
      
      {loading? "loading...." :
      datas.length===0 ? <div > Aucune publication disponible actuellement</div>:
      <Card style={{ width: '18rem' }}>
            {datas.map((el,key )=> (
            
              <div div key={key}>
              <Card.Img variant="top" src={el.imageUrl} />
              <Card.Body>
              <Card.Title>{el.title}</Card.Title>
             <Card.Text>
             {el.description}
            </Card.Text>
            <button className="btn btn-danger mt-5 h-25" onClick={() => deleteItemm(el._id)}>supprimer</button>
                <UpdateItem id={el._id}  el={el}/>
           
          </Card.Body>
          </div>
            ))}
            </Card>
 } 
          </div>  
    
             

            )}

export default Dashboard