import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="CCS home"><span className="brand-mark" aria-hidden="true">c</span>ccs<span className="brand-caption">/ starter</span></a>
        <span className="status"><span aria-hidden="true" />Development ready</span>
      </header>

      <main>
        <section className="hero" aria-labelledby="welcome-title">
          <div className="eyebrow">YOUR NEXT IDEA STARTS HERE</div>
          <h1 id="welcome-title">A fresh start.<br /><span>Make it yours.</span></h1>
          <p className="hero-description">A simple React foundation for whatever comes next. Your workspace is ready — all it needs is your idea.</p>
          <div className="hero-meta"><span className="tag">React</span><span className="tag">Vite</span><span className="meta-note">Small by design. Ready to grow.</span></div>
        </section>

        <section className="workspace" aria-label="Starter workspace">
          <article className="demo-card">
            <div className="card-label"><span>01 / TRY IT OUT</span><span className="tiny-tag">LIVE DEMO</span></div>
            <h2>A little interaction.</h2>
            <p>A working component, a little state, and instant feedback. Give it a click.</p>
            <div className="counter-row">
              <output aria-live="polite" aria-label="Click count">{count}<span>{count === 1 ? 'click' : 'clicks'}</span></output>
              <button onClick={() => setCount((value) => value + 1)}>Add a click <span aria-hidden="true">↗</span></button>
            </div>
          </article>
          <article className="next-card">
            <div className="card-label">02 / MAKE IT YOURS</div>
            <h2>Your canvas is ready.</h2>
            <p>Start with one component. Build something great.</p>
            <ol className="steps">
              <li><span>01</span><div>Open your starting point<code>src/App.jsx</code></div></li>
              <li><span>02</span><div>Find your own style<code>src/styles.css</code></div></li>
              <li><span>03</span><div>See changes as you go<small>Save a file. The preview updates.</small></div></li>
            </ol>
          </article>
        </section>
      </main>
      <footer><span>CCS · Your project, your possibilities.</span><span>Built with React + Vite <span aria-hidden="true">↗</span></span></footer>
    </div>
  );
}
