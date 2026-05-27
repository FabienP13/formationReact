import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({products}) {
    const rows = [];
    let lastCategory = null;

    for (let product of products){
        if(product.category !== lastCategory){
            rows.push(<ProductCategoryRow key={product.category} name={product.category}/>)
        }
        lastCategory = product.category;
        rows.push(<ProductRow key={product.name} product={product}/>)
    }
    return <table className="table-auto">
        <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
            <tr>
                <th scope="col" className="px-6 py-3 font-medium">Nom</th>
                <th scope="col" className="px-6 py-3 font-medium">Prix</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}

export default ProductTable;