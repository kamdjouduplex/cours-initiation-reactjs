const Home = () => {

    const handleClick = () => {
        console.log("Vous m'avez cliker...");
    };

    const handleClickAgain = (name, event) => {
        console.log(`Salut, ${name}`, event.target);
    }

    return ( 
        <div className="home">
            <h2>Notre page d'acceuil</h2>
            <button onClick={handleClick}>Clicker moi!</button>
            <button onClick={ (e) => handleClickAgain('Duplex', e) }>Clicker moi encore</button>
        </div>
     );
}

export default Home;