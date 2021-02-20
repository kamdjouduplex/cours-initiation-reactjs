import { Link } from 'react-router-dom';

const BlogList = ({blogs, titre}) => {

    return ( 
        <div className="bloglist">
            {blogs.map( (blog) => (
                    <div className="blog" key={blog.id}>
                        <Link className="blog-titre" to={`/blogs/${blog.id}`}>{blog.title}</Link>
                        <small className="blog-publication-date">{`Publier le: ${blog.date}`}</small>
                        <p className="blog-author">{`Publier par: ${blog.author}`}</p>
                    </div>
                ))
            }
        </div>
     );
}
 
export default BlogList;