/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import baseURL from "../lib/basicUrlRequest"


function ProductCard({product}) {
  return (
    <Link
      to={`/${product.id}`}
      key={product.id}
      className="flex flex-col group overflow-hidden !min-w-[200px] w-[200px] md:w-[250px] lg:w-[300px] "
    >
      <div className="card border-2 md:border-4 lg:border-8 border-white overflow-hidden">
        <img
          src={baseURL + "/Images/" + product.imgs[0]} //w-[200px] h-[270px] lg:h-[400px] lg:w-[300px]
          className="group-hover:scale-105 transition-all w-full "
        />{" "}
      </div>
      <h3 className="text-sm sm:text-md md:text-xl text-center pt-1 pb-2 md:pt-1 md:pb-3 bg-white text-pinky capitalize">
        {product.title}
      </h3>
    </Link>
  );
}

export default ProductCard;
