import React from 'react';
import SocialPost from './SocialPost.jsx';

const SocialFeed = (props) => {
  return(
    <div>
      {props.posts.map((post) => {
        return (
        <SocialPost propic={post.propic} name={post.name} date={post.date} location={post.location} post={post.post}></SocialPost>
        );
      })}
    </div>
  );
}

export default SocialFeed;