import { ModalComponent } from "../Modal/ModalComponent";

export default {
    title: 'Modal',
    component: ModalComponent,
};

const Template = args => <ModalComponent {...args}/>;

export const Default = Template.bind({})