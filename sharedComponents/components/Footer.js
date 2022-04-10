import { useSalesContext } from '../../sharedComponents'

const Footer = () => {
  const salesRecord = useSalesContext();
  const s = salesRecord > 1 ? 's' : '';

  return (
    <footer className="bg-emerald-500 p-4 text-sm text-left">
      <p>
        {salesRecord
          ? `${salesRecord.length} Location${s} World Wide`
          :  'No Locations'
        }</p>
    </footer>
  )
}

export default Footer

// fixed bottom-20 w-full