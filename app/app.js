var Layout = React.createClass({
  render:function(){
    return (
      <div className="container">
        <h1>heyyyyy!</h1>
        <Test2 />
      </div>
    );
  }
});

var Test2 = React.createClass({
  render:function() {
    return (
      <p>wow test2!</p>
    );
  }
});

var donTest = document.getElementById('dontest');
ReactDOM.render(<Layout />,donTest);
