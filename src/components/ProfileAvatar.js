import React from 'react';
import { Avatar } from 'rsuite';
import { getInitialsFromName } from '../misc/helpers';

const ProfileAvatar = ({ name, ...props }) => {
  return (
    <Avatar circle {...props}>
      {getInitialsFromName(name)}
    </Avatar>
  );
};

export default ProfileAvatar;
