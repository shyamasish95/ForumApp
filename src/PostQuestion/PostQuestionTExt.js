import React from 'react';
import { Input } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const { TextArea } = Input;

const PostQuestionText = () =>(
<div>
  <Title level={2}>Post Your Question Here</Title>
  <TextArea placeholder="Enter the Summary of your question here"style={{ width: 700 }} autoSize />
  <Title level={4}>Enter Your Question Description</Title>
  <TextArea placeholder = "Be as descriptive as possible" rows={10} style={{ width: 700 }} />
</div>
);

export default PostQuestionText;