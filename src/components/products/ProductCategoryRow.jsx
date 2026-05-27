
/**
 * Ligne Tableau avec le nom de la catégorie
 *
 * @param {string} name 

 */
function ProductCategoryRow({name}) {
    return <tr className="bg-neutral-primary border-b border-default">  
        <td colSpan={2} className="p-2"><strong>{name}</strong></td>
    </tr>
}

export default ProductCategoryRow;