import './App.css';
import React,{Component,Fragment} from 'react';
import Article from './Article';

class App extends Component {
  state = {
    articles: [
      {titre:"Coding School 15", texte:"Cette semaine la CS 15 travaillent d'arache pied sur react..", auteur:"Martin"},
      {titre:"MolenGeek", texte:"Ce weekend le premier hackathon charlewood a lieu en ligne", auteur:"Nico"},
      {titre:"Full Stack", texte:"Le front end est une partie du full stack", auteur:"Laurent"}
    ]
  }
  render(){
    return (
      <div className="App">
        {this.state.articles.map((elem,index) => <Article key={index} titre={elem.titre} texte={elem.texte} auteur={elem.auteur} />)}
      </div>
    ) 
  }
}

export default App;
