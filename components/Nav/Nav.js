import Links from './Links';

const layoutStyle = {
  padding: 20,
  textAlign: 'center'
};

const Nav = props => (
  <div style={layoutStyle}>
    <Links />
    {props.children}
  </div>
);

export default Nav;