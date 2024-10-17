import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        cutmylink takes your complex URLs and turns them into neat, professional links that are easy to share and remember

      </div>
    </div>
  );
};

export default AppLayout;
