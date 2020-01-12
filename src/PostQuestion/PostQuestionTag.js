import React from 'react';
import { Input, Tooltip } from 'antd';

const { Search } = Input;

const PostQuestionTag = ()=>(
  <div>
    <br />
    <Tooltip placement="topLeft" title="Provide specific technology name according to your question">
      <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 400 }}
      tooltip ="Be Specific with the etchnology name"/>
    </Tooltip>
   </div>
);

export default PostQuestionTag;