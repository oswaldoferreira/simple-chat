import React, { Component } from 'react';

const Message = ({isAuthor, authorName, text, avatarImage}) => {
  return (
    <div className="message-box left-img">
      <div className="picture">
        <img src={avatarImage} title="user name"/>
      </div>

      <div className="message">
        <span>{authorName}</span>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Message;
