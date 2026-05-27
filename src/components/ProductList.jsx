import { useState } from "react";
import SearchBar from "./forms/SearchBar"
import ProductTable from "./products/ProductTable";

const PRODUCTS = [
    {category: 'Fruits', price: '$1', stocked: true, name: 'Apple'},
    {category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit'},
    {category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit'},
    {category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach'},
    {category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin'},
    {category: 'Vegetables', price: '$1', stocked: true, name: 'Peas'}
]
function ProductList() {
    const [showStockedOnly, setShowStockedOnly] = useState(false);
    const [search, setSearch] = useState('');
    const visibleProducts = PRODUCTS.filter(product => {
        if(showStockedOnly && !product.stocked){
            return false;
        }
        if(search && !product.name.toLowerCase().includes(search.toLowerCase())){
            return false;
        }
        return true;
    });

    return <div className="flex flex-col justify-center items-center mt-5 gap-4">
        <SearchBar
        search={search}
        onSearchChange={setSearch} 
        showStockedOnly={showStockedOnly} 
        onStockedOnlyChange={setShowStockedOnly} />
        <ProductTable products={visibleProducts} />
    </div>
}

export default ProductList;