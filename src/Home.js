import { useState } from 'react';

const Home = () => {

    // let  name  = 'Duplex';
    const [name, setName] = useState('Duplex');
    const [age, setAge] = useState(24);

    const handleClick = () => {
        setName('Tony');
        setAge(30);
    };

    return ( 
        <div className="home">
            <h2>Notre page d'acceuil</h2>
            <p>{name} a {age} ans</p>
            <button onClick={handleClick}>Clicker moi!</button>
        </div>
     );
}

export default Home;