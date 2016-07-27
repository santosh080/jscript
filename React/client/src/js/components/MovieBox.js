var React = require('react');
//var ReactDOM = require('react-dom');
var MovieForm = require('./MovieForm');
var MovieList = require('./MovieList');
var NavBar = require('./NavBar');
//var dataStore=null;
var MovieBox=React.createClass({
  getInitialState:function()
  {
     return{movieData:[]};
  },
  submitTitleData:function(movie)
{
  $.ajax(
  {
      url:"http://www.omdbapi.com/?s="+movie.Title,
      type:'GET',
      datatype:'JSON',
      success:function(data)
      {
        //dataStore=data;
          console.log(data);
          this.setState({movieData:data.Search});
      }.bind(this),
      error:function(err)
      {
          console.log(err)
      }.bind(this),
  })
},
  render: function(){
    return (
      <div>
      <MovieForm handleSubmitTitle={this.submitTitleData} />
      <MovieList moviedata={this.state.movieData}/>
      </div>
    );
  }
});
module.exports = MovieBox;
