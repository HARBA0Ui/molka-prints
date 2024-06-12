import { useEffect, useState } from "react";
import apiRequest from "../../../../lib/apiRequest";
import { CgSpinnerTwo, CgMathPlus } from "react-icons/cg";
import { Link } from "react-router-dom";
import ProductsTable from "../ProductsTable/ProductsTable"
import Title from "../../../../components/Title";

function Dashboard() {
  const [products, setProducts] = useState(undefined);


  useEffect(() => {
    const fetchData = async () => {
      const res = await apiRequest.get("/products");
      setProducts(res.data);
      console.log(res.data)
    };

    fetchData()
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <Title title="Admin Dashboard"/>
      <Link to="/dashboard/create" className="flex mb-10 gap-2 text-lg items-center px-4 py-2 rounded-full text-white bg-darkPruple hover:bg-pinky transition-all"><CgMathPlus className="w-5 h-5"/> Create a new product</Link>
      {!products ? (
        <CgSpinnerTwo className="w-6 h-6 animate-spin mx-auto" />
      ) : (
        <ProductsTable products={products} />
      )}
    </div>
  );
}

export default Dashboard;
