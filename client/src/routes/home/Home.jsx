import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Banner from "../../components/Banner";

import { CgSearch, CgPhone, CgInstagram } from "react-icons/cg";
import apiRequest from "../../lib/apiRequest";
import baseURL from "./../../lib/basicUrlRequest";
import LoadingSpinner from "../../components/LoadingSpinner";

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
  if (loading)
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <LoadingSpinner />;
      </div>
    );
  return (
    <div>
      <header>
        <nav className="bg-pinky w-full h-[15vh] flex my-auto justify-between items-center px-8 md:px-14 lg:px-40 shadow-md">
          <Link to={"/"}>
            <img
              src="/logo.jpg"
              className="w-20 h-20 rounded-full drop-shadow-md hover:scale-110 transition-all"
            />
          </Link>
          <form>
            <div className="w-[350px] flex items-center bg-white gap-4 h-fit py-2 px-4 rounded-full">
              <input type="text" placeholder="Search..." className="flex-1" />
              <button
                type="submit"
                className="cursor-pointer transition-all p-2 pr-[10px] rounded-full flex justify-center items-center text-white bg-pinky hover:bg-darkPruple "
              >
                <CgSearch className="w-5 h-5 " />
              </button>
            </div>
          </form>
        </nav>
      </header>

      <Banner />

      <div className="flex ">
        <div className="bg-pinky w-[90vw] md:w-[80vw] lg:w-[75vw] m-auto text-white py-16">
          <h2 className="text-3xl md:text-5xl text-center pb-12 font-bold uppercase tracking-wide">
            Our Latest Products
          </h2>
          <div className="flex justify-evenly  flex-wrap md:flex-nowrap gap-4 md:px-4">
            {products.map((product) => (
              <Link
                to={`/${product.id}`}
                key={product.id}
                className="flex flex-col group overflow-hidden"
              >
                <div className="card border-4 lg:border-8 border-white overflow-hidden">
                  <img
                    src={baseURL + "/Images/" + product.imgs[0]}
                    className="group-hover:scale-105 transition-all w-[200px] h-[270px] lg:h-[400px] lg:w-[300px] "
                  />{" "}
                </div>
                <h3 className="text-xl text-center pt-1 pb-2 md:pt-1 md:pb-3 bg-white text-pinky capitalize">
                  {product.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <footer className="w-full flex bg-pinky mt-24">
        <div className="w-[90vw] md:w-[75vw] h-[150px] m-auto text-white py-16 flex justify-between items-center">
          <Link to={"/"} className="group flex gap-4 items-center">
            <img
              src="/logo.jpg"
              className="w-20 h-20 rounded-full drop-shadow-md group-hover:scale-110 transition-all"
            />
            <span className="text-2xl">Molka Prints</span>
          </Link>
          <div>
            <h2 className="text-2xl uppercase w-fit mb-3">Contact</h2>
            <a
              href="https://www.instagram.com/molka_prints?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="flex items-center justify-start gap-3 mb-1"
              target="_blank"
            >
              <CgInstagram /> Instagram
            </a>
            <a className="flex items-center justify-start gap-3">
              <CgPhone /> +216 27 88 77 44
            </a>
          </div>
          <div className="text-xl uppercase hidden lg:block">
            Start Each Day With A Plan
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
