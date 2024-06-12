import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import baseURL from "../../../../lib/basicUrlRequest";
import apiRequest from "../../../../lib/apiRequest";

/* eslint-disable react/prop-types */
function Product({ product: p }) {
  const navigate= useNavigate()
  const handleDelete = async () => {
    try {
      const res = await apiRequest.delete("/products/" + p.id);
      console.log(res)
      navigate("/dashboard")
    } catch(err) {
      console.log(err)
    }
  };
  return (
    <>
      <tr className="rounded-md bg-white shadow-md p-4 text-center text-lg flex justify-between items-center w-[750px]">
        {/* skeleton????x */}
        <img
          src={baseURL + "/Images/" + p.imgs[0]}
          className="w-20 h-24 border border-zinc-400"
        />
        <td>{p.title}</td>
        <td>{p.price}$</td>
        <td className="flex gap-4">
          <Link className="text-white p-2 rounded-full bg-pinky hover:bg-darkPruple transition-all hover:scale-105">
            <AiFillEdit className="h-6 w-6 pointer-events-none" />
          </Link>
          <button
            onClick={handleDelete}
            className="text-white p-2 rounded-full bg-pinky hover:bg-darkPruple transition-all hover:scale-105"
          >
            <AiFillDelete className="h-6 w-6 pointer-events-none" />
          </button>
        </td>
      </tr>
    </>
  );
}
export default Product;
