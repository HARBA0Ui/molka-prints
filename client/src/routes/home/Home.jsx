import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Banner from "../../components/Banner";

import { FaCaretRight } from "react-icons/fa";

import apiRequest from "../../lib/apiRequest";
import { CgSpinnerTwo } from "react-icons/cg";
import ProductCard from "../../components/ProductCard";

function Home() {
  const [products, setProducts] = useState(undefined);
  const [loading, setLoading] = useState(true);
  // const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await apiRequest.get("/products");
        setProducts(res.data.slice(0, 3));
        // console.log("res.data: ", res.data);
      } catch (err) {
        console.log(err);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Banner />
      <div className="flex mb-20">
        <div className="flex flex-col bg-pinky w-[90vw] md:w-[80vw] lg:w-[75vw] min-h-[680px] m-auto text-white py-6 md:py-10">
          <h2 className="text-3xl md:text-5xl text-center pb-6 md:pb-12 font-bold uppercase tracking-wide">
            Our Latest Products
          </h2>
          {loading ? (
            <div className="h-full w-full flex justify-center items-center flex-1">
              <CgSpinnerTwo className="w-6 h-6 animate-spin mx-auto text-white" />
            </div>
          ) : (
            <div className="flex justify-evenly flex-wrap gap-4 px-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
              ))}
            </div>
          )}

          <div className="flex justify-center pt-8 border-green-900">
            <Link
              to={"/products"}
              id="btn"
              className="mx-auto md:mx-0 group py-4 px-6 flex justify-center items-center gap-1 bg-white text-pinky hover:text-white  md:mt-2 font-medium text-xl"
            >
              View More
              <FaCaretRight className="group-hover:translate-x-2 w-5 h-5 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
