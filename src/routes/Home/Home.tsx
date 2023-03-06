import { Container } from "@mui/system";
import ClickMe from "../../components/ClickMe/ClickMe";
import TypeMe from "../../components/TypeMe/TypeMe";

function Home() {
  return (
    <Container className="Home">
      <p>Hello World</p>
      <ClickMe />
      <TypeMe />
    </Container>
  );
}

export default Home;
