import Avatar from '@mui/material/Avatar';

const ListAvatar = ({ record }) => {
  return <Avatar src={record.dogImage} sx={{ width: 80, height: 80 }} />;
};

export default ListAvatar;
