/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row } from "antd";
import { useDeleteProductMutation, useGetAllProductQuery } from "../../redux/features/product/productApi";
import ProductCard from "./ProductCard";

const AllProducts = () => {
    const{data,isError, refetch} = useGetAllProductQuery(undefined);
    

      const [deleteProduct] = useDeleteProductMutation()
      const deleteFunc = async (id: string) => {
        try {
          const data = await deleteProduct(id);
          console.log(data)
          refetch()
        } catch (error) {
          console.error("Failed to delete product", error);
        }
      };
      if (!isError && !data) {
        return <h1 className="text-3xl"> Loading....</h1>;
    }
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto' }} >
        <Row gutter={[16, 16]} justify="center">
            {data?.data.map((product: any) => (
                <Col xs={24} sm={12} md={8} key={product._id}>
                    <ProductCard product={product} deleteFunc={deleteFunc} />
                </Col>
            ))}
        </Row>
    </div>
    );
};

export default AllProducts;