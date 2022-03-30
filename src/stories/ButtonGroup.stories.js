import { ButtonGroupComponent } from "../ButtonGroup/ButtonGroupComponent";

export default {
    title: 'Button-Group',
    component: ButtonGroupComponent,

};

const Template = args => <ButtonGroupComponent {...args}/>;


export const Horizontal = Template.bind({});
Horizontal.args = {
    vertical: false
};
export const Vertical = Template.bind({});
Vertical.args = {
    vertical: true
};

export const Success = Template.bind({});
Success.args = {
    buttonType: "success"
};

