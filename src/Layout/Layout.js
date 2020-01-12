//import ReactDOM from 'react-dom';
import React from 'react';
import { Layout, Menu } from 'antd';
import PostQuestionText from '../PostQuestion/PostQuestionTExt.js';
import PostQuestionTag from '../PostQuestion/PostQuestionTag.js';
import PostQuestionButton from '../PostQuestion/PostQuestionButton.js';
const { Header, Content, Footer } = Layout;



const Lyout = () =>(
  <div>
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Dashboard</Menu.Item>
        <Menu.Item key="2">Recent Queries</Menu.Item>
        <Menu.Item key="3">Post a Question</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
      <div style={{ background: '#fff', padding: 24, minHeight: 380, textAlign: 'left' }}>
      <PostQuestionText></PostQuestionText>
      <PostQuestionTag></PostQuestionTag>
      <PostQuestionButton></PostQuestionButton>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>EPAM Forum ©2020 Created by Shyamasish Mohanty</Footer>
  </Layout>
  </div>
);
export default Lyout;