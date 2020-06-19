import Head from 'next/head'
import Typed from 'react-typed';

import ReactGA from 'react-ga';



function initializeReactGA() {
  ReactGA.initialize('UA-140824797-7')
}

export default function Home() {

  initializeReactGA()

  return (
    <div className="container">
      <Head>
        <title>Type It</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@zeit-ui/style@latest/dist/style.css"></link>
        
      </Head>
      
      <main>
        <h1 className="title">
          Using{' '}
          <Typed
            strings={[' <a href="#">Type It!</a>']}
            typeSpeed={75}
            backSpeed={50}
            loop
          />
        </h1>


        <div className="zi-card pin">

          <p>The text must be small, otherwise the page size will overflow.</p>
          <p>You can use <a href="https://www.w3schools.com/tags/tag_a.asp">a tag</a> to make links.</p>
          <p>You can also use <a href="https://www.w3schools.com/tags/tag_b.asp">b tag</a> to make a word bold.</p>
          <p><a href="https://www.w3schools.com/tags/att_global_style.asp">Style property</a> can be used to change your text color.</p>
        </div>
        
      </main>

      <footer>
      <p><a href="https://type-it.vercel.app/">Type It</a>  is <b>coded</b> with <b>❤</b> by <a href="https://alissonsteffens.com/">Alisson</a> and powered by {' '}
          <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a></p>
      </footer>

      <style jsx>{`
        .zi-card{
          width:100%;
          padding: 2rem;
          padding-top: 0rem;
          margin-top: 1rem;
        }
        .colors{
          margin-bottom: 2rem;
        }
        .center{
          text-align:center;
        }
        .zi-input{
          width: 100%;
          font-size: 1.5rem;
          padding: 2rem;
          margin: 0; 
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 75px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer p{
          font-size: .75rem;
          }
          @media (min-width: 600px) 
          {
              footer p{
                  font-size: 1rem;
              }
          }

        footer img {
          margin-left: 0.5rem;
        }

        

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        

        .logo {
          height: .75em;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
