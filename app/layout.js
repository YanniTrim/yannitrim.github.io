import './styles.scss';
import { Open_Sans } from 'next/font/google';


export const metadata = {
  title: "Website Portfolio",
  description: "Portfolio web design",
};

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export default function RootLayout({
  children}) {
  return (
    <html lang="en" className={openSans.className}>
    {/* <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
    </Head> */}
      <body>
        {children}
      </body>
    </html>
  );
}
