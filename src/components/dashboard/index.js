import React from 'react';
import { Alert, Button, Divider, Drawer } from 'rsuite';
import { useProfile } from '../../contexts/profile.context';
import { database } from '../../misc/firebase';
import { getUserUpdates } from '../../misc/helpers';
import EditableInput from '../EditableInput';
import AvatarUploadBtn from './AvatarUploadBtn';
import ProviderBlock from './ProviderBlock';

const Dashboard = ({ onSignOut }) => {
  const { profile } = useProfile();
  const onSave = async newNickname => {
    try {
      const updates = await getUserUpdates(
        profile.uid,
        'name',
        newNickname,
        database
      );
      await database.ref().update(updates);
    } catch (e) {
      Alert.error(e.message, 4000);
    }
  };
  return (
    <>
      <Drawer.Header>
        <Drawer.Title>Chat Dashboard</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h3>Hey, {profile.name}</h3>
        <ProviderBlock />
        <Divider />
        <EditableInput
          emptyMessage="Type here"
          onSave={onSave}
          initialValue={profile.name}
          label={<h3 className="mb-3">Choose a nickname:</h3>}
        />
        <AvatarUploadBtn />
      </Drawer.Body>
      <Drawer.Footer>
        <Button block color="red" onClick={onSignOut}>
          Sign out
        </Button>
      </Drawer.Footer>
    </>
  );
};

export default Dashboard;
