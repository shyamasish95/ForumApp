
import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Typography } from 'antd';
import LoginForm from './LoginForm.js';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const LoginLayout = () =>(
    <div>
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Title style={{ color: '#f0f5ff'}}>Welcome to EPAM Forum</Title>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }} >
      <LoginForm></LoginForm>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  </div>
);

export default LoginLayout;
          