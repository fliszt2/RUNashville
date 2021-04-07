import React from 'react';
import SocialPost from './SocialPost.jsx';

const SocialFeed = (props) => {
  return(
    <div>
      {props.posts.map((post) => {
        return (
        <SocialPost name={props.name} lastName={props.lastName} key={post.date + post.post} propic={post.propic} date={post.date} location={post.location} image={post.image} run={post.run} post={post.post}></SocialPost>
        );
      })}
    </div>
  );
}

export default SocialFeed;