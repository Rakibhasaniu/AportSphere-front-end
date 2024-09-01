/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button, Card, Flex, Typography } from 'antd';
const { Meta } = Card;
import React, { useState } from 'react'
import { useAppSelector } from '../../redux/hooks';
import { Link } from 'react-router-dom';



const ProductCard = ({product,deleteFunc}:any) => {
  const [openModal, setOpenModal] = useState(false);
    const role = useAppSelector((state) => (state?.auth?.user?.role));
   
  return (
    <Card
    hoverable
    style={{ width: 350 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    {/* <h3 className="text-3xl font-bold underline">{product.name}</h3> */}
    <h1 className="text-3xl font-bold underline">
      {product.name}
    </h1>
    <h3 className="text-5xl">
          Brand: {product.brand}
        </h3>
        <h3 className="   font-normal text-gray-700 dark:text-gray-400">
          price: {product.price}
        </h3>
        <h3 className="font-normal text-gray-700 dark:text-gray-400">
          quantity: {product.quantity}
        </h3>
        <h3 className="font-normal text-gray-700 dark:text-gray-400">
          material: {product.material}
        </h3>
        <h3 className="font-normal text-gray-700 dark:text-gray-400">
          color: {product.color}
        </h3>
        <h3 className="font-normal text-gray-700 dark:text-gray-400">
          sportsType: {product.sportsType}
        </h3>
        {role != "seller" ? (
          <div className="flex justify-end space-x-1">
            <Link to={`/${role}/updateProduct/${product._id}`}>
              <Button  style={{margin:3,backgroundColor:'#1e293b' ,color:'wheat'}} >
                update
              </Button>
            </Link>
            <Link to={`/${role}/createDuplicate/${product._id}`}>
              <Button type="primary" style={{backgroundColor:'#1e293b'}} >
                Create Variant
              </Button>
            </Link>
            <Button
            type="primary"
            style={{backgroundColor:'#1e293b'}}
              // className="px-2 py-2 rounded-md bg-red-600"
              onClick={() => deleteFunc(product._id)}
            >
              Delete
            </Button>
          </div>
        ):
        (
          <div className="flex justify-end">
            <Button
            type="primary"
              onClick={() => setOpenModal(!openModal)}
              className="px-4 py-2 rounded-md bg-green-700"
            >
              Sell
            </Button>
          </div>
        )
        }

        
    
  </Card>
    
  )
}

export default ProductCard
