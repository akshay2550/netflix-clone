import { JumbotronContainer } from "../containers/jumbotron";
import { FaqContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { OptForm } from "../components";
import { Feature } from "../components";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>

          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Get Started</OptForm.Button>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
