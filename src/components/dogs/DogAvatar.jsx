import Avatar from '@mui/material/Avatar';

const DogAvatar = ({ record }) => {
  return <Avatar src={record.dogImage} sx={{ width: 70, height: 70 }} />;
};

export default DogAvatar;
