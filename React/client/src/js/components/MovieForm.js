var React = require('react');
//var ReactDOM = require('react-dom');

var MovieForm=React.createClass({

  getInitialState:function()
  {
     return{Title:''};
  },

  handleTitleCange:function(e)
  {
     this.setState({Title:e.target.value});
      //console.log(this.state.Title);
  },

  submitTitle: function(e)
  {
     e.preventDefault();
      this.props.handleSubmitTitle({Title:this.state.Title});
  },

  render: function(){
    return (
      <div>
      <form className="form-horizontal" onSubmit={this.submitTitle}>
      <fieldset>

      <legend>Movie Search</legend>

      <div className="form-group">
        <div className="col-sm-12">
        <input id="textinput" name="textinput" type="text"value={this.state.Title} onChange={this.handleTitleCange} placeholder="Enter Movie Name" className="form-control input-md"/>
        </div>
      </div>

      <div className="form-group">
        <div className="col-sm-12">
          <button id="singlebutton" name="singlebutton" type="submit" className="btn btn-success">Search</button>
        </div>

      </div>
      </fieldset>
      </form>
      </div>
    );
  }
});
module.exports = MovieForm;
