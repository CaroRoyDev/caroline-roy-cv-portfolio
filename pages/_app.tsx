import GlobalStyles from "./../styles/GlobalStyles";
import CVPortfolioLayout from "../src/layouts/cv-portfolio/cv-portfolio.layout";
import Footer from "../src/layouts/cv-portfolio/partials/footer";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <CVPortfolioLayout>
        <Component {...pageProps} />
      </CVPortfolioLayout>
      <Footer />
    </>
  );
}

export default MyApp;
