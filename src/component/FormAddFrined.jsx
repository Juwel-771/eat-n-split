import React from 'react';
import Button from './Button';

const FormAddFrined = () => {
    return (
        <form className='form-add-friend'>
            <label>👭 Name: </label>
            <input type="text" />

            <label>🖼 Image: </label>
            <input type="text" />

            <Button>Add</Button>
        </form>
    );
};

export default FormAddFrined;