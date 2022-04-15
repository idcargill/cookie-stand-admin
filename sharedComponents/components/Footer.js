import { useResource } from '../../sharedComponents/auth';

const Footer = () => {
  const { resources } = useResource();
  const s = resources?.length > 1 ? 's' : '';

  return (
    <footer className="bg-emerald-500 p-4 text-sm text-left">
      <p>
        {resources
          ? `${resources.length} Location${s} World Wide`
          :  'No Locations'
        }</p>
    </footer>
  )
}

export default Footer

