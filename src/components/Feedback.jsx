import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { LeaveFeedback } from './LeaveFeedback/LeaveFeedback';
import styled from 'styled-components';

const feedbackOptions = [`good`, `neutral`, `bad`];
const Section = styled.section`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = e =>
    this.setState(prevState => {
      return { [e.target.name]: prevState[e.target.name] + 1 };
    });

  render() {
    return (
      <Section>
        <LeaveFeedback
          title={`Please leave feedback`}
          options={feedbackOptions}
          onButtonClick={this.onButtonClick}
        />
        <Statistics data={this.state} title={`Statistics`}></Statistics>
      </Section>
    );
  }
}
