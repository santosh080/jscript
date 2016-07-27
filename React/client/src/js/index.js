var React = require('react');
var  ReactDOM = require('react-dom');
var {browserHistory, Route, Router,Link,IndexRoute}=require('react-router');
var MovieBox = require('./components/MovieBox');
var NavBar=require('./components/NavBar');
var Home=require('./components/Home')

var MainComponent=React.createClass({
  render:function(){
    return(
      <div className = "MainComponent">
      <NavBar/>
      <br/>
      {this.props.children}
      </div>
    );
  }
});

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={MainComponent}>
      <IndexRoute component={Home}/>
      <Route path="add" component={MovieBox}/>
      </Route>
      </Router>,document.getElementById('app')
);
