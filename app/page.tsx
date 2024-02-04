import AppGrid from "./components/appGrid/AppGrid";
import LoadingAnimation from "./components/loadingAnimation/LoadingAnimation";
import Navbar from "./components/navbar/Navbar";
import OrderNowButton from "./components/OrderNowButton/OrderNowButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Navbar></Navbar>
      {/* <h1 className="text-2xl">
        <span className="font-bold">M</span>eesala{" "}
        <span className="font-bold">R</span>aju{" "}
        <span className="font-bold">G</span>ari{" "}
        <span className="font-bold">M</span>ess
      </h1> */}
      <LoadingAnimation></LoadingAnimation>
      <AppGrid></AppGrid>
    </main>
  );
}
