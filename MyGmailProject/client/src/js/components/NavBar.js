var React = require('react');
var {Link} = require('react-router');
var NavBar = React.createClass({
  render:function(){
  return(
    <div>
      <nav className="navbar navbar-default">
    <div className="container">
​
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">My Mail Box</a>
      </div>
​
​
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li><Link to="/" className="active">Home </Link><span className="sr-only">(current)</span></li>
          <li><Link to="/inbox" className="active">InBox</Link></li>
          <li><Link to="/sentbox" className="active">SentBox</Link></li>
        </ul>
​

      </div>
    </div>
  </nav>
  </div>
   );
}
});
module.exports=NavBar;
