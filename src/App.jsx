import { useState } from 'react';
import './App.css'
import Button from './component/Button';
import FormAddFrined from './component/FormAddFrined';
import FormSplitBill from './component/FormSplitBill';
import FriendList from './component/FriendList';


function App() {
  const [isAddForm, setIsAddForm] = useState(false);

  const handleAddFriendForm = () => {
    setIsAddForm(!isAddForm);
    console.log(isAddForm);
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList></FriendList>
        {isAddForm ? <FormAddFrined/> : ""}
       <Button onClick = {handleAddFriendForm}> {isAddForm ? "Close" : "Add Friend"} </Button>
      </div>
      <FormSplitBill></FormSplitBill>
    </div>
  )
}

export default App
