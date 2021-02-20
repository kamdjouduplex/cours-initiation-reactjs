import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const Blog = () => {
    const {id} = useParams();
    const {data:blog, isLoading, error} = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();
    const handleDelete = () => {
        if( window.confirm('Are you sure you want to dele this?') ){
            fetch(`http://localhost:8000/blogs/${blog.id}`,{
                method: 'DELETE'
            }).then( ()=> {
                console.log('deleted successfully');
                history.push('/');
            });
        }else return;

    }
    return ( 
        <div className="blog" >
            {error && <p style={ {textAlign:'left'} }>{error}</p>}
            {isLoading && <p style={ {textAlign:'left'} }>En cours de chargement...</p>}
            {blog && 
                (
                    <div>
                        <a className="blog-titre" href="">{blog.title}</a>
                        <small className="blog-publication-date">{`Publier le: ${blog.date}`}</small>
                        <p className="blog-body">{blog.body}</p>
                        <p className="blog-author">{`Publier par: ${blog.author}`}</p>
                        <div className="form-group">
                            <button className="btn-create btn-danger" onClick={ handleDelete } >Supprimer</button>
                        </div>
                    </div>
                )
            }
        </div>
     );
}
 
export default Blog;