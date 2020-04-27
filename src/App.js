import React from 'react';
import './app.css';
import store from './store/index.js';

import { Provider } from 'react-redux';
import Btn from './components/Btn.js';
import Count from './components/Count.js'
import List1 from './components/List1.js'
// import setAction from './action/index.js';

// function handleClick() {
//   const action = setAction();
//   store.dispatch(action)
// }
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  //组件加载完成的时候监听
  // componentDidMount() {
  //   store.subscribe(() => {
  //     console.log('subscribe:' + JSON.stringify(store.getState()));
  //     this.setState({})
  //   })
  // }

  render() {
    return (
      <Provider store={store}> 
        <div className="App">
          <List1 />
        </div>
      <div style={{width: '100%', textAlign: 'center'}}> 
        <Btn />
        <Count />
      </div>
      </Provider>
    )
  }
}

export default App;
