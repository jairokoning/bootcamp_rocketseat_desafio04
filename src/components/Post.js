import React from 'react';
import Comment from './Comment';

function Post ({data}){
  return (
    <div className="post">
      <div className="post-user">
        <div>
          <img width="40" src={data.author.avatar} alt=""/>
        </div>
        <div>
          <p className="user"><b>{data.author.name}</b></p>
          <p className="date">{data.date}</p>
        </div>
      </div>
      <p>{data.content}</p>
      <hr/>
      
      {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}

    </div>    
  );
}

export default Post;