// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Sensor 1',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Sensor 2',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Sensor 3',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
];

export default navConfig;
