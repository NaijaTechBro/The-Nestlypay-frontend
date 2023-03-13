import React from "react";
import faces from '../../../../assets/images/faces.png'

function Layout({ children }) {
  return (
    <section className="grid grid-col-1 md:grid-cols-2 gap-6">
      <div className="bg-[#0C46D3] h-fit md:h-screen p-6">
        <div className="w-6/12 mx-auto">
        </div>
        <div className="w-7/12 mx-auto h-full md:flex flex-col justify-center items-center hidden ">
          <h1 className="text-lg font-semibold text-white">
            Start taking steps to manage your business now.
          </h1>
          <div className="flex  items-center w-full mt-6">
            <div className="mr-4">
              <img src={faces} className="h-10 w-32" />
            </div>
            <h6 className="text-white ">Join 1,893 People.</h6>
          </div>
        </div>
      </div>
      <div className="bg-white h-fit py-8 md:h-screen overflow-y-auto w-full">
        {children}
      </div>
    </section>
  );
}

export default Layout;