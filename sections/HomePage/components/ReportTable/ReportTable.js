import { useUserContext, useSalesContext } from '../../../../sharedComponents'
import ReportTableFooter from './ReportTableFooter';
import { hours, data } from '../../../../data/fakeData'

const ReportTable = ({ mockData, showTable }) => {
  
  const reports = useSalesContext();
  // const reports = data;
  const tableHourHeaders = hours;

  const TableBuilder = () => (
    <div className="flex justify-center mt-8 mb-12">
    <table className="border-collapse w-full">
      <thead>
        <tr className="text-center bg-emerald-500 font-bold">
          <td className="rounded-tl">Location</td>
          {tableHourHeaders.map((i, idx) => (
            <td 
            key={i+idx} 
            className="p-2 font-bold last:rounded-tr"
            >
              {i}
            </td>
          ))}
        </tr>
      </thead>
      
      <tbody>
      {reports.map((report, idx) => (
        <tr key={idx+report.location} className="odd:bg-emerald-400 even:bg-emerald-300">
          <td 
            className="p-1 pl-2 text-left border border-gray-800"
          >
            {report.location}
          </td>
          {report.hourlySales.map((sale, idx) => (
            <td 
              key={idx+'_sales'} 
              className="text-center border border-gray-800"
            >
              {sale}
            </td>
          ))}
        <td className="text-center border border-gray-800">
          {report.hourlySales.reduce((accu, sale) => {
            accu += sale;
            return accu;
            },0)}
        </td>
      </tr>
      ))}
      </tbody>

          <ReportTableFooter data={reports}/>
    </table>
    </div>
  )
  
  return (
    <>
      {showTable
        ? <TableBuilder />
        : <h2 className="text-center text-2xl m-12 font-sans">
            No Cookie Stands Available
          </h2>
      }
    </>
  )
}

module.exports = ReportTable;
