import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import DogList from './components/DogList';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name='dogs' list={DogList} />
    </Admin>
  );
}

export default App;
