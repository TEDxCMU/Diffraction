import 'styles/fonts.css';
import 'styles/globals.css';
import NavBar from 'components/navbar';
import { Background } from 'components/background';

function MyApp({ Component, pageProps }) {
  // return (
  //   // <>
  //   //   <NavBar />
  //   //   <Background />
  //   //   <div className='grid content'>
  //   //     <Component {...pageProps} />
  //   //   </div>
  //   // </>
    
  // );
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp;
