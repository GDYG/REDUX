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

    reduxSaga= () =>{
        const { dispatch } = this.props;
        dispatch({
            type: 'saga_type'
        })
    }

    render() {
        // console.log(this.props);
        const {three, four} = this.props

        let msg
        if(four.status && four.status === 0) {
            msg = (<span>{four.msg}</span>)
        }else if(four.status === 1) {
            msg = (<Spin tip="加载中..."></Spin>)
        }else if(four.status === 2){
            msg = (<span>加载成功</span>)
        }else {
            msg = (<span>{four.msg}</span>)
        }
        return (
            <div>
                <Button type='danger' onClick={this.reduxThunk}>redux异步</Button>
                <br />
                <br />
                <br />
                {three.flag && three.flag === true ? <Spin tip="加载中..."></Spin> : <span>{three.message}</span>}

                <div>
                    <br />
                    <br />
                    <br />
                    <Button type='primary' onClick={this.reduxSaga}>redux-saga</Button>
                    { msg }
                </div>
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
    console.log(state)
    return state
}

export default connect(mapStateToProps, mapDispatchToProps)(Thunk);