import docs from "../assets/docs_2020q4_48dp.png"


const SelectionPage = () => {
  return (
    <>
    <div className="selection-page-cover"></div>
        <div className="navbar">
            <div className="nav-left">
                <div className="burger-div">
                    <svg focusable="false" viewBox="0 0 24 24" height={24} width={24}>
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                    </svg>
                </div>
                <img className="docs-img" src={docs} alt="docs" />
                <p>Docs</p>
            </div>

            <div className="nav-mid">
                <div className="search-icon-div">
                    <svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px" fill="#444746">
                        <path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
                        <path d="M0,0h24v24H0V0z" fill="none"></path>
                    </svg>
                </div>
                <input className="search-input" type="text" placeholder="Search" />
            </div>

            <div className="nav-right">
                <div className="dots-menu">
                    <svg className="gb_F" focusable="false" viewBox="0 0 24 24" width={24} height={24}>
                        <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>            
                    </svg>
                </div>

                <div className="profile-img-div">
                    <div className="profile-img"></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SelectionPage