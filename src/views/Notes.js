import React from 'react';
import Note from 'components/molecules/Note/Note';
import { Button } from 'components/atoms/Button/Button';
import { useAddNoteMutation, useGetNotesQuery } from 'store';
import { useForm } from 'react-hook-form';
import { Wrapper, FormWrapper, StyledFormField, NotesWrapper } from './Notes.styles';

const Notes = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { data, isLoading } = useGetNotesQuery();
  const [addNote, rest] = useAddNoteMutation();

  React.useEffect(() => {
    console.log(data);
    console.log(rest);
  }, [data, rest]);
  const handleAddNote = async ({ title, content }) => {
    addNote({ title, content });
    setTimeout(reset(), 500);
  };
  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit(handleAddNote)}>
        <StyledFormField {...register('title', { required: true })} label="Title" name="title" id="title" />
        <StyledFormField {...register('content', { required: true })} isTextarea label="Content" name="content" id="content" />
        {errors.title && <span>Title is required</span>}
        {errors.content && <span>Content is required</span>}
        <Button type="submit">Add</Button>
      </FormWrapper>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <NotesWrapper>
          {data.notes.length ? (
            data.notes.map(({ title, content, id }) => <Note id={id} key={id} title={title} content={content} />)
          ) : (
            <p>Create your first note</p>
          )}
        </NotesWrapper>
      )}
    </Wrapper>
  );
};

export default Notes;
