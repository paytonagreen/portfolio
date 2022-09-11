import { useRouter } from 'next/router';
import NavStyles from './styles/NavStyles';
import Link from 'next/link';

function Nav() {
  const router = useRouter();

  return (
    <NavStyles>
      <h1>Payton Green</h1>
      <ul>
        <li className={router.pathname == '/' ? 'active' : ''}>
          <Link href='/'>ABOUT</Link>
        </li>
        <li className={router.pathname == '/work' ? 'active' : ''}>
          <Link href='/blog'>BLOG</Link>
        </li>
        <li className={router.pathname == '/contact' ? 'active' : ''}>
          <Link href='/contact'>CONTACT</Link>
        </li>
      </ul>
    </NavStyles>
  );
}

export default Nav;
