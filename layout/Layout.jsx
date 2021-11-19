import Footer from "../components/footer";
import Header from "../components/header";

const Layout = ({ children }) => {
  return (
    <div className="main">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
