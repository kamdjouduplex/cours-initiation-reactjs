import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const tmp_date = new Date().toISOString().split("T");
    const date = `${tmp_date[0]} ${tmp_date[1]}`;
    const blog = { title, author, body, date };
    setIsLoading(true);
    fetch(
      'http://localhost:8000/blogs',{
        method: 'POST',
        headers: { 'Content-Type': 'Application/json'},
        body: JSON.stringify(blog)
      }
    ).then( () => {
      console.log('Article ajoute avec success!');
      setIsLoading(false);
      history.push('/');
    })

  }

  return (
    <div className="create-blog">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="title">Titre de l'article</label>
          <input 
            type="text" 
            value={title} 
            onChange={ (e)=> setTitle(e.target.value) } 
            className="form-control" 
            id="title"
            required />
        </div>
        <div className="form-group">
          <label htmlFor="author">Selectionez un auteur</label>
          <select 
            required 
            className="form-control"
            id="author" 
            value={author} 
            onChange={ (e)=> setAuthor(e.target.value) }>
            <option value=""></option>
            <option value="Tony">Tony</option>
            <option value="Duplex">Duplex</option>
          </select>
        </div>
        <div className="form-group">
            <label htmlFor="body">Contenu de l'article</label>
            <textarea 
              required
              className="form-control textarea"
              value={body} 
              onChange={ (e)=> setBody(e.target.value)}
              id="body" rows="10"></textarea>
        </div>
        <div className="form-group">
          { !isLoading && <button type="submit" className="btn-create">Creer Article</button>}
          { isLoading && <button className="btn-create" disabled>Creation en cours...</button>}
        </div>
      </form>
    </div>
  );
};

export default Create;
