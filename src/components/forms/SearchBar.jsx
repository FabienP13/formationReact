import Checkbox from "./Checkbox";
import Input from "./Input";

function SearchBar({showStockedOnly,onStockedOnlyChange,search,onSearchChange}) {
    return <div className="flex flex-col gap-2">
        <Input value={search} onChange={onSearchChange} placeholder="Rechercher..."/>
        <Checkbox 
        id="stocked" 
        checked={showStockedOnly} 
        onChange={onStockedOnlyChange} 
        label="N'afficher que les produits en stock"/>
    </div>
}

export default SearchBar;