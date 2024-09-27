import React from "react";

// component
import DarkNavbar from "../layouts/darkNavbar";

// icons
import { FaCalendar } from "react-icons/fa";
import Pagination from "../components/pagination";
import {
  IconCalendar,
  IconListBullets,
  IconLocation,
  IconMap,
  IconTicket,
} from "@irsyadadl/paranoid";

export default function Event() {
  return (
    <>
      <DarkNavbar />
      <section className="bg-gradient-to-r from-red-500 to-red-400 pt-36 pb-10 px-20 text-white">
        <h1 className="font-semibold text-3xl">RAGAM EVENT</h1>
      </section>
      <section className="my-20 lg:px-20 px-10">
        <div className="flex gap-5 items-center mb-5 mt-20">
          <span className="bg-red-500 text-white w-[50px] h-[50px] flex items-center justify-center rounded-xl">
            <IconListBullets className="w-[30px] h-[30px]" />
          </span>
          <h3 className="text-2xl font-semibold">LIST EVENT</h3>
        </div>
        <div className="grid lg:grid-cols-5 gap-10 items-center mt-10">
          <div className="h-[350px] w-full rounded-md overflow-hidden lg:col-span-2">
            <img
              src="/images/events/FGS.jpeg"
              alt=""
              className="object-cover h-full w-full"
              data-aos-once="true"
              data-aos="fade-left"
            />
          </div>
          <div
            className="lg:col-span-3"
            data-aos-once="true"
            data-aos="fade-right"
          >
            <h5 className="text-red-500 font-semibold md:mb-5 mb-3 md:text-base text-sm">
              RAGAM EVENT
            </h5>
            <span>
              <h2 className="font-bold md:text-3xl text-gray-800 text-xl">
                {"FESTIVAL GUNUNG SLAMET"}
              </h2>
            </span>
            <p className="text-gray-800 mt-5 md:text-base text-[12px]">
              Acara ini akan menjadi salah satu festival budaya terbesar di Jawa Tengah, menghadirkan berbagai kegiatan seperti pentas seni, pameran kerajinan lokal, dan kuliner tradisional. Setiap pengunjung akan mendapatkan pengalaman unik dan mendalam tentang kebudayaan masyarakat sekitar Gunung Slamet. Ayo, jangan lewatkan kesempatan ini untuk merasakan kekayaan budaya Nusantara dan menjadi bagian dari sejarah!
            </p>
            <div className="flex gap-5 mt-10 text-gray-600 md:text-base text-sm">
              <span className="flex gap-2 items-center">
                <IconTicket />
                <small>Rp 5.000</small>
              </span>
              <span className="flex gap-2 items-center">
                <IconCalendar />
                <small>12-14 Juli Des 2024</small>
              </span>
              <span className="flex gap-2 items-center">
                <IconLocation />
                <small>Purbalingga</small>
              </span>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-5 gap-10 items-center mt-10">
          <div className="h-[350px] w-full rounded-md overflow-hidden lg:col-span-2">
            <img
              src="/images/events/KKS.jpg"
              alt=""
              className="object-cover h-full w-full"
              data-aos-once="true"
              data-aos="fade-left"
            />
          </div>
          <div
            className="lg:col-span-3"
            data-aos-once="true"
            data-aos="fade-right"
          >
            <h5 className="text-red-500 font-semibold md:mb-5 mb-3 md:text-base text-sm">
              RAGAM EVENT
            </h5>
            <span>
              <h2 className="font-bold md:text-3xl text-gray-800 text-xl">
                {"KARYA KREATIVE SERAYU 2024"}
              </h2>
            </span>
            <p className="text-gray-800 mt-5 md:text-base text-[12px]">
              Karya Kreative Serayu 2024 akan menampilkan berbagai hasil karya kreatif dari seniman lokal dan nasional. Acara ini bertujuan untuk memperkenalkan seni dan budaya yang berkembang di sekitar wilayah Serayu, memberikan wadah bagi generasi muda untuk mengekspresikan kreativitas mereka. Jadilah bagian dari perayaan seni dan budaya ini, dengan berbagai kegiatan menarik seperti pameran seni, workshop, dan pertunjukan musik yang akan memanjakan para pengunjung.
            </p>
            <div className="flex gap-5 mt-10 text-gray-600 md:text-base text-sm">
              <span className="flex gap-2 items-center">
                <IconTicket />
                <small>Gratis</small>
              </span>
              <span className="flex gap-2 items-center">
                <IconCalendar />
                <small>20-21 Juli 2024</small>
              </span>
              <span className="flex gap-2 items-center">
                <IconLocation />
                <small>Kompleks Menara Pandang Teratai Purwokerto</small>
              </span>
            </div>
          </div>
        </div>

        <Pagination />
      </section>

    </>
  );
}
