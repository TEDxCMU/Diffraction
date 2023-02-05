import 'styles/globals.css';
import NavBar from 'components/navbar';
import Footer from 'components/footer';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <NavBar />
            <div className="grid">
                <Component {...pageProps} />
            </div>
            <Footer/>
        </>
    );
}

export default MyApp;
