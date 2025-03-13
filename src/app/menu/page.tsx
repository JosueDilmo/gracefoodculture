const MenuPage = () => {
  return (
    <div className="h-dvh w-dvw flex justify-center items-center">
      { /** Image for mobile **/}
      <img
        src="/menu.png"
        alt="Menu"
        className="object-center h-dvh w-dvh md:hidden"
        />
        { /** Image for desktop **/}
      <img
        src="/menuDesk.jpeg"
        alt="Menu"
        className="object-center h-dvh w-dvh hidden md:block"
        />
    </div>
    );
};

export default MenuPage;
