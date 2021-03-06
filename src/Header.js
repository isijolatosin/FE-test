import { Link } from 'react-router-dom';
import { sunwingLogo } from './fetchData';

function Header() {
  return (
    <div
      style={{ backgroundColor: '#ff6000', height: 80 }}
      className='pl-5 lg:pl-5 2xl:pl-48 xl:pl-5 rounded-br-3xl'
    >
      <Link to='/'>
        <img className='pt-7' width='100' src={sunwingLogo} alt='Sunwing' />
      </Link>
      <div></div>
    </div>
  );
}

export default Header;
