import { useEffect, useState } from "react";
import apiRequest from "../../../../lib/apiRequest";
import { Link } from "react-router-dom";
import ProductsTable from "../ProductsTable/ProductsTable";
import Title from "../../../../components/Title";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import { CgMathPlus, CgSearch } from "react-icons/cg";

function Dashboard() {
  const [products, setProducts] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [searchField, setSearchField] = useState("");
  const [error, setError] = useState("");

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
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    // console.log("search rerender")
    setError("");
    e.preventDefault();
    setLoading(true);
    if (searchField == "") {
      await fetchData();
    } else {
      try {
        const res = await apiRequest.get(`/products/search/${searchField}`);
        setProducts(res.data.product);
      } catch (err) {
        console.log(err);
        setError(err.response.data.message);
      }
    }
    setLoading(false);
  };

  //   addEventListener("keydown", async (e)=>{
  //   if(e.key == "Enter"){
  //     await handleClick()
  //   }
  // })

  return (
    <div className="w-full flex flex-col items-center">
      <Title title="Admin Dashboard" />
      <div className="flex justify-between items-center w-[700px] mb-10">
        <Link
          to="/dashboard/create"
          className="flex  gap-2 text-lg items-center px-4 py-2 rounded-full text-white bg-darkPruple hover:bg-pinky transition-all"
        >
          <CgMathPlus className="w-5 h-5" /> Create a new product
        </Link>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center bg-white gap-4 h-fit py-2 px-4 ">
            <input
              type="text"
              placeholder="Search..."
              value={searchField}
              onChange={(e) => setSearchField(e.target.value)}
            />
            <button
              type="submit"
              className="cursor-pointer transition-all p-2 pr-[10px] rounded-full flex justify-center items-center text-white bg-pinky hover:bg-darkPruple "
            >
              <CgSearch className="w-5 h-5 " />
            </button>
          </div>
        </form>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : error || products.length == 0 ? (
        <span className="text-2xl mt-3">No products has been found!</span>
      ) : (
        !error && !loading && <ProductsTable products={products} />
      )}
    </div>
  );
}

export default Dashboard;
