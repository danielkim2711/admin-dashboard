import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import DogList from './components/dogs/DogList';
import DogRegister from './components/dogs/DogRegister';
import DogEdit from './components/dogs/DogEdit';
import UserList from './components/users/UserList';
import UserRegister from './components/users/UserRegister';
import UserEdit from './components/users/UserEdit';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name='dogs'
        list={DogList}
        create={DogRegister}
        edit={DogEdit}
      />
      <Resource
        name='users'
        list={UserList}
        create={UserRegister}
        edit={UserEdit}
      />
    </Admin>
  );
}

export default App;
