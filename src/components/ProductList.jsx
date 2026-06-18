import { useState } from "react";
import SearchBar from "./forms/SearchBar";
import ProductTable from "./products/ProductTable";
import { ErrorBoundary, getErrorMessage } from "react-error-boundary";
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];
function ProductList() {
  const [showStockedOnly, setShowStockedOnly] = useState(false);
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState(5);

  const visibleProducts = PRODUCTS.filter((product) => {
    if (showStockedOnly && !product.stocked) {
      return false;
    }
    if (search && !product.name.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    if (priceRange && product.price > `$${priceRange}`) {
      return false;
    }
    return true;
  });

  return (
    <div className="flex flex-col justify-center items-center mt-5 gap-4">
      <SearchBar
        search={search}
        onSearchChange={setSearch}
        showStockedOnly={showStockedOnly}
        onStockedOnlyChange={setShowStockedOnly}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
      />
      <ErrorBoundary 
        FallbackComponent={AlertError}
        
      >
        <ProductTable products={visibleProducts} />
      </ErrorBoundary>
    </div>
  );
}

function AlertError({error, resetErrorBoundary}){
  return <div role="alert" className="p-4 mb-4 text-sm text-fg-danger-strong bg-red-300 w-fit flex items-center rounded-md bg-danger-soft">
    {error.toString()}
    <button className="bg-indigo-400 rounded-md p-1 m-1 cursor-pointer" onClick={resetErrorBoundary}>Reset</button>
  </div>
}

export default ProductList;
