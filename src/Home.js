import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const {data:blogs, isLoading, error} = useFetch('http://localhost:8000/blogs?_sort=id&_order=desc');
    const title = 'Liste des article';
    return ( 
        <div className="home">
            {isLoading && <h2 style={ {textAlign:'left', marginTop: '1rem'} }>{title}</h2>}
            {error && <p style={ {textAlign:'left'} }>{error}</p>}
            {isLoading && <p style={ {textAlign:'left'} }>En cours de chargement...</p>}
            {blogs && <BlogList blogs={blogs}/>}
        </div>
     );
}
 
export default Home;