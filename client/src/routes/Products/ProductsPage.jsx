import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import apiRequest from "../../lib/apiRequest";
import { Link } from "react-router-dom";
import baseURL from "../../lib/basicUrlRequest";

function ProductsPage() {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await apiRequest.get("/products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
        setError(err.response.data.message);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-12 w-[90vw] m-auto flex flex-col">
      <h1 className="text-zinc-800 text-4xl md:text-5xl uppercase font-bold mb-12 text-center">
        Our Products
      </h1>
      <div className="flex justify-center flex-wrap gap-5 ">
        {loading ? (
          <LoadingSpinner />
        ) : (
          products.map((product) => (
            <Link
              to={`/${product.id}`}
              key={product.id}
              className=" flex flex-col group overflow-hidden  w-[200px] md:w-[210px] lg:w-[220px] shadow-sm rounded-lg border-b-4 border-b-pinky"
            >
              <div className="overflow-hidden border-t-md">
                <img
                  src={baseURL + "/Images/" + product.imgs[0]}
                  className="group-hover:scale-105 transition-all w-full"
                />
              </div>
              <div className="text-sm md:text-md py-3 px-5 border-2 border-pink-400 border-t-0 border-b-0 flex justify-between">
                <span className=" text-zinc-900 capitalize">
                  {product.title}
                </span>
                <span className="font-bold">
                  {product.price} D.T
                </span>

              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
