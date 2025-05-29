import React, { useState } from 'react';
import Button from './Button';

const FormAddFrined = () => {

    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    function handleSubmit () {

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