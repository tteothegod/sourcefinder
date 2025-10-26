import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a id="TitleLink" href="./index.html">
          <img
            src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2@2x.png"
            alt="Wikipedia Logo"
          />
          <h1>Source Finder</h1>
        </a>
      </header>
      <main className='App-main'>
        <div className="App-body">

          <section>
            <h2>How it Works</h2>
            <p>
              Source Finder works by sending HTML requests to Google, parsing the
              HTML searching for a Wikipedia page similar to that search. Then
              sending an HTTP request to that Wikipedia link and scalping that page
              for all its sources. All those sources are filtered searching for
              reputable databases, then the remaining sources are processed by a
              neural network I trained and deemed either credible or not.
            </p>
          </section>
          <section>
            <h2>How to Use</h2>
            <p>
              Enter a search term in the input box below and click "Search". The
              tool will find and classify Wikipedia sources based on credibility.
            </p>
          </section>
          <section>
            <h2>Disclaimer</h2>
            <p>
              An API is currently being developed, so unfortunately the search function currently does not work. Stay tuned for updates!

            </p>
          </section>
          
          <form id="searchForm">
            <input
              type="text"
              id="queryInput"
              placeholder="Search Wikipedia..."
              required
            />
            <button id="querySubmitBtn" type="button">
              Search
            </button>
          </form>
          <div id="error" className="error hidden"></div>
          <div id="resultSection" hidden>
            <h2>Results</h2>
            <div id="resultContainer">
              <div id="resultList"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
