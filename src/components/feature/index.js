import { Container, Title, SubTitle } from "./styles/feature";

export default function Feature({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...restprops }) {
  return <Title {...restprops}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubtitle({ children, ...restprops }) {
  return <SubTitle {...restprops}>{children}</SubTitle>;
};
