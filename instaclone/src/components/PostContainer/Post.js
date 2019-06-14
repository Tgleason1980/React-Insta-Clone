import React, {Component} from 'react';


 class Post extends Component {
  render() {
    return (
      <div className="posts">
        {this.props.data.map(post =>{
            return(
                
                <header>
                    <image src={post.imageUrl}/>
                    <h3>{post.username}</h3>
                </header>
            )
        })}
      </div>
    );
  }
}

export default Post;