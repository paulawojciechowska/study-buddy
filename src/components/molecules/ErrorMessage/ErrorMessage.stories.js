import ErrorMessage from './ErrorMessage';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: hidden !important;
`;

/* eslint-disable */
export default {
  title: 'Components/Molecules/ErrorMessage',
  component: ErrorMessage,
};
/* eslint-enable */

const Template = (args) => (
  <Wrapper>
    <ErrorMessage {...args} />
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {};
