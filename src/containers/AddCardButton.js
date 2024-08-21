import React from 'react';
import Icon from "@material-ui/core/Icon";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import '@atlaskit/css-reset';
import { connect } from 'react-redux';
import { addCard } from '../actions/cardsActions';



class AddCardButton extends React.Component {

  state = {
    formIsOpen : false,
    card: {
      title: "",
      deck_id: this.props.deckId
    }
  }

  openFormButton = () => {
    const list = this.props;
    const buttonTitle = list ? "Add a Card" : "Add a List"

    return(
      <OpenFormButtonContainer>
        <Card  variant="outlined" onClick={this.openForm} style={{backgroundColor: "white", margin:3}}>
          <Icon size="small" style={{margin:3}}>+</Icon>
            {buttonTitle}
        </Card>
      </OpenFormButtonContainer>
    )
  }


  openForm = () => {
    this.setState({
      formIsOpen: true
    })
  }

  form = () => {
    const {list}= this.props;
    const placeholderText = list ? "Enter deck name..." : "Enter card title... ";
    const buttonTitle = list ? "Add deck" : "Add card";

    return(
      <div>
        <CardContainer>
          <Card variant="outlined">
            <CardContent>
              <TextareaAutosize
                placeholder={placeholderText}
                autoFocus
                onBlur={this.closeForm}
                onChange={this.handleInputChange}
                style={{
                  resize:"none",
                  width: "100%",
                  overflow: "hidden",
                  outline: "none",
                  border:"none"
                }}
              />
            </CardContent>
          </Card>

          <Button onMouseDown ={this.handleMouseDown} variant ="contained" size="small" color="primary">
            {buttonTitle}
          </Button>

          <Icon>x</Icon>

        </CardContainer>
        </div>

    )
  }

  closeForm = (event) => {
    this.setState({
      formIsOpen : false
    })
  }

  handleInputChange = (event) => {
    this.setState({
      card: {
        ...this.state.card,
        title: event.target.value
      }
    })
  }


  handleMouseDown = (event) => {
    event.preventDefault();
    const card = this.state.card;
    this.props.addCard(card);
    this.setState({
      formIsOpen : false,
      card: {
        ...this.state.card,
        title:""
      }
    })
  }


  render(){
    return this.state.formIsOpen ? this.form() : this.openFormButton();
  }
}

const OpenFormButtonContainer = styled.div`
marginTop: 8
padding: 1px;
background-color:#ebeef2;
flex-grow:1;
`;

const CardContainer = styled.div`
padding: 4px;
background-color:#ebeef2;
`;



export default connect(null, { addCard })(AddCardButton);
