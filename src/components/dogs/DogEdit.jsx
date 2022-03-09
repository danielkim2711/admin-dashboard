import {
  Edit,
  SimpleForm,
  TextInput,
  ImageInput,
  NumberInput,
  BooleanInput,
  DateInput,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const DogEdit = (props) => {
  return (
    <Edit title='Edit a Dog' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <ImageInput source='dogImage' />
        <TextInput source='name' />
        <NumberInput source='age' />
        <TextInput source='breed' />
        <BooleanInput source='hasDiarrhea' />
        <DateInput label='Registered at' source='registeredAt' />
        <RichTextInput source='comment' />
      </SimpleForm>
    </Edit>
  );
};

export default DogEdit;
