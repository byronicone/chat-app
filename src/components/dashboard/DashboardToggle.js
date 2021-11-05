import React, { useCallback } from 'react';
import { Alert, Button, Drawer, Icon } from 'rsuite';
import Dashboard from '.';
import { isOfflineForDatabase } from '../../contexts/profile.context';
import { useMediaQuery, useModalState } from '../../misc/custom-hooks';
import { auth, database } from '../../misc/firebase';

const DashboardToggle = () => {
  const isMobile = useMediaQuery('(max-width: 992px)');
  const { isOpen, open, close } = useModalState();

  const onSignOut = useCallback(async () => {
    try {
      await database
        .ref(`/status/${auth.currentUser.uid}`)
        .set(isOfflineForDatabase);
      auth.signOut();
      Alert.info('Signed out!', 4000);
      close();
    } catch (e) {
      Alert.error(e.message, 4000);
    }
  }, [close]);

  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" /> Dashboard
      </Button>
      <Drawer full={isMobile} show={isOpen} onHide={close} placement="left">
        <Dashboard onSignOut={onSignOut} />
      </Drawer>
    </>
  );
};

export default DashboardToggle;
