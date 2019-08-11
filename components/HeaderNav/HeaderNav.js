import Links from './Links';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const HeaderNav = props => (
  <div style={layoutStyle}>
    <Links />
    {props.children}
  </div>
);

export default HeaderNav;
