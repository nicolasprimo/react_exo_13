import React,{Component,Fragment} from 'react';

class Article extends Component{
    render(props){
        return(
            <Fragment>
               <h1>{this.props.titre}</h1>
               <p>{this.props.texte}</p>
               <span>{this.props.auteur}</span>
            </Fragment>
            )
        }
}

export default Article;