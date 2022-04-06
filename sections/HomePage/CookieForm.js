
const CookieForm = () => (
  <div>
    <h2>Create Cookie Stand</h2>
    <form>
      <label htmlFor="location">Location</label>
      <input name="location" type="text"></input>
      <label htmlFor="minCustomer">Minimum Customers per Hour</label>
      <input name="minCustomer" type="number" min="0"></input>
      <label htmlFor="maxCustomer">Maximum Customers per Hour</label>
      <input name="maxCustomer" type="number" min="0"></input>
      <label htmlFor="avgSales">Average Cookies per Sale</label>
      <input name="avgSales" type="number" min="0"></input>
      <button type="button">Create</button>
    </form>
  </div>
)

export default CookieForm;
