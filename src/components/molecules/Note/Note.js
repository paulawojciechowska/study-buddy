import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { Title } from 'components/atoms/Title/Title';
import { useDispatch } from 'react-redux';
import { removeNote } from 'store';

const NoteWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  h3,
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
const StyledButtonIcon = styled(ButtonIcon)`
  position: absolute;
  top: 20px;
  left: -40px;
`;

const Note = ({ title = 'Untitled', content = 'No content', id }) => {
  const dispatch = useDispatch();

  const handleRemoveNote = () => {
    dispatch(removeNote({ id: id }));
  };
  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <p>{content}</p>
      <StyledButtonIcon onClick={handleRemoveNote} />
    </NoteWrapper>
  );
};

export default Note;
