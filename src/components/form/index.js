
import React, { useState } from 'react'
import './form.css'

function Form(props) {

    const [click, setClick] = useState('GET');
    const [URL, setURL] = useState('');
    const [body, setBody] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            method: click,
            url: URL,
            body: body
        };
        props.handleApiCall(formData);
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log('e.target.value', e.target.value);
        setClick(e.target.value);

    }


    const handleURL = (e) => {
        e.preventDefault();
        //console.log('e.target.value', e.target.value);
        setURL(e.target.value);
    }

    const handleBody = (e) => {
        e.preventDefault();
        // console.log('Body', e.target.value);
        setBody(e.target.value);

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className='label-input'>
                    <span>URL: </span>
                    <input name='url' type='text' className='input' onChange={handleURL} />
                    <button type="submit" className='btn'>GO!</button>
                </label>
                <label className="methods">
                    <button id="get" value="GET" onClick={handleClick}>GET</button>
                    <button id="post" value="POST" onClick={handleClick}>POST</button>
                    <button id="put" value="PUT" onClick={handleClick}>PUT</button>
                    <button id="delete" value="DELETE" onClick={handleClick}>DELETE</button>
                    <br />
                </label>
                {click === 'POST' || click === 'PUT' ? <textarea onChange={handleBody} /> : null}
            </form>
        </>
    )
}

export default Form









