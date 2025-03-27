import { LuHistory } from "react-icons/lu";
import { MdOutlineComment } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import svgIcons from "../assets/material_common_sprite794_gm3_grey_medium.svg"
import { HiOutlineChevronUp } from "react-icons/hi2";
import { useEffect, useState } from "react";
import useSocket from "../config/UseWebSocket";
import axios from "axios";

const DocumentPage = () => {
  const {sendMessage, messages} = useSocket();
  const [docText, setDocText] = useState('');
  const [fontSize, setFontSize] = useState(16);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);

  useEffect(()=>{
    setDocText(messages);
  },[messages]);

  const handleSave = async ()=>{
    await axios.post(``)
  };


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
                <div className="container-bottom-div">
                  <p>File</p>
                  <div className="file-drop-down">
                    <div className="file-drop-down-option">
                      <div className="sub-menu-icon">
                        <div className="icon-holder">
                          {/* <img id="menu-svg" src={svgIcons} alt="" style={{left:-750, top:-20}} /> */}
                        </div>
                        <p>New</p>
                      </div>
                      <p id="sub-menu-arrow">►</p>
                    </div>
                    <div className="file-drop-down-option" onClick={handleSave}>
                      <div className="sub-menu-icon">
                        <div className="icon-holder">
                          {/* <img id="menu-svg" src={svgIcons} alt="" style={{left:-750, top:-20}} /> */}
                        </div>
                        <p>Save</p>
                      </div>
                    </div>
                  </div>
                </div>

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
              <div className="icon-holder" style={{width:23}}>
                <img id="menu-svg" src={svgIcons} alt="" style={{left:-396, top:-882}} />
              </div>
              <MdArrowDropDown style={{color:'#414549'}} />
            </div>

            <div className="share-div">
              <div className="share-div-text"> <p>Share</p> </div>
              <div className="share-div-arrow">
                <MdArrowDropDown style={{color:'#414549'}} />
              </div>
            </div>

            <div className="circle-hover">
              <svg focusable="false" viewBox="0 -960 960 960" height="28" width="28">
                <path d="M480-80q2,0 2-2q0-82 31-154t85-126t126-85t154-31q2,0 2-2t-2-2q-82,0-154-31T598-598T513-724T482-878q0-2-2-2t-2,2q0,82-31,154T362-598T236-513T82-482q-2,0-2,2t2,2q82,0 154,31t126,85t85,126T478-82q0,2 2,2Z"></path>
              </svg>
            </div>

            <div className="profile-img-div">
              <div className="profile-img"></div>
            </div>

          </div>

        </div>

        <div className="menu-bar-section">
          <div className="menu-bar">
            <div className="menu-bar-left">

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

              <div className="menu-group-one">
                <div className="menu-option-div" style={{gap:10}}>
                  <p>Normal text</p>
                  <MdArrowDropDown />
                </div>
              </div>

              <div className="divider"></div>

              <div className="menu-group-one">
                <div className="menu-option-div" style={{gap:30}}>
                  <p>Arial</p>
                  <MdArrowDropDown />
                </div>
              </div>

              <div className="divider"></div>

              <div className="menu-group-one">

                <div className="menu-option-div" style={{padding:'0 4px'}} onClick={()=> setFontSize(fontSize-1)}>
                  <div className="icon-holder">
                    <img id="menu-svg" src={svgIcons} alt="" style={{left:-308, top:-446}} />
                  </div>
                </div>

                <div className="font-size-div">
                  <p>{fontSize}</p>
                </div>

                <div className="menu-option-div" style={{padding:'0 4px'}} onClick={()=> setFontSize(fontSize+1)}>
                  <div className="icon-holder">
                    <img id="menu-svg" src={svgIcons} alt="" style={{left:-1604, top:-472}} />
                  </div>
                </div>

              </div>

              <div className="divider"></div>

              <div className="menu-group-one">

                <div className="menu-option-div" style={{padding:'0 4px'}} onClick={()=> setBold(!bold)}>
                  <div className="icon-holder">
                    <img id="menu-svg" src={svgIcons} alt="" style={{left:-1534, top:-66}} />
                  </div>
                </div>

                <div className="menu-option-div" style={{padding:'0 4px'}} onClick={()=> setItalic(!italic)}>
                  <div className="icon-holder">
                    <img id="menu-svg" src={svgIcons} alt="" style={{left:-1410, top:-786}} />
                  </div>
                </div>

                <div className="menu-option-div" style={{padding:'0 4px'}}>
                  <div className="icon-holder">
                    <img id="menu-svg" src={svgIcons} alt="" style={{left:-660, top:-742}} />
                  </div>
                </div>

                <div className="menu-option-div" style={{padding:'0 4px'}}>
                  <div className="icon-holder" style={{borderBottom:'4px solid black', height:18}}>
                    <img id="menu-svg" src={svgIcons} alt="" style={{left:-172, top:-23}} />
                  </div>
                </div>

                <div className="menu-option-div" style={{padding:'0 4px'}}>
                  <div className="icon-holder">
                    <img id="menu-svg" src={svgIcons} alt="" style={{left:-46, top:-922}} />
                  </div>
                </div>

              </div>

              <div className="divider res-2"></div>

              <div className="menu-group-one res-2">

                <div className="menu-option-div">
                  <div className="icon-holder">
                    <img id="menu-svg" src={svgIcons} alt="" style={{left:-1398, top:-624}} />
                  </div>
                </div>

                <div className="menu-option-div">
                  <div className="icon-holder">
                    <img id="menu-svg" src={svgIcons} alt="" style={{left:-150, top:-776}} />
                  </div>
                </div>

                <div className="menu-option-div">
                  <div className="icon-holder">
                    <img id="menu-svg" src={svgIcons} alt="" style={{left:-118, top:-848}} />
                  </div>
                </div>

              </div>

              <div className="divider res-1"></div>

              <div className="menu-group-one res-1">

                <div className="menu-option-div" style={{padding:'0 0 0 4px'}}>
                  <div className="icon-holder">
                    <img id="menu-svg" src={svgIcons} alt="" style={{left:-812, top:-697}} />
                  </div>
                  <MdArrowDropDown />
                </div>

                <div className="menu-option-div">
                  <div className="icon-holder">
                    <img id="menu-svg" src={svgIcons} alt="" style={{left:-1734, top:-754}} />
                  </div>
                </div>

                <div className="menu-option-div">
                  <div className="icon-holder">
                    <img id="menu-svg" src={svgIcons} alt="" style={{left:-716, top:-468}} />
                  </div>
                </div>

                <div className="menu-option-div">
                  <div className="icon-holder">
                    <img id="menu-svg" src={svgIcons} alt="" style={{left:-1774, top:-956}} />
                  </div>
                </div>

                <div className="menu-option-div">
                  <div className="icon-holder">
                    <img id="menu-svg" src={svgIcons} alt="" style={{left:-224, top:-496}} />
                  </div>
                </div>

                <div className="menu-option-div">
                  <div className="icon-holder">
                    <img id="menu-svg" src={svgIcons} alt="" style={{left:-86, top:-390}} />
                  </div>
                </div>

                <div className="menu-option-div">
                  <div className="icon-holder">
                    <img id="menu-svg" src={svgIcons} alt="" style={{left:-1478, top:-858}} />
                  </div>
                </div>

                <div className="menu-option-div">
                  <div className="icon-holder">
                    <img id="menu-svg" src={svgIcons} alt="" style={{left:-1166, top:-20}} />
                  </div>
                </div>

              </div>

            </div>

            <div className="menu-bar-right">

              <div className="menu-option-div" style={{gap:10, borderRadius:30}}>
                <div className="icon-holder">
                  <img id="menu-svg" src={svgIcons} alt="" style={{left:-422, top:-604}} />
                </div>
                <p style={{marginRight:25}}>Editing</p>
                <MdArrowDropDown />
              </div>

              <div className="divider"></div>

              <div className="menu-option-div">
                <HiOutlineChevronUp />
              </div>
                
            </div>

          </div>
        </div>

        <div className="document-edit-section">
          <div className="editing-section-wrap">
            <div className="ruler">
              {/* {Array.from({length:12}, (_,i)=>(
                <span key={i}>{i+1}</span>
              ))} */}
              {
                Array.from({length: 91}, (_,i)=>(
                  <div key={i} className="rule"
                    style={{height: i % 4 === 0? 8:4}}
                  ></div>
                ))
              }
            </div>

            <div className="editing-section">
              <div className="editing-sheets-div">
                <div className="editing-canvas">
                  <textarea id="t-area" style={{
                    fontSize: fontSize, fontWeight: bold? 600 : 400,
                    fontStyle: italic? 'italic':''
                  }}
                    value={docText}
                    onChange={(e)=>{
                      setDocText(e.target.value);
                      sendMessage(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="tab-section">
              <div className="circle-hover">
                <div className="icon-holder">
                  <img id="menu-svg" src={svgIcons} alt="" style={{left:-330, top:0}} />
                </div>
              </div>

              <div className="doc-tabs">
                <p>Document tabs</p>
                <div className="circle-hover" style={{width:30, height:30}}>
                  <div className="icon-holder">
                    <img id="menu-svg" src={svgIcons} alt="" style={{left:-356, top:-422}} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default DocumentPage;