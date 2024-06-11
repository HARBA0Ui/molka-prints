import { useState } from "react";
import Title from "../dashboard/components/Title";
import apiRequest from "../../lib/apiRequest";

const CreateProduct = () => {
  const [images, setImages] = useState();

  const handleSubmit = async () => {
    try {
      const formData= new FormData()
      formData.append("images", images)
      const res= await apiRequest.post("/products/", formData)
      console.log("res: ", res)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col w-full items-center">
      <Title title="Create a new product" />
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td className="p-2 mb-1">
                <label htmlFor="title">Title</label>
              </td>
              <td className="p-2 mb-1">
                <input
                  type="text"
                  className="h-14 w-96 px-4"
                  name="title"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="p-2 mb-1">
                <label htmlFor="desc">Description</label>
              </td>
              <td className="p-2 mb-1">
                <textarea
                  type="text"
                  className="h-28 text-sm w-96 p-2 resize-none"
                  name="desc"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="p-2 mb-1">
                <label htmlFor="price">Price</label>
              </td>
              <td className="p-2 mb-1">
                <input
                  type="number"
                  className="h-14 w-96 px-4"
                  name="price"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="p-2 mb-1">
                <label htmlFor="images">Images</label>
              </td>
              <td className="p-2 mb-1">
                <input
                  type="file"
                  name="images"
                  multiple
                  onChange={(e) => setImages(e.target.files[0])}
                  required
                  className="file::[padding: 0.5em;border-radius: 3px;background: pink;]"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
