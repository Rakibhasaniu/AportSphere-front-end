/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button, Card, Flex, Typography } from 'antd';
const { Meta } = Card;
import React from 'react'



const ProductCard = ({product}:any) => {
    console.log(product)
    // console.log(product?.name)
    // const {brand,name,} = product;
  return (
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title={product.name} description={product.price} />
  </Card>
    
  )
}

export default ProductCard
