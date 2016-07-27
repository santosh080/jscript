var React=require('react');
var InBoxList = require('./InBoxList');
var Myjson = require('./Myjson.json');
var InBox = React.createClass({
  getInitialState: function(){
     return{AllData:[]}
  },
  componentWillMount: function(){
    this.setState({AllData:Myjson});
  },
  render: function() {

    return (
      <div className="mailBox">
        <InBoxList dataBox = {this.state.AllData}/>
      </div>
    );
  }
});

module.exports=InBox;
