import React, { useState } from 'react';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('AddServices-Bakeri');

    const [service, setService] = useState({});

    const handleAddService = event => {
        event.preventDefault();
        console.log('submitted')
        fetch('http://localhost:5000/services/', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(service)
        })
        .then( res => res.json() )
        .then( data => {
            console.log('data from .then data addService client', data)
            if(data.acknowledged){
                console.log('1 knwlg 1')
                alert('You have succesfully added a service')
                event.target.reset()
            }
        })

    }

    const handleInput = event => {
        const field = event.target.name ;
        const value = event.target.value ;
        const newService = { ...service }
        newService[field] = value ;
        setService(newService);
    }

    return (
        <div>
            <h1>Add a service</h1>
            <form onSubmit={handleAddService}>
                <input onBlur={handleInput} type="text" name="name" placeholder='Service Name' required /> <br /> <br />
                <input onBlur={handleInput} type="text" name="title" placeholder='Title' required /> <br /> <br />
                <input onBlur={handleInput} type="text" name="details" placeholder='Details' required /> <br /> <br />
                <input onBlur={handleInput} type="text" name="photoURL" placeholder='Photo URL' required /> <br /> <br />
                <input onBlur={handleInput} type="text" name="price" placeholder='Price' required /> <br /> <br />
                <input onBlur={handleInput} type="text" name="rating" placeholder='Rating (1-5)' required /> <br /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddService;