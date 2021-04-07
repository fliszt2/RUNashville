import React from 'react';
import SocialPost from '../../components/social/SocialPost';

class ManagePosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allPosts: [],
      updatedPosts: []
    };
    this.getAllPosts = this.getAllPosts.bind(this);
  }

  getAllPosts() {
    axios.get('/posts:reported')
      .then(res => {
        this.setState({ allPosts: res.data });
      })
      .catch(err => console.log('ERROR GETTING POSTS: ', err));
  }

  onShowUncheck() {
    this.setState(state => {
      const updatedPosts = state.updatedPosts.concat({post_id: this.state.all'state.value')
      return {allPosts: allPosts.}
    }
  }

  updatePosts() {

    var body = {
      "url_short": this.state.urlShort,
      "url_link": this.state.urlLink,
      "linked_ref": this.props.linked_ref,
      "linked_ref_id": this.props.linked_ref_id
    };
    return axios.post('/links', body)
      .then(() => {
        alert('Link has been Added!');
      })
      .then(() => {
        this.setState({
          urlShort: '',
          urlLink: ''
        })
      })
      .catch(err => {
        console.log(err);
      })

  render() {
    const { allPosts } = this.state;

    return (
      <div>
        MANAGE POSTS
        {allPosts.map((post) => {
          return (
            <SocialPost key={post.date + post.post} propic={post.propic} name={post.name} date={post.date} location={post.location} image={post.image} run={post.run} post={post.post}></SocialPost>
          );
        })}
      </div>
    );
  }

}

export default ManagePosts;
