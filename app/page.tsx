import Image from "next/image";
import LoadingAnimation from "./components/loadingAnimation/LoadingAnimation";
import OrderNowButton from "./components/OrderNowButton/OrderNowButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10">
      {/* <h2 className={`mb-1 text-4xl font-bold`}>Deploy </h2> */}
      <h1 className="font-thin text-2xl sm:text-3xl md:text-5xl">
        <span className="font-bold">M</span>eesala{" "}
        <span className="font-bold">R</span>aju{" "}
        <span className="font-bold">G</span>ari{" "}
        <span className="font-bold">M</span>ess
      </h1>
      <LoadingAnimation></LoadingAnimation>
      <h2 className={`text-4xl font-bold mb-6`}>COMING SOON</h2>
      <OrderNowButton></OrderNowButton>
    </main>
  );
}
