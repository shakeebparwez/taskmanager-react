import Logo from "../assets/logo.png"

export function Header() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <div className="themeSelector">
        <span className="light"></span>
        <span className="medium"></span>
        <span className="dark"></span>
        <span className="gOne"></span>
        <span className="gTwo"></span>
        <span className="gThree"></span>
      </div>
    </header>
  )
}
