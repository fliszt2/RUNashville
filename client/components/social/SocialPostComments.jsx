import axios from 'axios';
import React from 'react';

class SocialPostComments extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            submitComment: null,
            comments: [{
                propic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e78b0ee-7d21-4e35-badd-d148b5a2a5de/d4bv1o8-3fb388f6-4dcf-44b3-9fd9-be7ae75bba69.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvM2U3OGIwZWUtN2QyMS00ZTM1LWJhZGQtZDE0OGI1YTJhNWRlXC9kNGJ2MW84LTNmYjM4OGY2LTRkY2YtNDRiMy05ZmQ5LWJlN2FlNzViYmE2OS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.vz3uHuj93dfqpwiETOYw8OUH5Bm3TtUIdflolxx8WfA',
                name_user: 'Simba',
                last_name: 'Mufasa',
                message_comments: 'DAD UR EMBARRASSING ME IN FRONT OF MY FRIENDS!!'
            },
            {
                propic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e78b0ee-7d21-4e35-badd-d148b5a2a5de/d4bv1o8-3fb388f6-4dcf-44b3-9fd9-be7ae75bba69.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvM2U3OGIwZWUtN2QyMS00ZTM1LWJhZGQtZDE0OGI1YTJhNWRlXC9kNGJ2MW84LTNmYjM4OGY2LTRkY2YtNDRiMy05ZmQ5LWJlN2FlNzViYmE2OS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.vz3uHuj93dfqpwiETOYw8OUH5Bm3TtUIdflolxx8WfA',
                name_user: 'Scar',
                last_name: 'Mufasa',
                message_comments: 'lmao bro i cant even'
            },
            {
                propic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e78b0ee-7d21-4e35-badd-d148b5a2a5de/d4bv1o8-3fb388f6-4dcf-44b3-9fd9-be7ae75bba69.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvM2U3OGIwZWUtN2QyMS00ZTM1LWJhZGQtZDE0OGI1YTJhNWRlXC9kNGJ2MW84LTNmYjM4OGY2LTRkY2YtNDRiMy05ZmQ5LWJlN2FlNzViYmE2OS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.vz3uHuj93dfqpwiETOYw8OUH5Bm3TtUIdflolxx8WfA',
                name_user: 'Simba',
                last_name: 'Mufasa',
                message_comments: 'DAD UR EMBARRASSING ME IN FRONT OF MY FRIENDS!!'
            },
            {
                propic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e78b0ee-7d21-4e35-badd-d148b5a2a5de/d4bv1o8-3fb388f6-4dcf-44b3-9fd9-be7ae75bba69.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvM2U3OGIwZWUtN2QyMS00ZTM1LWJhZGQtZDE0OGI1YTJhNWRlXC9kNGJ2MW84LTNmYjM4OGY2LTRkY2YtNDRiMy05ZmQ5LWJlN2FlNzViYmE2OS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.vz3uHuj93dfqpwiETOYw8OUH5Bm3TtUIdflolxx8WfA',
                name_user: 'Simba',
                last_name: 'Mufasa',
                message_comments: 'DAD UR EMBARRASSING ME IN FRONT OF MY FRIENDS!!'
            },
            {
                propic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e78b0ee-7d21-4e35-badd-d148b5a2a5de/d4bv1o8-3fb388f6-4dcf-44b3-9fd9-be7ae75bba69.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvM2U3OGIwZWUtN2QyMS00ZTM1LWJhZGQtZDE0OGI1YTJhNWRlXC9kNGJ2MW84LTNmYjM4OGY2LTRkY2YtNDRiMy05ZmQ5LWJlN2FlNzViYmE2OS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.vz3uHuj93dfqpwiETOYw8OUH5Bm3TtUIdflolxx8WfA',
                name_user: 'Simba',
                last_name: 'Mufasa',
                message_comments: 'DAD UR EMBARRASSING ME IN FRONT OF MY FRIENDS!!'
            }
            ],
            componentActive: true            
        }
        this.updateComment = this.updateComment.bind(this);
        this.submitComment = this.submitComment.bind(this);
    }

    componentDidMount(){
        // axios.get(`/api/post/id=${this.props.postID}`)
        //     .then((data) => {
        //         this.setState({comments: data});
        //     })
    }

    updateComment(e){
        this.setState({submitComment: e.target.value}, ()=>{
            console.log(this.state.submitComment);
        });
    }

    submitComment(){
        if(this.state.submitComment === null || this.state.submitComment === ''){
            alert('Comment field is currently empty');
        } else {
            console.log('post req goes here');
            console.log('then a get req w updates');
            console.log('then update state');
        }
    }

    render(){
        let userComments = <div></div>;
        if(this.state.comments){
            userComments = <div className='social-post-comments-list'>
                {this.state.comments.map((comment) => {
                    return(
                        <div className='full-social-comment'>
                            <div className='social-feed-post-profile'>
                                <img className='profile-pic-round' alt='Profile' src={comment.propic} />
                                <div style={{'marginLeft': '5px', 'alignSelf': 'flex-start'}}>
                                    <span>{comment.name_user} </span>
                                    <span>{comment.last_name}</span>
                                </div>
                            </div>
                            <p className='social-post-comment-text' style={{'display': 'block'}}>{comment.message_comments}</p>
                        </div>
                    );
                })}
            </div>
        }
        return(
            <div className='social-comment-component'>
                {userComments}
                <textarea className='submit-social-comment' style={{'background-color': 'var(--bg-white'}} name='submitComment' placeholder='Comment on this post...' onChange={this.updateComment}></textarea>
                <button style={{'height': '50px', 'margin-bottom': '1rem'}} onClick={this.submitComment}>Submit</button>
            </div>
        );
    }
}

export default SocialPostComments;