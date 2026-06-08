
/**
 * Type erreur
 *
 * @export
 * @param {"danger","warning","info"} type
 */
export function Alert({type = 'info', children}) {

  return (
    <div
      className={`border w-fit m-auto px-4 my-3 py-3 rounded relative ${getAlertType(type)}`}
      role="alert"
    >
      <span className="block sm:inline">{children}</span>
      
    </div>
  );
}

function getAlertType(type) {
    if(type === "danger") {
        return  "bg-red-100 border-red-400 text-red-700";
    }
    if(type === "warning") {
        return "bg-yellow-100 border-yellow-400 text-yellow-700";
    }
    if(type === "info") {
        return "bg-blue-100 border-blue-400 text-blue-700"
    }
}
