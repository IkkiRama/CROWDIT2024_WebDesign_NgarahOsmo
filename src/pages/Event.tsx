import React from "react";

// component
import DarkNavbar from "../layouts/darkNavbar";

// icons
import { FaCalendar } from "react-icons/fa";

export default function Event() {
  return (
    <>
      <DarkNavbar />

      <main className="mt-28 mb-28 px-20">
        <div className="mt-5">
          <hr />
          <h1 className="font-bold m-4">Juli 2024</h1>
          <hr />
        </div>
        {/* flex justify-center items-center */}
        <div className="flex items-center">
          <div className="mt-5">
            <img
              className="h-[250px] w-[320px] object-cover rounded border border-black"
              src="/images/card/FGS.jpeg"
              alt=""
            />
          </div>
          <div className="pl-6 mt-5">
            <div className="text-orange-700">
              <p className="font-bold text-xl mb-3">Pertunjukan Berikutnya</p>
            </div>
            <div className="font-serif text-2xl mb-5">
              <p>Festival Gunung Slamet</p>
            </div>
            <div className="flex font-sans">
              <ul>
                <li className="mb-3 flex items-center gap-2">
                  <FaCalendar />12 - 14 Juli 2024
                </li>
                <li>D'Las Purbalingga</li>
              </ul>
              <ul className="ml-5">
                <li>Semua Umur</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="mt-5">
            <img
              className="h-[250px] w-[320px] object-cover rounded border border-black"
              src="/images/card/KKS.jpg"
              alt=""
            />
          </div>
          <div className="pl-6 mt-5">
            <div className="text-orange-700">
              <p className="font-bold text-xl mb-3">Pertunjukan Berikutnya</p>
            </div>
            <div className="font-serif text-2xl mb-5">
              <p>Karya Kreatif Serayu</p>
            </div>
            <div className="flex font-sans">
              <ul>
                <li className="mb-3 flex items-center gap-2">
                  <FaCalendar />20 - 21 Juli 2024
                </li>
                <li>KPW Bank Indonesia Purwokerto</li>
              </ul>
              <ul className="ml-5">
                <li>Semua Umur</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
