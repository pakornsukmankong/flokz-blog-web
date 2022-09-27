import { Outlet } from 'react-router-dom';
import Container from './Container';

function ContainerLayout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default ContainerLayout;
