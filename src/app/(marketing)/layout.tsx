import Footer from "./_components/footer";
import Header from "./_components/header";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1 flex-col items-center justify-center'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
