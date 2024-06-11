import Product from "../Product/Product";

/* eslint-disable react/prop-types */
function ProductsTable({ products }) {
  return (
    <div className="flex justify-center">
      <table>
        <tbody className="gap-4 flex flex-col">
          {products.map((p) => (
            <Product key={p.id} product={p} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;
