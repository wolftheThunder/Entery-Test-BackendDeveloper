import React, { useContext } from 'react';
import { PostContext } from '../commponents/PostContext';  

function PostsPage() {
  const { posts, loading } = useContext(PostContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 mt-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-4">
              <h3 className="text-xl font-bold text-gray-700">{post.title}</h3>
              <p className="text-gray-600">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostsPage;
