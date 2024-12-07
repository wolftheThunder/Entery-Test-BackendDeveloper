import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ItemList from './commponents/IteamList';
import ToggleText from './commponents/ToggleText';
import PostsPage from './commponents/PostsPage';
import { PostProvider } from './commponents/PostContext'; 

function App() {
  const [todoItems, setTodoItems] = useState([]);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTodoItems(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <PostProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 flex flex-col justify-start items-center p-6">
       
          <nav className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 shadow-lg">
            <div className="max-w-4xl w-full flex justify-between items-center">
              <h1 className="text-3xl ml-5 font-bold tracking-wider">Test-Paper</h1>
              <div>
                <Link to="/" className="mx-4 text-lg font-semibold hover:text-gray-300 transition duration-300">Home</Link>
                <Link to="/todo" className="mx-4 text-lg font-semibold hover:text-gray-300 transition duration-300">Todo List</Link>
                <Link to="/toggle" className="mx-4 text-lg font-semibold hover:text-gray-300 transition duration-300">Toggle Text</Link>
                <Link to="/posts" className="mx-4 text-lg font-semibold hover:text-gray-300 transition duration-300">Posts</Link>
              </div>
            </div>
          </nav>

          <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl p-8 mt-6">
        
            <Routes>
              <Route
                path="/"
                element={
                  <div className="text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Welcome to the App</h2>
                    <p className="text-lg text-gray-600">Select an option from the navbar to view different components.</p>
                  </div>
                }
              />
              <Route
                path="/todo"
                element={<ItemList items={todoItems} />}
              />
              <Route
                path="/toggle"
                element={<ToggleText />}
              />
              <Route
                path="/posts"
                element={<PostsPage />} 
              />
            </Routes>
          </div>
        </div>
      </Router>
    </PostProvider>
  );
}

export default App;
