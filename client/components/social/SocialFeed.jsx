import React from 'react';
import SocialPost from './SocialPost.jsx';

const SocialFeed = (props) => {
  return(
    <div>
      {props.posts.map((post) => {
        return (
        <SocialPost
          key={post.id}
          id={post.id}
          name={post.name_user}
          lastName={post.last_name}
          propic={post.user_image_url ? post.post_image_url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSNrcHK7OSTSf4xwmGx6sxMVPDhaZj-wU6SP-T4Hes-rW8a0jM7O0PZDPRQ9MVaTtXMyU&usqp=CAU'}
          date={post.created_at}
          location={post.location_post}
          image={post.post_image_url}
          post={post.message_post} >
          {/* // run={post.run}>//FIX ME!!!! */}
        </SocialPost>
        );
      })}
    </div>
  );
}

export default SocialFeed;