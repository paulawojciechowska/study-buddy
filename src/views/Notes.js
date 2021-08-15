import React from 'react';
import styled from 'styled-components';
import FormField from 'components/molecules/FormField/FormField';
import Note from 'components/molecules/Note/Note';
import { Button } from 'components/atoms/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addNote } from 'store';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  grid-gap: 30px;
  padding: 30px;
`;

const FormWrapper = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledFormField = styled(FormField)`
  width: 100%;
  height: ${({ isTextarea }) => (isTextarea ? '300px' : 'unset')};
`;

const NotesWrapper = styled.div`
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
`;

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleAddNote = () => {
    dispatch(addNote({ title: `New Note ${Math.floor(Math.random() * 10)}`, content: 'Lorem ipsum dolor sit amet' }));
  };
  return (
    <Wrapper>
      <FormWrapper>
        <StyledFormField label="Title" name="title" id="title" />
        <StyledFormField isTextarea label="Content" name="content" id="content" />
        <Button onClick={handleAddNote}>Add</Button>
      </FormWrapper>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ title, content, id }) => <Note id={id} key={id} title={title} content={content} />)
        ) : (
          <p>Create your first note</p>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default Notes;