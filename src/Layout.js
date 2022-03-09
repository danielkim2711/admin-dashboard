import { Layout as LayoutItem } from 'react-admin';
import { Menu } from './Menu';

export const Layout = (props) => <LayoutItem {...props} menu={Menu} />;
