import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome to Thrif-T-fy!!!
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
// import { Outlet } from "react-router-dom";
// import bgImage from "../../assets/shoe.jpg";

// function AuthLayout() {
//   return (
//     <div className="flex min-h-screen w-full">
//       {/* Left Section with Background Image */}
//       <div
//         className="hidden lg:flex items-center justify-center w-1/2 px-12 bg-cover bg-center"
//         style={{ backgroundImage: `url(${bgImage})` }}

//       >
//         <div className="max-w-md space-y-6 text-center text-primary-foreground">
//           <h1 className="text-4xl font-extrabold tracking-tight">
//             Welcome to ThriftKicks
//           </h1>
//         </div>
//       </div>

//       {/* Right Section with Form Content */}
//       <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default AuthLayout;
