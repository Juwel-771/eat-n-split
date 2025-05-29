import React from 'react';
import Button from './Button';

const FormSplitBill = () => {
    return (
        <form className='form-split-bill'>
            <h2>SPLIT BILL WITH X</h2>

            <label>💴 Bill Value: </label>
            <input type="text" />

            <label>🧔 Your Expense: </label>
            <input type="text" />

            <label>👭 X's Expense: </label>
            <input type="text" />

            <label>💲 Who's Paying the bill? </label>
            <select>
                <option value="user">You</option>
                <option value="friend">X</option>
            </select>

            <Button>Split Bill</Button>
        </form>
    );
};

export default FormSplitBill;