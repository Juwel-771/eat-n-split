import './App.css'
import Button from './component/Button';
import FormAddFrined from './component/FormAddFrined';
import FormSplitBill from './component/FormSplitBill';
import FriendList from './component/FriendList';


function App() {

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList></FriendList>
        <FormAddFrined></FormAddFrined>
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill></FormSplitBill>
    </div>
  )
}

export default App
