import 'styles/fonts.css';
import 'styles/globals.css';
import NavBar from 'components/navbar';
import { Background } from 'components/background';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      {/* <div className="grid"> */}
      <Background />
      <Component {...pageProps} />
      {/* </div> */}
    </>
  );
}

export default MyApp;
