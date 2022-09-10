import Dropdown from '../../UI/Dropdown';
import Nav from '../../UI/Nav';
import Search from '../../UI/Search';

const Navbar = () => {
  return (
    <>
      <Nav />
      <div className="md:flex md:justify-between">
        <Search />
        <Dropdown />
      </div>
    </>
  );
};

export default Navbar;
