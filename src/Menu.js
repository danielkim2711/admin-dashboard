import * as React from 'react';
import { Menu as MenuItem, MenuItemLink } from 'react-admin';
import PetsIcon from '@mui/icons-material/Pets';
import PersonIcon from '@mui/icons-material/Person';

export const Menu = (props) => (
  <MenuItem {...props}>
    <MenuItemLink to='/dogs' primaryText='Dogs' leftIcon={<PetsIcon />} />
    <MenuItemLink to='/users' primaryText='Users' leftIcon={<PersonIcon />} />
  </MenuItem>
);
