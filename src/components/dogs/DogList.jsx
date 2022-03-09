import {
  List,
  Datagrid,
  TextField,
  ImageField,
  NumberField,
  BooleanField,
  DateField,
  RichTextField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const DogList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <ImageField source='dogImage' />
        <TextField source='name' />
        <NumberField source='age' />
        <TextField source='breed' />
        <BooleanField source='hasDiarrhea' />
        <DateField source='registeredAt' />
        <RichTextField source='comment' />
        <EditButton basePath='/dogs' />
        <DeleteButton basePath='/dogs' />
      </Datagrid>
    </List>
  );
};

export default DogList;
