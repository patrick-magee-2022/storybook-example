import { Navigation } from "../Navigation/Navigation";

export default {
    title: 'Navigation-Component',
    component: Navigation,

    argTypes: {
        backgroundColor: {control: 'color'}
      },
};

const Template = args => <Navigation {...args}/>;

// export const Default = Template.bind({})

// const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    active: true,
    text: 'Link',
};

export const Secondary = Template.bind({});
Secondary.args = {
    text: 'Button',
    active: false, 
};
