import { z } from "zod";


export const addProductSchema = z.object({
    name: z.string({required_error:'Name is required'}),
    price: z.string().min(1, 'Price is required'),
    quantity: z.string().min(1, 'Quantity is required'),
    condition: z.string().min(1, 'Condition is required'),
    sportsType: z.string().min(1, 'sportsType is required'),
    brand: z.string().min(1, 'Brand is required'),
    size: z.string().min(1, 'Size is required'),
    material: z.string().min(1, 'Material is required'),
    color: z.string().min(1, 'Brand is required'),
    weight: z.string().min(1, 'Weight is required'),
    
})