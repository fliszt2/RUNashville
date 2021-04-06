import React from 'react';
import SocialPost from './SocialPost.jsx';

const SocialFeed = (props) => {
  return(
    <div>
      {props.posts.map((post) => {
        return (
        <SocialPost key={post.date + post.post} propic={post.propic} name={post.name} date={post.date} location={post.location} run={post.run} post={post.post}></SocialPost>
        );
      })}
    </div>
  );
}

export default SocialFeed;