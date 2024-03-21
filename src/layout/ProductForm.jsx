import axios from "axios";
import { useState } from "react";

export default function ProductForm() {
  const [product, setProduct] = useState({
    name: '',
    Description: '',
    price: '',
    sizes: [],
    colors: [] ,
    stock: '',
    imageUrl: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }

  const handleFileChange = (e) => {
    setProduct({ ...product, imageUrl: e.target.files[0] });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let key in product) {
      formData.append(key, product[key]);
    }

    try {
      const response = await axios.post('http://localhost:9000/product/addProducts', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        }
      });
      console.log(response.data);
      alert('Product created successfully');
    } catch (error) {
      console.error(error);
      alert('Error creating product');
    }
  }

  return (
    <div className="p-[5%] border w-6/6 min-w-[400px] max-w-[50%] max-h-[1069px] mx-auto mt-[8%] text-center">
      <h1>Product Form</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label>
          <span>Product Image</span>
          <input
            type="file"
            name="imageUrl"
            onChange={handleFileChange}
          />
        </label>
        <label>
          <span>Product Name</span>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Description</span>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Price</span>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Size</span>
          <input
            type="text"
            name="size"
            value={product.size}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Color</span>
          <input
            type="text"
            name="color"
            value={product.color}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Stock</span>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
          />
        </label>
  
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
