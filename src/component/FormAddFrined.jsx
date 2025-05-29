import React, { useState } from 'react';
import Button from './Button';

const FormAddFrined = () => {

    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    function handleSubmit (e) {
        e.preventDefault();

        if(!name) return alert("Inert Name Please");
        if(!image) return alert("Inert Image URL Please");

        const id = crypto.randomUUID();
        const newFriend = {
            name, 
            image: `${image}?=${id}`, 
            balance: 0,
            id
        }

        console.log(newFriend);
        setName("");
        setImage("https://i.pravatar.cc/48");
    }

    return (
        <form className='form-add-friend' onSubmit={handleSubmit}>
            <label>👭 Name: </label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

            <label>🖼 Image: </label>
            <input type="text" value={image} />

            <Button>Add Friend</Button>
        </form>
    );
};

export default FormAddFrined;