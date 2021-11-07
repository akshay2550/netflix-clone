import { Container, Input, Button, Text } from "./styles/opt-form";

export default function OptForm({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

OptForm.Text = function OptFormText({ children, ...restprops }) {
  return <Text {...restprops}>{children}</Text>;
};

OptForm.Input = function OptFormInput({ children, ...restprops }) {
  return <Input {...restprops} />;
};

OptForm.Button = function OptFormButton({ children, ...restprops }) {
  return (
    <Button {...restprops}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try now" />
    </Button>
  );
};
