/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form";
import FormWrapper from "../../components/form/FormWrapper";
import PInput from "../../components/form/PInput";
import { Button, Col, Row } from "antd";
import PSelect from "../../components/form/PSelect";

const AddProducts = () => {
    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }
    const nameOptions = [
        {
        value:'New',
        label:'New',
        },
        {
        value:'Used',
        label:'Used',
        },

]

    return (
        <FormWrapper onSubmit={onSubmit}>
            <h1>Add Products</h1>
            <Row>
      <Col span={12}>
      <PInput type="text" name="name" label="Name" />
            <PInput type="number" name="price" label="Price" />
            <PInput type="number" name="quantity" label="Quantity" />
            <PInput type="text" name="sportsType" label="SportsType" />
            <PInput type="text" name="brand" label="Brand" />
            
            
      </Col>
      <Col span={12}>
      <PInput type="text" name="size" label="Size" />
      <PInput type="text" name="material" label="Material" />
            <PInput type="text" name="color" label="Color" />
            {/* <PInput type="text" name="condition" label="Condition" /> */}
            <PSelect label="Condition" name="condition" options={nameOptions} />

            <PInput type="text" name="weight" label="Weight" />
      </Col>
      <Button htmlType="submit">Submit</Button>

        
    </Row>
    </FormWrapper>
            
            
           
            
            
        
       
    );
};

export default AddProducts;

// import { Label, Select, TextInput } from "flowbite-react";

// import { useForm } from "react-hook-form";
// import PInput from "../../components/form/PInput";
// import { Select } from "antd";
// // import { useAddProductMutation } from "../../redux/api/productApi/productApi";

// const AddProduct = () => {
//   const { register, handleSubmit } = useForm();

// //   const [AddProduct] = useAddProductMutation();

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const onSubmit = async (data: any) => {
//     if (!data.size) {
//       delete data.size;
//     }
//     data.price = parseInt(data.price);
//     data.quantity = parseInt(data.quantity);
//     data.size = parseInt(data.size);
//     data.weight = parseFloat(data.weight);
//     if (!data.size) {
//       delete data.size;
//     }
//     if (!data.weight) {
//       delete data.weight;
//     }
//     console.log(data);
//     const res = await AddProduct(data);

//     if ("data" in res) {
//       alert("product added Successfully");
//     }
//     if ("error" in res) {
//       alert("product lisiting failed!");
//       return;
//     }
//     window.location.reload();
//   };

//   return (
//     <div className="mx-auto mt-5 md:mt-20">
//       <h1 className="text-2xl text-blue-950 font-bold my-8">Add Product</h1>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex max-w-md flex-col gap-4 mx-auto"
//       >
//         <div className="grid grid-cols-6 gap-3">
//           <div className="col-span-4">
//             <div className="mb-2 block">
//               {/* <Label htmlFor="name" value="Product name:" /> */}
//             </div>
//             <PInput
              
//               type="text"
//               name="name"
             
//             />
//           </div>
//           <div className="col-span-2">
//             {/* <div className="mb-2 block">
//               <Label htmlFor="brand" value="Brand:" />
//             </div> */}
//             <PInput
//               type="text"
//               name="brand"
              
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-6 gap-3">
//           <div className="col-span-3">
//             {/* <div className="mb-2 block">
//               <Label htmlFor="price" value="Price (tk):" />
//             </div> */}
//             <PInput
//               type="text"
//               name="price"
             
//             />
//           </div>
//           <div className="col-span-3">
//             {/* <div className="mb-2 block">
//               <Label htmlFor="sportsType" value="Sports Type:" />
//             </div> */}
//             <PInput
//               type="text"
//               name="sportsType"
            
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-6 gap-3">
//           <div className="col-span-3">
//             {/* <div className="mb-2 block">
//               <Label htmlFor="quantity" value="Quantity:" />
//             </div> */}
//             <PInput
//               type="text"
//               name="quantity"
//             //   sizing="sm"
//             //   {...register("quantity")}
//             />
//           </div>
//           <div className="col-span-3">
//             {/* <div className="mb-2 block">
//               <Label htmlFor="condition" value="Condition:" />
//             </div> */}
//             <Select id="condition" {...register("condition")} >
//               <option>new</option>
//               <option>used</option>
//             </Select>
//           </div>
//         </div>
//         <div className="grid grid-cols-6 gap-3">
//           <div className="col-span-3">
//             {/* <div className="mb-2 block">
//               <Label htmlFor="material" value="Material:" />
//             </div> */}
//             <PInput
//               type="text"
//               name="material"
//             //   sizing="sm"
//             //   {...register("material")}
//             />
//           </div>
//           <div className="col-span-3">
//             {/* <div className="mb-2 block">
//               <Label htmlFor="color" value="Color:" />
//             </div> */}
//             <TextInput
//               id="color"
//               type="text"
//               sizing="sm"
//               {...register("color")}
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-6 gap-3">
//           <div className="col-span-3">
//             <div className="mb-2 block">
//               <Label htmlFor="size" value="Size (optional):" />
//             </div>
//             <TextInput
//               id="size"
//               type="text"
//               sizing="sm"
//               {...register("size")}
//             />
//           </div>
//           <div className="col-span-3">
//             <div className="mb-2 block">
//               <Label htmlFor="branch" value="Branch:" />
//             </div>
//             <TextInput
//               id="branch"
//               type="text"
//               sizing="sm"
//               {...register("branch")}
//             />
//           </div>
//           <div className="col-span-3">
//             <div className="mb-2 block">
//               <Label htmlFor="weight" value="Weight(KG) (optional):" />
//             </div>
//             <TextInput
//               id="weight"
//               type="text"
//               sizing="sm"
//               {...register("weight")}
//             />
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="px-5 py-3 bg-blue-950 text-white rounded-2xl"
//         >
//           Add
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;
