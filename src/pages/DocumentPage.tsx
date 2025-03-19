import { LuHistory } from "react-icons/lu";
import { MdOutlineComment } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import svgIcons from "../assets/material_common_sprite794_gm3_grey_medium.svg"

const DocumentPage = () => {
  return (
    <>
      <div className="document-page-wrap">
        <div className="docs-navbar">

          <div className="docs-navbar-left">
            <div className="docs-navbar-left-img"></div>

            <div className="docs-navbar-left-container">

              <div className="container-top">
                <div className="doc-name">
                  <p>Untitled document</p>
                </div>

                <div className="online-status">
                  <p>Working offline</p>
                </div>
              </div>

              <div className="container-bottom">
                <div className="container-bottom-div"> <p>File</p> </div>

                <div className="container-bottom-div"> <p>Edit</p> </div>

                <div className="container-bottom-div"> <p>view</p> </div>

                <div className="container-bottom-div"> <p>Insert</p> </div>

                <div className="container-bottom-div"> <p>Format</p> </div>

                <div className="container-bottom-div"> <p>Tools</p> </div>

                <div className="container-bottom-div"> <p>Extensions</p> </div>

                <div className="container-bottom-div"> <p>Help</p> </div>
              </div>

            </div>

          </div>

          <div className="docs-navbar-right">

            <div className="circle-hover">
              <LuHistory id="nav-right-icons" style={{color:'#777'}} />
            </div>

            <div className="circle-hover">
              <MdOutlineComment id="nav-right-icons" style={{}} />
            </div>

            <div className="video-icon-div">
              <BiVideo id="nav-right-icons"/>
              <MdArrowDropDown style={{color:'#414549'}} />
            </div>

            <div className="share-div">
              <div className="share-div-text"> <p>Share</p> </div>
              <div className="share-div-arrow">
                <MdArrowDropDown style={{color:'#414549'}} />
              </div>
            </div>

            <div className="profile-img-div">
              <div className="profile-img"></div>
            </div>

          </div>

        </div>

        <div className="menu-bar-section">
          <div className="menu-bar">

            <div className="menu-group-one">

              <div className="menu-option-div">
                <MdOutlineSearch id="menu-icons" />
              </div>

              <div className="menu-option-div">
                <div className="icon-holder">
                  <svg  viewBox="130 754 1938 1224" height="1224">
                    <path fill="#444746" d="M136 770v-1.5h6q1.042 0 1.771-.729T144.5 766t-.729-1.771T142 763.5h-5.125l1.937 1.938-1.062 1.062-3.75-3.75 3.75-3.75 1.062 1.062-1.937 1.938H142q1.667 0 2.833 1.167Q146 764.333 146 766t-1.167 2.833Q143.667 770 142 770Z"/>
                  </svg>
                </div>
              </div>

              <div className="menu-option-div">
                <div className="icon-holder">
                  <img id="menu-svg" src={svgIcons} alt="" style={{left:-716, top:-248}} />
                </div>
              </div>

              <div className="menu-option-div">
                <div className="icon-holder">
                  <img id="menu-svg" src={svgIcons} alt="" style={{left:-1354, top:-950}} />
                </div>
              </div>

              <div className="menu-option-div">
                <div className="icon-holder">
                  <img id="menu-svg" src={svgIcons} alt="" style={{left:-1822, top:-981}} />
                </div>
              </div>

              <div className="menu-option-div">
                <div className="icon-holder">
                  <img id="menu-svg" src={svgIcons} alt="" style={{left:-1216, top:-312}} />
                </div>
              </div>

              <div className="menu-option-div" style={{gap:10}}>
                <p>100%</p>
                <MdArrowDropDown />
              </div>

            </div>

            <div className="divider"></div>

            <div className="group2"></div>
          </div>
        </div>

        <div className="document-edit-section">
        </div>
      </div>
    </>
  )
}

export default DocumentPage;