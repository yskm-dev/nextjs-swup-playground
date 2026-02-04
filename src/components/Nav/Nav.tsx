import { TransitionLink } from '../TransitionLink';

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <TransitionLink href="/fade" type="fade">
            Fade
          </TransitionLink>
        </li>
        <li>
          <TransitionLink href="/panel" type="panel">
            Panel
          </TransitionLink>
        </li>
        <li>
          <TransitionLink href="/zoom" type="zoom">
            Zoom
          </TransitionLink>
        </li>
      </ul>
    </nav>
  );
};
