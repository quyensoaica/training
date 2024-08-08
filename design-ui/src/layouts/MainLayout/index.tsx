import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollTop from "../components/ScrollTop";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='layout'>
      <Header />
      <div>{children}</div>
      <Footer />
      <ScrollTop />
    </div>
  );
};
export default MainLayout;
