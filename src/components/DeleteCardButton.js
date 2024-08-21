import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { deleteCard } from '../actions/cardsActions';

class DeleteCardButton extends React.Component{

  handleDeleteClick = () => {
    console.log(4)
    this.props.deleteCard(this.props.cardId)
  }
  render(){
    console.log(5)
    return (
      <span>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleDeleteClick}>
            <DeleteIcon />
        </Button>
      </span>
      );
  }
}



export default connect(null, {deleteCard} )(DeleteCardButton);
