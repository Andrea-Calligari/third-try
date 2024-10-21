import React, { useState, useEffect, useLayoutEffect } from 'react';
import Loading from './Loading';
import Error from './Error';
import axios from 'axios';
const url = "https://api.github.com/users";

const FetchData = () => {
    const [users, setUsers] = useState([]);
    // const [visibleCard, setVisibleCard] = useState({})
    const [showUsers, setShowUsers] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const getData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(url);
            // const userData = response.data;
            setUsers(response.data);
            setIsLoading(false);

        }
        catch (err) {
            console.log(err);
            setIsLoading(false);
            setIsError(true);
        }
    };
    useEffect(() => {
        getData();
        
    }, []);
    if (isLoading) {

        return <Loading />

    } else if (isError) {

        return <Error />
    }
    // const {id, login, avatar_url: img} = users;

    // const toggleCard = (id) => {
    //     setVisibleCard(prevState => ({
    //         ...prevState,
    //         [id]: !prevState[id]
    //     }));
    // };
    const Card = () => {
        return (
            <div className="container">
                <ul className='row'>
                    {
                        users.map((el) => {
                            const { login, id, avatar_url: img, html_url: name } = el;
                            return (

                                <li key={id} className="col-4" >
                                    {/* <button onClick={() => toggleCard(id)} className='button btn-card'>{!visibleCard[id] ? 'Mostra' : 'Nascondi'}</button> */}
                                    {/* <div className={`card ${visibleCard[id] ? 'visible' : 'hidden'}`}> */}
                                    <div className="card">
                                        <img style={{ borderRadius: '12px', boxShadow: '10px 10px 10px 0 grey', marginBottom: '8px' }} src={img} alt={login} />
                                        <h2 style={{ marginBottom: '20px' }} >{login}</h2>
                                        <a style={{ fontSize: '24px' }} href={name}>Profile</a>
                                    </div>

                                </li >

                            );

                        })
                    }

                </ul >
            </div >
        );
    }


    return (
        <>
            <button className='button btn-hide' onClick={(() => setShowUsers(!showUsers))}> {showUsers ? 'Mostra Utenti' : 'Nascondi Utenti'}</button>
        <div>
            {
                !showUsers && <Card />
            }
        </div>

        </>

    );

}

export default FetchData
