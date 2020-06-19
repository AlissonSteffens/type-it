import Head from 'next/head'
import Typed from 'react-typed';
import SketchButton from '../components/SketchButton';
import stringHash from 'string-hash';


let _colorOne = {};
let _colorTwo = {};
let _message = "";

const handleChange = (event) => {
  _message = event.target.value;
}

const postToAPI = () => {

  let details = {
      'message': _message,
      'col1': _colorOne.getColor(),
      'col2': _colorTwo.getColor(),
      'hash': stringHash(_message+_colorOne.getColor()+_colorTwo.getColor())
  };

  let formBody = [];
  for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  fetch('/api/message', {
      method: 'POST',
      headers: {
          'Authorization': 'Bearer token',
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
  }).then((response) => response.json())
      .then((responseData) => {
          console.log(responseData);
          window.open("/typer?k=t&code="+stringHash(_message+_colorOne.getColor()+_colorTwo.getColor()));
      });
};

export default function Home() {

  const doit = () =>{
    console.log(_colorOne.getColor(), _colorTwo.getColor(), _message, stringHash(_message+_colorOne+_colorTwo))
    postToAPI()
  }
  

  return (
    <div className="container">
      <Head>
        <title>Type It</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@zeit-ui/style@latest/dist/style.css"></link>
      </Head>

      <main>
        <h1 className="title">
          Welcome to{' '}
          <Typed
            strings={[' <a href="#">Type It!</a>']}
            typeSpeed={75}
            backSpeed={50}
            loop
          />
        </h1>

        <p className="description">
          Thats an easy app that animates someone typing things for you.
        </p>

        <div className="zi-card pin">
          <h2 className="center">Creating your own animation</h2>

          <p>Start by choosing a message</p>
          <input className="zi-input" onChange={handleChange} placeholder="It's typing the message"></input>

          <p>And two colors for the background</p>
          <div className="center colors">
            <SketchButton ref={(ref) => _colorOne = ref}/>
            <SketchButton ref={(ref) => _colorTwo = ref}/>
          </div>

          <div className="center">
          <button className="zi-btn success" onClick={doit}>Create Page</button>
          </div>
          
          
        </div>
      </main>

      <footer>
      <p><b class="code">code</b> with <b class="heart">❤</b> by <a href="https://alissonsteffens.com/">Alisson</a> powered by {' '}
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
