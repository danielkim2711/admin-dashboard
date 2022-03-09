import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

const UserEdit = (props) => {
  return (
    <Edit title='Edit a User' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <NumberInput source='age' />
        <TextInput source='email' type='email' />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
