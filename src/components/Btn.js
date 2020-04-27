import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';

class Btn extends Component {
    constructor(props) {
        super(props)
        this.state= {}
    }

    handleChange = () => {
        console.log(this.props);
        this.props.setAction()
    }

    render() {
        return(
            <div>
                <Button type='primary' onClick={this.handleChange}>add</Button>
            </div>
        )
    }
}

//方法返回用来发送action的函数，将方法给组件内部，通过this.props发送方法函数
const mapDispatchToProps = (dispatch) => {
    return {
        setAction: () =>{
            dispatch({
                type: 'add_action'
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(Btn);