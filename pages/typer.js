import React, { Component } from 'react';
import Head from 'next/head'
import Typed from 'react-typed';
import queryString from 'query-string';


const API = 'http://localhost:3000/api/message/';


class Typer extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          sms: {},
        };
    }

    componentDidMount() {
        const parsed = queryString.parse(location.search);
        let cod = parsed.code;
        fetch(API + cod)
            .then(response => response.json())
            .then(data => this.setState({ sms: data[0] }));
        
    }
//   const doit = () =>{
//     
//   }
  

  render () {
    const { sms } = this.state;
    return (
        <div className="container"
        style={
                sms.message?
                {background: 'linear-gradient(136deg, '+sms.col1+', '+sms.col2+')',
                animation: 'AnimationName 30s ease infinite'
                }
                :{}
            }
        >
        <Head>
            <title>Type It</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@zeit-ui/style@latest/dist/style.css"></link>
        </Head>

        <main>
            <h1 className="hero">
            {
                sms.message?
                <Typed
                    strings={[sms.message]}
                    typeSpeed={75}
                    backSpeed={50}
                    loop
                />
                :""
            }
            
            
            </h1>
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
          
            .hero{
                color: #fff !important;
            }
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
            padding: 0;
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
            background: #fff;
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
            @-webkit-keyframes AnimationName {
                0%{background-position:97% 0%}
                50%{background-position:4% 100%}
                100%{background-position:97% 0%}
            }
            @-moz-keyframes AnimationName {
                0%{background-position:97% 0%}
                50%{background-position:4% 100%}
                100%{background-position:97% 0%}
            }
            @-o-keyframes AnimationName {
                0%{background-position:97% 0%}
                50%{background-position:4% 100%}
                100%{background-position:97% 0%}
            }
            @keyframes AnimationName {
                0%{background-position:97% 0%}
                50%{background-position:4% 100%}
                100%{background-position:97% 0%}
            }
        `}</style>
        </div>
    )
  }
}

export default Typer;
