// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";

// Topbar.propTypes = {
//   name: PropTypes.string,
//   notifications: PropTypes.array,
//   fullWidth: PropTypes.bool,
// };

// function Topbar({ name, notifications = [], fullWidth = true }) {
//   const navigate = useNavigate();
//   const [date, setDate] = useState(new Date());

//   useEffect(() => {
//     const timerId = setInterval(() => setDate(new Date()), 1000);
//     return () => clearInterval(timerId);
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("admin");
//     localStorage.removeItem("hostel");
//     localStorage.removeItem("student");
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <div
//       className={`py-5 px-5 flex items-center justify-between bg-white text-black w-full shadow-lg absolute top-0
//         ${fullWidth ? "" : "md:w-[calc(100%-256px)] md:ml-[256px]"} ` } 
//     >
//       <span className="hidden md:block ml-[250px]">
//         {date.toLocaleTimeString()}
//       </span>

//       <span className="font-semibold text-indigo-600">{name}</span>

//       <div className="flex gap-3">
//         {/* Settings */}
//         <Link to="settings">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="black"
//             className="w-6 h-6 hover:stroke-[#4f46e5]"
//           >
//             {/* Gear Icon */}
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
//             />
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//             />
//           </svg>
//         </Link>

//         {/* Notifications */}
//         <div className="relative group cursor-pointer">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="black"
//             className="w-6 h-6 hover:stroke-[#4f46e5]"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
//             />
//           </svg>
//           <div className="absolute bg-white text-black top-10 right-10 p-5 w-96 hidden group-hover:flex flex-col rounded-xl shadow-md z-10">
//             <ul>
//               {notifications.length > 0 ? (
//                 notifications.map((noti, index) => (
//                   <li
//                     key={index}
//                     className="py-4 px-3 flex justify-between items-center border-b hover:bg-neutral-100 rounded transition"
//                   >
//                     New account request from{" "}
//                     <span className="text-indigo-600">{noti}</span>
//                   </li>
//                 ))
//               ) : (
//                 <li className="py-2 text-center text-gray-400">
//                   No new notifications
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>

//         {/* Profile & Logout */}
//         <div className="relative group cursor-pointer">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="black"
//             className="w-6 h-6 hover:stroke-[#4f46e5]"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
//             />
//           </svg>

//           <div className="absolute bg-white text-black top-6 right-0 ml-6 hidden group-hover:flex flex-col rounded shadow-md z-10">
//             <Link to="settings" className="py-2 px-6 hover:bg-neutral-200">
//               Settings
//             </Link>
//             <button
//               onClick={logout}
//               className="py-2 px-6 hover:bg-neutral-200 text-left"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export { Topbar };

import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

Topbar.propTypes = {
  name: PropTypes.string,
  notifications: PropTypes.array,
  fullWidth: PropTypes.bool,
};

function Topbar({ name, notifications = [], fullWidth = true }) {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [isNotifOpen, setNotifOpen] = useState(false);
  const notifRef = useRef(null);

  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("hostel");
    localStorage.removeItem("student");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div
      className={`py-5 px-5 flex items-center justify-between bg-white text-black w-full shadow-lg absolute top-0
        ${fullWidth ? "" : "md:w-[calc(100%-256px)] md:ml-[256px]"} `}
    >
      <span className="hidden md:block ml-[250px]">
        {date.toLocaleTimeString()}
      </span>

      <span className="font-semibold text-indigo-600">{name}</span>

      <div className="flex gap-3">
        {/* Settings */}
        <Link to="settings">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-6 h-6 hover:stroke-[#4f46e5]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </Link>

        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button onClick={() => setNotifOpen((prev) => !prev)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-6 h-6 hover:stroke-[#4f46e5]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>
          {isNotifOpen && (
            <div className="absolute bg-white text-black top-10 right-0 p-4 w-80 max-w-[90vw] flex flex-col rounded-xl shadow-md z-20">
              <ul>
                {notifications.length > 0 ? (
                  notifications.map((noti, index) => (
                    <li
                      key={index}
                      className="py-3 px-4 flex justify-between items-center border-b hover:bg-neutral-100 rounded transition"
                    >
                      New account request from{" "}
                      <span className="text-indigo-600">{noti}</span>
                    </li>
                  ))
                ) : (
                  <li className="py-2 text-center text-gray-400">
                    No new notifications
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Profile & Logout */}
        <div className="relative group cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-6 h-6 hover:stroke-[#4f46e5]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <div className="absolute bg-white text-black top-6 right-0 ml-6 hidden group-hover:flex flex-col rounded shadow-md z-10">
            <Link to="settings" className="py-2 px-6 hover:bg-neutral-200">
              Settings
            </Link>
            <button
              onClick={logout}
              className="py-2 px-6 hover:bg-neutral-200 text-left"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Topbar };
