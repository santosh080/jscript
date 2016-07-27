var React = require('react');
var MyInMail = React.createClass({
  getInitialState: function(){
     return{MailFrom:this.props.allMails.MailFrom}
  },
    render: function() {
    return (
      <div className="Mail" >
  <div className="row">

  <div className="col-md-12 mailb" >
  <form >

  <h5 >ID:{this.props.allMails.msg_id}</h5>
  <h4>Snippet:</h4><p>{this.props.allMails.Msg_snippet}</p>

  </form>
  </div>
  </div>
  </div>
    );
  }
});
module.exports = MyInMail;
