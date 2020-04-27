import React, { Component } from 'react';
import { connect } from 'react-redux';

class Count extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }

    render() {
        return(
            <div>
                <div style={{width: '100%', textAlign: 'center', fontSize: '20px'}}>{this.props.count}</div>
            </div>
        )
    }
}

//将更新的state返回给组件内部
const mapStateToProps = (state) => {
    return state.second;
}
export default connect(mapStateToProps)(Count);