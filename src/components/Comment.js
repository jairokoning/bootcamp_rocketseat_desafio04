import React from 'react';

function Comment({data}){
  return (
    <div className="post-comment">
      <div>
        <img width="40" src={data.author.avatar} alt=""/>
      </div>
      <div className="comment">
        <p>
          <b>{data.author.name}</b> {data.content}          
        </p>        
      </div>
    </div>
  );
}

export default Comment;