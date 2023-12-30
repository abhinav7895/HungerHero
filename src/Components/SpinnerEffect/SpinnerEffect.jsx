import logo from "../../../assets/logo.svg";

export default function SpinnerEffect() {

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="spinner relative">
      </div>
      <div className="fixed top-50% left-0 right-0">
            <img src={logo}  className="w-10 mx-auto"/>
    </div>
        
    </div>
  );
}
