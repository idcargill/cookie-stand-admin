
const CookieForm = ({ handleChange, handleSubmit }) => (
    <div className="bg-emerald-300 rounded p-3">
      <h2 className="text-center font-medium p-2 text-lg">Create Cookie Stand</h2>
      
      <form onSubmit={handleSubmit} onChange={handleChange} className="flex-col p-2">
        <label className="flex"><span className="mr-1">Location</span>
          <input 
            className="w-full"
            name="location" 
            type="text" 
            placeholder='Barcelona'
            />
          </label>
          <div className="flex mt-12 text-center">
            <label><span className="text-sm ">Minimum Customers per Hour</span>
              <input
                className="w-56"
                name="minCustomer" 
                type="number" 
                min="0" 
                placeholder='0' 
                />
            </label>
            <label><span className="text-sm text-center">Maximum Customers per Hour</span>
              <input
                className="w-56"
                name="maxCustomer" 
                type="number" 
                min="0" 
                placeholder='0' 
                />
            </label>
            <label><span className="text-sm text-center ">Average Cookies per Sale</span>
              <input
                className="w-56" 
                name="avgSales" 
                type="number"
                step="0.1"
                min="0" 
                placeholder='0'
                />
            </label>
            <button 
              className="bg-emerald-500 p-4 w-4/12"
              type="submit" >
                Create
            </button>
          </div>
      </form>
    </div>
  );

export default CookieForm;
