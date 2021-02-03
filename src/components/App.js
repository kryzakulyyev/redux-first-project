import React from "react";
import {connect} from 'react-redux'
import {} from '../data'

function App(props) {
  console.log(props)
 
  return (
    <div className="App">
      <h1>REDUX ARTİCLELİST SEARCH APP</h1>
      <Search onSearch={props.onSearch}/>
      <Articles  {...props}/> 
      
    </div>
  );
}

const Search = (props)=>(
<input type="text" onChange={(e)=>{props.onSearch(e.target.value)}}/>
)
  

const Articles = (props) => (
  <ul>
    {props.articles.filter(
      article => article.title.toLowerCase().includes(props.searchTerm.toLowerCase()))
      .map((article) => (
      <li key={article.id}>
        <a href={article.url}>{article.title}</a>
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => ({
  articles: state.articlesState.articles,
  searchTerm: state.searchState.searchTerm
});
const mapDispatchToProps = dispatch => ({
  onSearch: searchTerm => dispatch({ type: 'SEARCH_SET', searchTerm }),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);


// export default App;
