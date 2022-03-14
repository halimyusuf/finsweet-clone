import Footer from "./footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="site-cont">
      <div>
        <Navbar />
      </div>
      <div className="site-content">{children}</div>
      <div className="site-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
