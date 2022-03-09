import {
  List,
  Datagrid,
  TextField,
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
