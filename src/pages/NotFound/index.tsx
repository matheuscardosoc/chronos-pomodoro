import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius
          blanditiis laudantium. Ipsa, possimus debitis enim qui tempore minima
          sint vel molestias, ducimus unde provident laborum natus quaerat
          voluptate dolor?
        </p>
      </Container>
    </MainTemplate>
  );
}
