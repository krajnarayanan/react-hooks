import React from 'react'

import Login from './user/Login'
import Logout from './user/Logout'
import UserBar from './user/UserBar'
import PostList from './post/PostList'
import CreatePost from './post/CreatePost'

export default function App() {
  const user = 'Raj Narayanan'
  const posts = [
    { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
    { title: 'Using React Fragments', content: 'Keeping the DOMtree clean!', author: 'Daniel Bugl' }
    ]
  return (
    <div style={{ padding: 8 }}>
      <UserBar/>
      <CreatePost user={user}/>
      <PostList posts={posts} />
      </div>
  );

}