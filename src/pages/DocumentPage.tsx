import { LuHistory } from "react-icons/lu";
import { MdOutlineComment } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";

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

            <div className="menu-group-one"></div>
          </div>
        </div>

        <div className="document-edit-section"></div>
      </div>
    </>
  )
}

export default DocumentPage;