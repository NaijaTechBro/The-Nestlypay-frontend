import React from 'react'
import './scrolls.css'
import gif1 from '../../../assets/images/gif/1.gif'
// import gif2 from "../../assets/images/gif/2.gif";
// import gif3 from "../../assets/images/gif/3.gif";
// import gif4 from "../../assets/images/gif/4.gif";

function Scrolls() {
  return (
    <div className="scrolls-contained">
      <div className="scrolls-container">
        <div className="scrolls-container-box">
          <div className="scrolls-container_inputbox">
            <div className="scrolls-container_input">
              <h1>Effortlessly Track Bills and Time</h1>
              <p>
                Follow up on customers with automated payment reminders and keep
                track of invoice status so you’ll never leave money off the
                table again.
              </p>

              <img
                src={gif1}
                alt=""
                className="scrolls-container-section_box-gif1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="scrolls-container">
    //   <div className="scrolls-container-section">
    //     <div className="scrolls-container-section_input">
    //       <h1>
    //       Effortlessly Track Bills and Time
    //       </h1>
    //     </div>

    //   </div>

    // </div>
    // <div className="scrolls-container">
    //     <div className="scrolls-container-section">
    //         <div className="scrolls-container-section_input">
    //           <h1 className="scrolls-sectioin_input-text">
    //             Effortlessly Track Bills and Time
    //           </h1>
    //           <p className="text-white text-[16px] leading-9 text-sm mt-3	">
    //             Follow up on customers with automated payment reminders and keep
    //             track of invoice status so you’ll never leave money off the
    //             table again.
    //           </p>
    //         </div>
    //         <center>
    //           <img
    //             src={gif1}
    //             alt=""
    //             className="scrolls-container-section_box-gif1"
    //           />
    //         </center>
    //       </div>
    //     {/* <div className="h-full bg-[#000000] w-full">
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //         <div className="h-fit my-2 py-16 px-4">
    //           <h1 className="text-white text-[28px] font-semibold">
    //             Create Free Invoice{" "}
    //           </h1>
    //           <p className="text-white text-[16px] leading-9 text-sm mt-3	">
    //             Receive payments in one click by creating a free invoice
    //             template for you business or for your Job as a Freelancer.
    //           </p>
    //         </div>
    //         <center>
    //           <img
    //             src={gif2}
    //             alt=""
    //             className="scrolls-container-section_box-gif1"
    //             w-full
    //           />
    //         </center>
    //       </div>
    //     </div> */}
    //     {/* <div className="h-full bg-[#000000] w-full">
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //         <div className="h-fit my-2 py-16 px-4">
    //           <h1 className="text-white text-[28px] font-semibold">
    //             Assign Roles and Users{" "}
    //           </h1>
    //           <p className="text-white text-[16px] leading-9 text-sm mt-3	">
    //             Ease work within your organization by assigning users and roles.
    //             Empower your members to manage transactions and invoices without
    //             sharing the username and password.
    //           </p>
    //         </div>
    //         <center>
    //           <img
    //             src={gif3}
    //             alt=""
    //             className="scrolls-container-section_box-gif1"
    //           />
    //         </center>
    //       </div>
    //     </div> */}
    //     {/* <div className="h-full bg-[#000000] w-full">
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //         <div className="h-fit my-2 py-16 px-4">
    //           <h1 className="text-white text-[28px] font-semibold">
    //             Everything You Need to Secure Your Cashflow{" "}
    //           </h1>
    //           <p className="text-white text-[16px] leading-9 text-sm mt-3	">
    //             Follow up on customers with automated payment reminders and keep
    //             track of invoice status so you’ll never leave money off the
    //             table again.
    //           </p>
    //         </div>
    //         <center>
    //           <img
    //             src={gif4}
    //             alt=""
    //             className="scrolls-container-section_box-gif1"
    //           />
    //         </center>
    //       </div>
    //     </div> */}
    // </div>
  )
}

export default Scrolls
