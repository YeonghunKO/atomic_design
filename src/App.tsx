import Post from './components/Templates/Post/Post';
import postData from '@components/Templates/Post/mock.data.json';

function App() {
  return (
    <>
      <Post {...postData} />
    </>
  );
}

export default App;
