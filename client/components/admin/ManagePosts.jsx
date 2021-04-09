/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';

class ManagePosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allPosts: [],
      reportedPosts: [],
    };
    this.getAllPosts = this.getAllPosts.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    this.getAllPosts();
  }


  getAllPosts() {
    axios.get('api/post/reported')
      .then((res) => {
        this.setState({ allPosts: res.data });
      })
      .catch((err) => console.log('ERROR GETTING POSTS: ', err));
  }

  handleChange(event) {
    const value = event.target.value;
    let tempArr = this.state.reportedPosts;

    if (tempArr.indexOf(value) === -1) {
      tempArr.push(value);
    } else {
      tempArr.splice(tempArr.indexOf(value), 1);
    }
    this.setState({ reportedPosts: tempArr });
  }

  render() {
    const allPosts = this.state.allPosts;
    console.log('ALL POSTS', allPosts, 'REPORTED POSTS', this.state.reportedPosts);

    return (
      <div>
        <div className="manage-heading">MANAGE POSTS</div>

        <div className="listItems">
          <ul className="no-bullets">
            {allPosts.map((post) => (
            <li key={post.id}>

              <div className="mytextdiv">
                <div className="mytexttitle manage-mytext">
                  {post.name_user + " " + post.last_name}&nbsp;</div>
                <div className="divider"></div>
              </div>
                <input id={post.id} type="checkbox" value={post.id} onChange={this.handleChange} />
                <label htmlFor={post.id}>&nbsp;<span className="span-label">Hide Post?</span></label>
              <br></br>
              Post: {post.message_post}
              <br></br>
              Post Name: {post.name}
              <br></br>
              Created: {post.created_at}
              <br></br>
              Location: {post.location_post}
              <br></br>

              {post.image_url}
              {post.run}
            </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ManagePosts;
