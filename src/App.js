import './App.css';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getPosts } from './store/actions/home.action';

function App(props) {

  const { posts, fetchPosts } = props;

  useEffect(() => {
    console.log({posts})
  }, [posts])

  return (
    <div className="App">
      <button onClick={() => fetchPosts(['concree'])}>Clique ici</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.home.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (posts) => dispatch(getPosts(posts))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
