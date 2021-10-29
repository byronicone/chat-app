import React from 'react';
import { Avatar } from 'rsuite';
import { getInitialsFromName } from '../misc/helpers';

const ProfileAvatar = ({ user, ...props }) => {
  return (
    <Avatar circle {...props}>
      {getInitialsFromName(user.name)}
    </Avatar>
  );
};

export default ProfileAvatar;
