var React=require('react');
var ReactDom=require('react-dom');
var InBox=require('./components/InBox');
var SentBox=require('./components/SentBox');
var {browserHistory, Router, Route, IndexRoute}=require('react-router');
var NavBar=require('./components/NavBar');
var Home=require('./components/Home');

var MainComponent = React.createClass({
  render:function() {
        return (
        <div className="MainComponent">
        <NavBar />
        <br/>
        {this.props.children}
        </div>
      );
    }
  });
ReactDom.render (
  <Router history = {browserHistory}>
    <Route path='/' component={MainComponent}>
      <IndexRoute component={Home}/>
      <Route path='inbox' component={InBox}/>
      <Route path='sentbox' component={SentBox}/>
    </Route>
  </Router>,  document.getElementById('app')
);
