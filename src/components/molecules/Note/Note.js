import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { useDispatch } from 'react-redux';
import { removeNote } from 'store';
import { NoteWrapper, StyledButtonIcon } from './Notes.styles';


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
