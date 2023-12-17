export const ConfigGame = ({ toggleConfig }) => {
  return (
    <>
      <section className="config-modal">
        <div className="content-config">
          <header>
            <h2>Config Game</h2>
            <button className="btn-icon btn-close" onClick={ toggleConfig }>
              <img src="./close-icon.svg" alt="image to close"/>
            </button>
          </header>
          <p><em>Coming soon...</em></p>
          <footer>
            <span>
              Developed by
              <a href="https://github.com/JhonEdinson-Shongo" target="_blank">
                @JhonEdinson-shongo
              </a>
            </span>
          </footer>
        </div>
      </section>
    </>
  )
}