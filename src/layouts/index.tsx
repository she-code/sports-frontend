import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <main>
      <Header />
      <div className="mx-auto sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </main>
  );
}
