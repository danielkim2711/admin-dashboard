import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  NumberInput,
  BooleanInput,
  DateInput,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const DogRegister = (props) => {
  return (
    <Create title='Register a Dog' {...props}>
      <SimpleForm>
        <ImageInput source='dogImage' />
        <TextInput source='name' />
        <NumberInput source='age' />
        <TextInput source='breed' />
        <BooleanInput source='hasDiarrhea' />
        <DateInput label='Registered at' source='registeredAt' />
        <RichTextInput source='comment' />
      </SimpleForm>
    </Create>
  );
};

export default DogRegister;
