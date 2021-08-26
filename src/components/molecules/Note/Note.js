import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { useRemoveNoteMutation } from 'store';
import { NoteWrapper, StyledButtonIcon } from './Notes.styles';

const Note = ({ title = 'Untitled', content = 'No content', id }) => {
  const [removeNote] = useRemoveNoteMutation();

  const handleRemoveNote = () => {
    removeNote({ id: id });
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
