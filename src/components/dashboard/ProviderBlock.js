import React, { useState } from 'react';
import { Alert, Button, Icon, Tag } from 'rsuite';
import firebase from 'firebase/app';
import { auth } from '../../misc/firebase';

const ProviderBlock = () => {
  const [isConnected, setIsConnected] = useState({
    google: auth.currentUser.providerData.some(
      data => data.providerId === 'google.com'
    ),
    facebook: auth.currentUser.providerData.some(
      data => data.providerId === 'facebook.com'
    ),
  });

  const unlink = async providerId => {
    try {
      if (auth.currentUser.providerData.length === 1) {
        throw new Error('You must be linked to at least one provider.');
      }
      await auth.currentUser.unlink(`${providerId}.com`);
      Alert.success(`Unlinked from ${providerId}`);
      setIsConnected(p => {
        return {
          ...p,
          [providerId]: false,
        };
      });
    } catch (e) {
      Alert.error(e.message, 4000);
    }
  };

  const link = async providerId => {
    let provider;
    if (providerId === 'google') {
      provider = new firebase.auth.GoogleAuthProvider();
    }
    if (providerId === 'facebook') {
      provider = new firebase.auth.FacebookAuthProvider();
    }
    try {
      await auth.currentUser.linkWithPopup(provider);
      Alert.success(`Linked to ${providerId}`, 4000);
      setIsConnected(p => {
        return {
          ...p,
          [providerId]: true,
        };
      });
    } catch (e) {
      Alert.error(e.message, 4000);
    }
  };

  return (
    <div>
      {isConnected.google && (
        <Tag color="green" closable onClose={() => unlink('google')}>
          <Icon icon="google" /> Connected
        </Tag>
      )}
      {isConnected.facebook && (
        <Tag color="blue" closable onClose={() => unlink('facebook')}>
          <Icon icon="facebook" />
          Connected
        </Tag>
      )}
      <div className="mt-2">
        {!isConnected.google && (
          <Button block color="green" onClick={() => link('google')}>
            <Icon icon="google" /> Link to Google
          </Button>
        )}
        {!isConnected.facebook && (
          <Button block color="blue" onClick={() => link('facebook')}>
            <Icon icon="facebook" /> Link to Facebook
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProviderBlock;
