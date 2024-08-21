import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import DeleteCardButton from '../components/DeleteCardButton';


class GetterCard extends React.Component{

  state = {
    showingButtons: false,
    count: 0
  }

  showButtons = event => {
    console.log(1)
    this.setState({
      showingButtons: true
    })
  }

  hideButtons = event => {
    console.log(2)
    this.setState({
      showingButtons: false
    })
  }

  handleClick = () => {
    const newCount = this.state.count + 1;
    this.setState({
      ...this.state,
      count: newCount
    })
  }

  render(){
    console.log(3)
    return(
      <div>
      <Container>
        <Card variant="outlined" onMouseEnter={this.showButtons} onMouseLeave={this.hideButtons}>
          <InnerContainer>
          <Typography style={{margin:5}}>
          {this.props.title}
          </Typography>
          {this.state.showingButtons? <DeleteCardButton cardId={this.props.cardId}/> : " "}
          <input type="button" value ={this.state.count} onClick={this.handleClick}></input>
          </InnerContainer>
        </Card>
      </Container>
      </div>
  )}
}


const Container = styled.div`
  padding-bottom: 4px;
`;

const InnerContainer = styled.div`
  display:flex;
  flexDirection: row;
`

const mapStateToProps = state => {
  return {
    decks: state.decksReducer.decks,
    cards: state.cardsReducer.cards
  }
}

export default connect(mapStateToProps)(GetterCard);
