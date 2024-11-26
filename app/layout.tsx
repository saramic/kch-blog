import "../public/styles/main.scss";
import Header from "./header";
import Footer from "./footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <main className="container hero is-fullheight">
        <Header />
        {children}
        <Footer />
        </main>
      </body>
    </html>
  )
}
