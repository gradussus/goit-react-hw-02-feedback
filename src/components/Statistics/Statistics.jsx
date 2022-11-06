import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
`;

export const Statistics = ({ title, data: { good, neutral, bad } }) => {
  const total = good + neutral + bad;
  return (
    <List>
      <h2>{title}</h2>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {Math.round((good / total) * 100) || `0`}%</li>
    </List>
  );
};

Statistics.prototypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};
