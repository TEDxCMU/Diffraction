import 'styles/globals.css';
import NavBar from 'components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <div className="grid">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
