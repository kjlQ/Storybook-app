import Button from "../UI/Button";
import "../../index.css";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      defaultValue: "primary",
      options: ["primary", "secondary"],
      control: {
        type: "select",
      },
    },
    size: {
      defaultValue: "medium",
      options: ["medium", "large"],
      control: {
        type: "radio",
      },
    },
  },
};

const Template = (arg) => <Button {...arg} />;

export const Common = Template.bind({});
Common.args = {
  children: "Press me",
  variant: "primary",
};
