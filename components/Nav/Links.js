import Link from 'next/link';

const linkStyle = {
  padding: 50,
  color: 'white',
  fontSize: 20,
  textTransform: 'uppercase'
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
