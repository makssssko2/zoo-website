const BurgerMenu = ({ callback, active }) => {
  return (
    <button
      className={`burger-menu ${active ? 'burger-menu_active' : ''}`}
      onClick={callback}
    >
      <div className="burger-menu__line" />
    </button>
  );
};

export default BurgerMenu;
