import { Button } from "./Button";

/**
 *
 * @export
 * @param 
 * @param {string} image 
 * @param {string} title 
 * @param {string} description 
 * @param {string} href 
 * @param {string} buttonLabel 
 * @returns {JSX.Element} 
 */
export function Card({
    image,
    title,
    description,
    href,
    buttonLabel
}) {

    const showButton = !!(href && buttonLabel);
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-xl">
      {image && <img
        className="w-full"
        src={image}
      /> }
      <div className="px-6 py-4">
        {title && <div className="font-bold text-xl mb-2">{title}</div>}
        {description && <p className="text-gray-700 text-base">
          {description}
        </p>}
      </div>
      <div className="px-6 pt-4 pb-2">
        {showButton && <Button href={href} variant='primary' className="inline-block bg-indigo-400 rounded-lg p-2 m-1 cursor-pointer">
          {buttonLabel}
        </Button> }
        
      </div>
    </div>
  );
}
