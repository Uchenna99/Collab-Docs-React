import { RxHamburgerMenu } from "react-icons/rx";
import docs from "../assets/docs_2020q4_48dp.png"


const SelectionPage = () => {
  return (
    <>
        <div className="navbar">
            <div className="nav-left">
                <RxHamburgerMenu className="burger"/>
                <img className="docs-img" src={docs} alt="docs" />
                <p>Docs</p>
            </div>
            <div className="nav-mid"></div>
            <div className="nav-right"></div>
        </div>
    </>
  )
}

export default SelectionPage