import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

const UserRegister = (props) => {
  return (
    <Create title='Register a User' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <NumberInput source='age' />
        <TextInput source='email' type='email' />
      </SimpleForm>
    </Create>
  );
};

export default UserRegister;
