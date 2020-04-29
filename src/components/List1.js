import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import { connect } from 'react-redux';

import $ from 'jquery';

class List1 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    } 

    handleClick = () => {
        this.props.dispatch({
          type: 'send_type',
          value: $('.inputName').val()
        });
    }

    handleChange = (e) => {
      const val = e.target.value;
      console.log(val)
      this.props.dispatch({
        type: 'send_value',
        value: $('.inputName').val()
      });
    }
    render() {
        return (
            <div className='lists'>
                <Input value={this.props.inputValue} className='inputName' placeholder='Wirte something' onChange={this.handleChange}/>
                <Button type='primary' style={{marginLeft: '10px'}} onClick={this.handleClick}>增加</Button>
                <List
                    style={{marginTop: '50px', width: '500px', marginLeft: '17%'}}
                    bordered
                    dataSource={this.props.data}
                    renderItem={item=> (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }
}

    const mapStateToProps = (state) => {
        return state.first
    }
  
    const mapDispatchToProps = (dispatch) =>{
        return {
        dispatch
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(List1)
