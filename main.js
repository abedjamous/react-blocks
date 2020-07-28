

// creat a button which make the conter go up
// two different blocks which change based on the counter

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            count: 0,


        };
    }

    counterButton = (event) => {
        this.setState((state, props) => ({
            count: state.count + 1
        }))
    }

    render() {
        return (

        <div id="App">
            <h1>Raising State Counter</h1>
            <button onClick={this.counterButton}>click ME!</button>
            <div>{this.state.count}</div>
            <BlockOne count={this.state.count}/>
            <BlockTwo count={this.state.count}/>
        </div>

        )
    }
}

function BlockOne(props) {
    if (props.count % 2 === 0) {
    return (
        <div>
            block 1:
        <div className="Blocks" id="red"></div>
        </div>
    );

  } else {
    return (
        <div>
            block 1:
        <div className="Blocks" id="black"></div>
        </div>
    );
  }
}

function BlockTwo(props) {
    if (props.count % 2 === 0) {
        return (
            <div>
                block 2:
            <div className="Blocks" id="blue"></div>
            </div>
        );
    
      } else {
        return (
            <div>
                block 1:
            <div className="Blocks" id="red"></div>
            </div>
        );
      }
    
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)