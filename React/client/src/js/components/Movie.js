var React = require('react');

var Movie = React.createClass({

  insertMovieData:function(movie)
  {
  $.ajax(
  {
      url:"http://localhost:8080/reactroute",
      type:'POST',
      datatype:'JSON',
      data:this.props.movie1,
      success:function(data)
      {
        console.log("Data inserted");
          //this.setState({movieData:data.Search});
      }.bind(this),
      error:function(err)
      {
          console.log(err)
      }.bind(this),
  })
  },



deleteMovieData:function(movie)
{
$.ajax(
{
    url:"http://localhost:8080/reactroute/deletemovie",
    type:'DELETE',
    datatype:'JSON',
    data:this.props.movie1,
    success:function(data)
    {
      console.log("Data Deleted");
        //this.setState({movieData:data.Search});
    }.bind(this),
    error:function(err)
    {
        console.log(err)
    }.bind(this),
})
},

render : function()
{
 return (
   <div className="Movie" id="moviedata">
        <div className="row">
              <div className="col-md-6" >
                  <img alt="Image " className="img-rounded"src={this.props.movie1.Poster} id ="image"/>
              </div>
              <div className="col-md-6" >
                  <h3 >Title:{this.props.movie1.Title}</h3>
                  <h4 >
                      Year:{this.props.movie1.Year}</h4>
                  <h4 >
                      Actors:{this.props.movie1.Actors}</h4>
                  <div className="row">
                      <div className="col-md-4">
                            <button id="singlebutton" name="singlebutton" onClick={this.insertMovieData} type="submit" className="btn btn-primary">Insert</button>
                      </div>
                      <div className="col-md-4">
                            <button id="singlebutton" name="singlebutton" onClick={this.deleteMovieData} type="submit" className="btn btn-danger">Delete</button>
                      </div>
                  </div>
              </div>
        </div>
  </div>
);
}
});
module.exports = Movie;
