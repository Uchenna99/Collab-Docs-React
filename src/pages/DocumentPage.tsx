

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
                <div className="online-status"></div>
              </div>

              <div className="container-bottom"></div>

            </div>

          </div>

          <div className="docs-navbar-right"></div>

        </div>

        <div className="menu-bar"></div>

        <div className="document-edit-section"></div>
      </div>
    </>
  )
}

export default DocumentPage;