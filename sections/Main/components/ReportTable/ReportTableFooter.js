const ReportTableFooter = ({ data }) =>  {

  const getTotalHourlySales = (data) => (
  data.reduce((accu, report) => {
    report.hourly_sales.forEach((hour, i) => {
      if (!accu[i]) {
        accu[i] = hour
      }
      else {
        accu[i] += hour
      }
    })
    return accu
  },[])
  );


  const hourlySales = getTotalHourlySales(data);

  const TotalSales = hourlySales.reduce((accu, sales) => {
    accu += sales;
    return accu
  }, 0)

  return (
    <tfoot className="bg-emerald-500">
    <tr>
      <td className="text-center font-bold border border-gray-800">
        Totals
      </td>
        {hourlySales.map((sales, idx) => (
          <td 
            key={idx+'_'+sales}
            className="border border-gray-800 text-center font-bold"
          >
            {sales}
          </td>
        ))}
        <td className="text-center border border-gray-800 font-bold">{TotalSales}</td>
    </tr>
  </tfoot>
  )
}

export default ReportTableFooter;
