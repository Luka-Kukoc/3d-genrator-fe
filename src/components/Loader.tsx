import { BeatLoader } from "react-spinners";

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 h-screen w-full z-[10000000]">
      <BeatLoader color="#11dfc0" />
    </div>
  );
}

export default Loader;
