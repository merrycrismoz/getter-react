import React from 'react';
import styled from 'styled-components';
import Card from '../containers/Card';
import AddCardButton from '../containers/AddCardButton';


class Deck extends React.Component {

  render(){
    const deck = this.props
    return(
      <div>
        <Container>
          <Title>{deck.name}</Title>
          <TaskList>
            {deck.cards.map((card, index) => (
              <Card key={index} title={card.title} cardId={card.id} />
            ))}
          </TaskList>
          <AddCardButton deckId={deck.deckId}/>
        </Container>
      </div>
  )}
}


//STYLING
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: "#ebeef2";
  border-radius: 2px;
  width: 260px;
  height: "100%";
  display:flex;
  flex-direction: column;
  `;

  const Title = styled.h3`
  padding: 8px;
  background-color:#8fabd9;
`;

  const TaskList = styled.div`
    padding: 4px;
    background-color:#ebeef2;
    flex-grow:1;
    min-height: 10px;
  `;
//END STYLING

export default Deck;
