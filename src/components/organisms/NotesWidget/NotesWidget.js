import React from 'react';
import styled from 'styled-components';
import Note from 'components/molecules/Note/Note';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  width: 400px;
  height: auto;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(400px)')};
  transition: transform 0.6s ease-in-out;
  max-height: 700px;
  position: absolute;
  right: 0;
  top: 40px;
  background-color: white;
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
`;

const WidgetHandler = styled.button`
  width: 80px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  transform: rotate(-90deg);
  position: absolute;
  left: -55px;
  border-radius: 8px 8px 0 0;
  top: 40px;
  color: white;
  border: none;
  cursor: pointer;
`;

const NotesWrapper = styled.div`
  max-height: 700px;
  overflow-y: scroll;
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
`;
const NotesWidget = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const notes = useSelector((state) => state.notes);

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);
  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
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

export default NotesWidget;
