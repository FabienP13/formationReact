import { useEffect } from "react";

/**
 * Ligne produit dans un tableau a 2 colonnes (nom / prix)
 *
 * @param {{name: string, stocked: boolean, price: string}} product 
 */
function ProductRow({product}) {

    throw new Error("erreur");
    

    const style = product.stocked ? 'undefined' : 'text-red-400';
    return <tr  className="bg-neutral-primary border-b border-default">
        <td className={`${style} px-6 py-4`}>{product.name}</td>
        <td className="px-6 py-4">{product.price}</td>
    </tr>
}

export default ProductRow;