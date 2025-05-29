import './App.css'
import Button from './component/Button';
import FormAddFrined from './component/FormAddFrined';
import FriendList from './component/FriendList';


function App() {

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList></FriendList>
        <FormAddFrined></FormAddFrined>
        <Button>Add Friend</Button>
      </div>
    </div>
  )
}

export default App
