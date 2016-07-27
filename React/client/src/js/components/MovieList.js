var React = require('react');
var  ReactDOM = require('react-dom');
var Movie = require('./Movie');

//------MovieList::Child class of MainMovieBox---
var MovieList = React.createClass({
   render : function(){
     var MovieData=this.props.moviedata.map(function(movie){
       return(<Movie movie1={movie} key={movie._id}>
       </Movie>);
     }.bind(this));
      return (
        <div>
        {MovieData}
        </div>
          );
        }
      });
module.exports = MovieList;
