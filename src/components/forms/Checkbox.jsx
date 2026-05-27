/**
 * Description placeholder
 *
 * @param {{ checked: any; onChange: any; label: any; id: any; }} param0 
 * @param {boolean} param0.checked 
 * @param {(v: boolean) => void} param0.onChange 
 * @param {string} param0.label 
 * @param {int} param0.id 
 * @returns {*} 
 */
function Checkbox({ checked, onChange, label,id }) {
  return (
    <>
      <label htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="w-4 h-4 border border-default-medium bg-neutral-secondary-medium m-1 rounded-full"
        />
        {label}
      </label>
    </>
  );
}

export default Checkbox;
