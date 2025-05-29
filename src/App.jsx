import './App.css'
import FormAddFrined from './component/FormAddFrined';
import FriendList from './component/FriendList';


function App() {

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList></FriendList>
        <FormAddFrined></FormAddFrined>
      </div>
    </div>
  )
}

export default App
