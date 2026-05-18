import {comments} from './commentData';
import Card from './Card';

function App() {
  return (
    <>
    {comments.map((comment) => (
        <Card commentObject={comment} key={comment.username}/>
      ))}
    </>
  )
}

export default App;