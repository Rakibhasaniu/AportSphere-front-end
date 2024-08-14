import { useGetSalesQuery } from "../../redux/features/sales/salesApi";

const GetAllSales = () => {

    const {data} = useGetSalesQuery(undefined);
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default GetAllSales;