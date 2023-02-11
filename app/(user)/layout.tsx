// import " ../styles/globals.css";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import "../../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="mx-w-7xl mx-auto">
        <Header />
        <Banner />

        {children}
      </body>
    </html>
  );
}
