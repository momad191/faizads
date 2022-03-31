import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default class ConfirmButton extends Component {
  static propTypes = {
    action: PropTypes.func.isRequired,
    times: PropTypes.number
  };

  static defaultProps = {
    times: 3
  };

  state = {
    timesPressed: 0
  };

  onPress = () => {
    const { timesPressed } = this.state;
    const { action, times } = this.props;
    this.setState(
      {
        timesPressed: timesPressed + 1
      },
      () => {
        if (this.state.timesPressed === times) {
          action();
          this.setState({ timesPressed: 0 });
        }
      }
    );
  };

  render() {
    const { timesPressed } = this.state;
    const { dialog } = this.props;
    return (
      <Button  level={timesPressed} onClick={this.onPress}>
        {dialog[timesPressed]}
         
      </Button> 
    );
  }
}  

const Button = styled.button`
  height:auto;
  width:100px;
  cursor: pointer;
  background: #B40404;
  border-radius: 0px;
  border: none;
  color: #fff;
  font-size: 14px;
  text-align:center;
  text-decoration:none
  text-transform: uppercase;
  font-weight: bold;
  margin-top:10px;
  margin-bottom:10px;
  padding:15px;
  border-radius:15px;
 
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  ${({ level }) => {
    if (level === 1)
      return `
      width:300px;
      transform: scale(1.3);
      background: #B73C3C;
    `;
    if (level === 2)
      return `
      width:350px;
      transform: scale(1.3);
      background: #5B1E1E;
    `;
  }};
`;
