import React, { useState, useEffect } from "react";
import apiRequest from "../../lib/apiRequest";
import { useParams } from "react-router-dom";
import baseURL from "../../lib/basicUrlRequest";
import { CgSpinnerTwo } from "react-icons/cg";

function ProductIdPage() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState();

  const cityOptions = [
    "Ariana",
    "Beja",
    "Ben Arous",
    "Bizerte",
    "Gabes",
    "Gafsa",
    "Jendouba",
    "Kasserine",
    "Kef",
    "Mahdia",
    "Manouba",
    "Monastir",
    "Nabeul",
    "Sfax",
    "Sidi Bouzid",
    "Sousse",
    "Siliana",
    "Tataouine",
    "Tozeur",
    "Tunis",
    "Zaghouan",
    "Medenine",
    "Kebili",
    "Kairouan",
  ];

  useEffect(() => {
    const getProductById = async () => {
      try {
        setIsLoading(true);
        const res = await apiRequest.get("/products/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    getProductById();
  }, []);

  return (
    <div className="m-auto flex justify-center items-center min-h-[70vh] w-[70vw] py-20">
      {isLoading ? (
        <div className="h-full w-full flex justify-center items-center flex-1">
          <CgSpinnerTwo className="w-6 h-6 animate-spin mx-auto text-pinky" />
        </div>
      ) : (
        <div className="flex justify-center items-center w-full gap-32">
          {/* images container  */}
          <div className="flex justify-center items-center">
            <img
              className="w-[400px] max-h-[580px]"
              src={`${baseURL}/Images/${product.imgs[0]}`}
            />
          </div>
          {/* details container  */}
          <div className="flex flex-col gap-4 w-[550px]">
            <h1 className="text-5xl text-zinc-900 font-bold ">
              {product.title}
            </h1>
            <h2 className="text-pinky text-4xl font-bold">{product.price}DT</h2>
            <p className="text-lg text-gray-900 w-11/12">
              {product.desc} Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nemo optio architecto quos repudiandae quidem sit.
            </p>
            <p className="text-black font-bold">
              To place an order, please fill in these fields:
            </p>
            <form className="flex flex-col gap-5">
              <input
                type="email"
                id="email"
                name="email"
                className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-pink-400 text-zinc-900 h-14 w-4/5"
                placeholder="Full Namex..."
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-pink-400 text-zinc-900 h-14 w-4/5"
                placeholder="Tel Number..."
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-pink-400 text-zinc-900 h-14 w-4/5"
                placeholder="Email..."
                required
              />
              <select
                name="city"
                className="h-14 px-4 w-4/5"
                aria-label="city"
                placeholder="Enter your city"
              >
                <option value="" disabled selected>
                  Enter your city
                </option>
                {cityOptions.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>

                <article className="rounded-md bg-white shadow-md p-2 px-4 w-4/5 flex items-center justify-between">
                  {/* skeleton????x */}
                  <img
                    src={baseURL + "/Images/" + product.imgs[0]}
                    className="w-20 h-24 border border-zinc-400 rounded-sm"
                  />
                  <div>
                    {product.title}
                  </div>
                  <div className="font-bold">{product.price}DT</div>
                </article>

              <div>
                <button
                  type="submit"
                  id="btn"
                  className="w-4/5 px-8 py-3 font-semibold bg-pinky text-white rounded before:rounded focus:outline-none shadow-md"
                >
                  Order
                </button>
              </div>
            </form>
          </div>
          {/* details container  */}
        </div>
      )}
    </div>
  );
}

export default ProductIdPage;
