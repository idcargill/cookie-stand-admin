export const DescriptionText = () => (
  <>
    <h3 className="p-2 font-medium text-lg text-left">Current Data Wiring</h3>
    <div className="flex">
      <p className="p-2 m-2 bg-emerald-50 rounded-md mt-8 text-left w-64">
        The current data table is mounted with fake data to simulate the CSS layout provided by photo snapshots.<br></br> 
      </p>
      <p className="p-2 m-2 bg-emerald-50 rounded-md mt-8 text-left w-64">
        The table can be made static to match screen shots by switching the reports in the ReportTable component to data instead of use context. 
      </p>
      <p className="p-2 m-2 bg-emerald-50 rounded-md mt-8 text-left w-64">
          Sales data is mapped to city names or to static default data.
          Enter a city name in the screen shot to get matching data.
      </p>

      <p className="p-2 m-2 bg-emerald-50 rounded-md mt-8 text-left w-64">
        REPORT TABLE<br></br>sections -> HomePage -> components -> ReportTable -> ReportTable.js line 8
        
      </p>
    </div>
  </>
)




