import FormField from './FormField';

/* eslint-disable */
export default {
  title: 'Components/Molecules/FormField',
  component: FormField,
};
/* eslint-enable */

const Template = (args) => <FormField name="story" id="story" {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'login',
};
export const LongLabel = Template.bind({});
LongLabel.args = {
  label: 'Very long label to check how it looks',
};
