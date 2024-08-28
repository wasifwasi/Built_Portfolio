// src/pages/_app.js
import { ThemeProvider } from '../theme/ThemeContext';
import GlobalStyles from '../styles/GlobalStyles';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
