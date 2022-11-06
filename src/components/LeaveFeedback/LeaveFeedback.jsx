import PropTypes from 'prop-types';
import styled from 'styled-components';

const FB = styled.section``;
const Title = styled.h1`
  margin-bottom: 20px;
`;
const FBButtons = styled.button`
  color: black;
`;
const OptionsList = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
`;
export const LeaveFeedback = ({ title, options, onButtonClick }) => {
  return (
    <FB>
      <Title>{title}</Title>
      <OptionsList>
        {options.map(option => (
          <li key={option}>
            <FBButtons onClick={onButtonClick} name={option}>
              {option[0].toUpperCase() + option.slice(1)}
            </FBButtons>
          </li>
        ))}
      </OptionsList>
    </FB>
  );
};

LeaveFeedback.prototypes = {
  title: PropTypes.string,
  options: PropTypes.array,
  onButtonClick: PropTypes.func,
};
