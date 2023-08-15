import BotonesMenu from "./BotonesMenu";
import Carrito from "./Carrito";
import Hamburguesa from "./Hamburguesa";
import Logo from "./Logo";

export default function NavBarPropio() {
  return (
    <header className="fixed w-full z-10 bg-slate-900">
      <nav
        aria-label="Top"
        className=" flex justify-between mx-auto h-16 max-w-7xl px-8 items-center"
      >
        <Hamburguesa />
        <Logo />
        <div className="flex justify-center h-full space-x-6  max-lg:hidden">
          <BotonesMenu name_menu="Anteojos" />
          <BotonesMenu name_menu="Calzado" />
          <BotonesMenu name_menu="Jeans" />
          <BotonesMenu name_menu="Remeras" />
        </div>
        <Carrito/>

      </nav>
    </header>

    
  );
}
