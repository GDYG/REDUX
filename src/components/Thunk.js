//redux处理异步

import React, { Component } from 'react'

import { Button } from 'antd'
import {connect} from 'react-redux';
import store from '../store/index.js';
import { Spin } from 'antd';

const asyncAction =() =>{
    return function(dispatch) {
        store.dispatch({
            type: 'flag_type'
        })

        return setTimeout(()=>{
            store.dispatch({
                type: 'thunk-type',
                message: '异步操作已经完成'
            })
        }, 3000)
    }
}


class Thunk extends Component {

    reduxThunk=() =>{
        this.props.dispatch(asyncAction())
    }

    render() {
        console.log(this.props);
        
        return (
            <div>
                <Button type='danger' onClick={this.reduxThunk}>redux异步</Button>
                <br />
                <br />
                <br />
                {this.props.flag && this.props.flag === true ? <Spin tip="加载中..."></Spin> : <span>{this.props.message}</span>}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        dispatch
    }
}
const mapStateToProps = (state) =>{
    return state.three
}

export default connect(mapStateToProps, mapDispatchToProps)(Thunk);