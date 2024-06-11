import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Product({ product: p }) {
  return (
    <tr className="rounded-md bg-white shadow-md p-6 text-center text-lg flex justify-between items-center w-[750px]">
      <td id="image" className="w-20 h-20 border border-black">img</td>
      <td>{p.title}</td>
      <td>{p.price}$</td>
      <td className="flex gap-4">
        <Link className="text-white p-2 rounded-full bg-pinky hover:bg-darkPruple transition-all hover:scale-105">
          <AiFillEdit className="h-6 w-6 pointer-events-none" />
        </Link>
        <Link className="text-white p-2 rounded-full bg-pinky hover:bg-darkPruple transition-all hover:scale-105">
          <AiFillDelete className="h-6 w-6 pointer-events-none" />
        </Link>
      </td>
    </tr>
  );
}

export default Product;
