import { ButtonComponent } from "../Button/ButtonComponent";

export default {
    title: 'Button-Component',
    component: ButtonComponent,

};

const Template = args => <ButtonComponent {...args}/>;
//  export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
    size: "sm"
};
export const Medium = Template.bind({});
Medium.args = {
    size: "md"
};

export const Large = Template.bind({});
Large.args = {
    size: "lg"
};