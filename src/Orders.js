import React, { useState, useEffect } from 'react'
import { db } from './firebase'
import './Orders.css';
import { useStateValue } from './StateProvider';
import Order from './Order';

function Orders() {

    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(()=>{

        if(user){
           db  
            .collection('users')         //accessing user collections from db
            .doc(user?.uid)              //getting the specific user that is logged in that time
            .collection('orders')        // accessing that user orders
            .orderBy('created','desc')   //it will order them on the basis of dates 
            .onSnapshot(snapshot => {     
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            }) 
        }else {
            setOrders([])
        }

        
    }, [user])

    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
