/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row } from "antd";
import { useGetAllProductQuery } from "../../redux/features/product/productApi";
import ProductCard from "./ProductCard";

const AllProducts = () => {
    const{data,isError} = useGetAllProductQuery(undefined);
    if (!isError && !data) {
        return <h1 className="text-3xl"> Loading....</h1>;
      }
    //   const result = data.data.map((item:any) => console.log(item))
    // console.log(data.data)
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[16, 16]} justify="center">
            {data?.data.map((product: any) => (
                <Col xs={24} sm={12} md={6} key={product._id}>
                    <ProductCard product={product} />
                </Col>
            ))}
        </Row>
    </div>
    );
};

export default AllProducts;