class ACom extends Component {
  handleClick = () => {
      setTimeout(() => {
          alert(this.props.count);
      }, 3000);
  };

  render() {
      return (
          <div>
              <h2>Example2</h2>
              <p>{this.props.count}</p>
              <button onClick={this.handleClick}>Alert Count</button>
          </div>
      );
  }
}
