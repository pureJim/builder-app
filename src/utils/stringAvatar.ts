import stringToColor from './stringToColor';

const stringAvatar = (name: string) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name && name.split('@')[0] && name.split('@')[0][0].toUpperCase()}`,
  };
};

export default stringAvatar;
