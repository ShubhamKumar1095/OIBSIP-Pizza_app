import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Home from './Home';
import SideBarToggleButton from './SideBarToggleButton';

function MainContent({ activeMenuItem, collapsible, onToggleSidebar }) {
  const admin = useSelector((state) => state.admin);
  const { adminUserInfo } = admin;

  const formattedUserName = adminUserInfo.name
    .split(' ')
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
    .join(' ');

  return (
    <div
      className={`bg-orange-600 ${
        collapsible ? 'w-10/12' : 'w-full'
      } transition-width duration-300 ease-in-out p-10`}
    >
      <SideBarToggleButton onClick={onToggleSidebar} isOpen={collapsible} />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-center font-bold">
          Welcome to Admin Panel {formattedUserName}!
        </h1>
        {activeMenuItem === 'Home' && <Home />}
        {/* {activeMenuItem === 'Staff' && <StaffList />} */}
        {/* {activeMenuItem === 'Users' && <UsersList />} */}
        {/* {activeMenuItem === 'Pizzas' && <PizzasList />} */}
        {/* {activeMenuItem === 'Orders' && <OrdersList />} */}
        {/* {activeMenuItem === 'Inventory' && <Inventory />} */}
      </div>
    </div>
  );
}

MainContent.propTypes = {
  activeMenuItem: PropTypes.string.isRequired,
  collapsible: PropTypes.bool.isRequired,
  onToggleSidebar: PropTypes.func.isRequired,
};

export default MainContent;
