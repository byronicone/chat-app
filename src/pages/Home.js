import React from 'react';
import { Col, Grid, Row } from 'rsuite';
import Sidebar from '../components/Sidebar';
import { RoomsProvider } from '../contexts/rooms.context';

const Home = () => {
  return (
    <RoomsProvider>
      <Grid fluid className="h-100">
        <Row className="h-100">
          <Col sm={24} md={8} className="h-100">
            <Sidebar />
          </Col>
        </Row>
      </Grid>
    </RoomsProvider>
  );
};

export default Home;
