import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlog] = useState([
        {
            id: 1,
            title: "Bienvenu a mon blog.",
            body: "a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est,",
            author: "Duplex",
            date: "02/01/2021"
          },
          {
            id: 2,
            title: "La nuit des codeurs",
            body: "cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum",
            author: "Tony",
            date: "02/01/2021"
          },
          {
            id: 3,
            title: "Troisieme title",
            body: "cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum",
            author: "Tony",
            date: "02/01/2021"
          }
    ]);

    const [name, setName] = useState('Duplex');

    const HandleDelete = (id) => {
        const newBlogs = blogs.filter( (blog) => blog.id !== id);
        setBlog(newBlogs);
    }

    useEffect( ()=> {
        console.log('Use Effet a ete appele...');
        console.log(blogs);
    }, [name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title={'Liste des blogs'} HandleDelete={HandleDelete} />
            <button onClick={ () => setName('Tony') }>change le nom</button>
            <p>{name}</p>
        </div>
     );
}

export default Home;