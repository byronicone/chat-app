import React from 'react';
import { Alert, Button, Col, Container, Grid, Icon, Panel, Row } from 'rsuite';
import firebase from 'firebase/app';
import { auth, database } from '../misc/firebase';

const SignIn = () => {
  const signInWithProvider = async provider => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }
      Alert.success('Signed in', 4000);
    } catch (e) {
      Alert.error(e.message, 4000);
    }
  };

  const signInWithFacebook = () => {
    signInWithProvider(new firebase.auth.FacebookAuthProvider());
  };

  const signInWithGoogle = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to Chat!</h2>
                <p>Progressive chat platform for neophytes</p>
                <div className="mt-3">
                  <Button block color="blue" onClick={signInWithFacebook}>
                    <Icon icon="facebook" /> Login with Facebook
                  </Button>
                  <Button block color="green" onClick={signInWithGoogle}>
                    <Icon icon="google" /> Login with Google
                  </Button>
                </div>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
