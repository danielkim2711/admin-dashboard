import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import DogList from './components/dogs/DogList';
import DogRegister from './components/dogs/DogRegister';
import DogEdit from './components/dogs/DogEdit';
import UserList from './components/users/UserList';
import UserRegister from './components/users/UserRegister';
import UserEdit from './components/users/UserEdit';
import PetsIcon from '@mui/icons-material/Pets';
import PersonIcon from '@mui/icons-material/Person';
import Dashboard from './Dashboard';

function App() {
  return (
    <Admin
      dashboard={Dashboard}
      dataProvider={simpleRestProvider('http://localhost:3000')}
    >
      <Resource
        name='dogs'
        list={DogList}
        create={DogRegister}
        edit={DogEdit}
        icon={PetsIcon}
      />
      <Resource
        name='users'
        list={UserList}
        create={UserRegister}
        edit={UserEdit}
        icon={PersonIcon}
      />
    </Admin>
  );
}

export default App;
