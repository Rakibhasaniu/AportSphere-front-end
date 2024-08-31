import { useGetAllProductQuery } from "../../redux/features/product/productApi";

const AllProducts = () => {
    const{data} = useGetAllProductQuery(undefined);
    console.log(data)
    return (
        <div>
            <h1>Products</h1>
        </div>
    );
};

export default AllProducts;