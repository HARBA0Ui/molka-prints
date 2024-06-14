import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import baseURL from "../../../../lib/basicUrlRequest";
import apiRequest from "../../../../lib/apiRequest";
import { memo } from "react";

/* eslint-disable react/prop-types */
function Product({ product: p }) {
  const handleDelete = async () => {
    try {
      const res = await apiRequest.delete("/products/" + p.id);
      console.log(res);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <article className="rounded-md bg-white shadow-md p-4 text-center text-lg flex justify-between items-center w-[750px]">
        {/* skeleton????x */}
        <img
          src={baseURL + "/Images/" + p.imgs[0]}
          className="w-20 h-24 border border-zinc-400"
        />
        <div>{p.title}</div>
        <div>{p.price}$</div>
        <div className="flex gap-4">
          <Link to={`/dashboard/update/${p.id}`} className="text-white p-2 rounded-full bg-pinky hover:bg-darkPruple transition-all hover:scale-105">
            <AiFillEdit className="h-6 w-6 pointer-events-none" />
          </Link>
          <button
            onClick={handleDelete}
            className="text-white p-2 rounded-full bg-pinky hover:bg-darkPruple transition-all hover:scale-105"
          >
            <AiFillDelete className="h-6 w-6 pointer-events-none" />
          </button>
        </div>
      </article>
    </>
  );
}
export default memo(Product);
