import Checkbox from "./Checkbox";
import Input from "./Input";
import InputRange from "./InputRange";

function SearchBar({showStockedOnly,onStockedOnlyChange,search,onSearchChange,priceRange,onPriceRangeChange}) {
    return <div className="flex flex-col gap-2">
        <Input value={search} onChange={onSearchChange} placeholder="Rechercher..."/>
        <InputRange id="prix" label="Prix" value={priceRange} onChange={onPriceRangeChange}/>
        <Checkbox 
        id="stocked" 
        checked={showStockedOnly} 
        onChange={onStockedOnlyChange} 
        label="N'afficher que les produits en stock"/>
    </div>
}

export default SearchBar;