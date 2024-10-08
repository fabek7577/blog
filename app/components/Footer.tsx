"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";
const Footer = () => {
  (window as any).replainSettings = { id: "83191f09-535b-4e1b-a19d-fcd9f4223277" };
  (function (u) {
    var s = document.createElement("script");
    s.async = true;
    s.src = u;
    var x = document.getElementsByTagName("script")[0];
    (x as any).parentNode.insertBefore(s, x);
  })("https://widget.replain.cc/dist/client.js");

  const [email, setEmail] = useState<string>("");
  let token = process.env.BOTSECRET;
  let chat_id = "-4103497980";
  const user = `
  Email: ${email}
  `;
  const handlerEmail = (e: FormEvent) => {
    e.preventDefault();
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(user)}`;

    const api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setEmail("");
  };

  return (
    <footer className="bg-footerBg dark:bg-footerDarkBg pt-[64px] pb-8">
      <div className=" max-w-6xl mx-auto px-4 border-b border-gray-400 pb-16">
        <div className="flex items-start justify-between">
          <div className=" flex flex-col max-w-[280px]">
            <h2 className=" text-[18px] font-semibold mb-3 ">About</h2>
            <p className=" text-left text-sm font-normal text-gray-500 leading-6 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div className=" flex items-center gap-1 mb-1 ">
              <span className="font-semibold">Telegram :</span>
              <a href="https://t.me/ffabek" target="_blank" className="text-gray-600 ">
                ffabek
              </a>
            </div>
            <div className="flex items-center gap-1">
              <span className=" font-semibold">Phone :</span>
              <a className=" text-gray-600" href="Tel:+998 95 111 29 16">
                +998 95 111 29 16
              </a>
            </div>
          </div>
          <div className="flex justify-between gap-[80px]">
            <div>
              <h2 className=" text-[18px] font-semibold mb-6">Quick Link</h2>
              <ul className=" flex flex-col gap-1">
                <li className="cursor-pointer hover:text-gray-600 leading-6 font-normal text-gray-500 text-[16px]">
                  Home
                </li>
                <li className="cursor-pointer hover:text-gray-600 leading-6 font-normal text-gray-500 text-[16px]">
                  About
                </li>
                <li className="cursor-pointer hover:text-gray-600 leading-6 font-normal text-gray-500 text-[16px]">
                  Blog
                </li>
                <li className="cursor-pointer hover:text-gray-600 leading-6 font-normal text-gray-500 text-[16px]">
                  Archived
                </li>
                <li className="cursor-pointer hover:text-gray-600 leading-6 font-normal text-gray-500 text-[16px]">
                  Author
                </li>
                <li className="cursor-pointer hover:text-gray-600 leading-6 font-normal text-gray-500 text-[16px]">
                  Contact
                </li>
              </ul>
            </div>
            <div>
              <h2 className=" text-[18px] font-semibold mb-6 ">Category</h2>
              <ul className=" flex flex-col gap-1">
                <li className="cursor-pointer hover:text-gray-600 leading-6 font-normal text-gray-500 text-[16px]">
                  Lifestyle
                </li>
                <li className="cursor-pointer hover:text-gray-600 leading-6 font-normal text-gray-500 text-[16px]">
                  Technology
                </li>
                <li className="cursor-pointer hover:text-gray-600 leading-6 font-normal text-gray-500 text-[16px]">
                  Travel
                </li>
                <li className="cursor-pointer hover:text-gray-600 leading-6 font-normal text-gray-500 text-[16px]">
                  Business
                </li>
                <li className="cursor-pointer hover:text-gray-600 leading-6 font-normal text-gray-500 text-[16px]">
                  Economy
                </li>
                <li className="cursor-pointer hover:text-gray-600 leading-6 font-normal text-gray-500 text-[16px]">
                  Sports
                </li>
              </ul>
            </div>
          </div>
          <form
            className="p-8 rounded-xl shadow-md bg-white dark:bg-footerEmailDark"
            onSubmit={handlerEmail}
          >
            <h2 className=" text-xl text-center font-semibold mb-2">
              Weekly Newsletter
            </h2>
            <p className="text-[16px] font-normal text-gray-500 text-center mb-[30px]">
              Get blog articles and offers via email
            </p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your email"
              className=" border rounded-md text-gray-500 dark:bg-footerDarkBg dark:border-darkBorder py-1 pl-3 outline-none text-[14px] w-full placeholder:text-[14px] placeholder:font-normal mb-2"
              required
            />
            <button className=" py-1 text-center bg-indigo-500 rounded-md text-white font-[16px] w-full outline-none hover:opacity-90">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div>
        <div className=" max-w-6xl mx-auto px-4 py-8 flex items-center justify-between">
          <p className=" dark:text-white font-medium">
            &#169;JS Template{" "}
            <span className=" dark:text-gray-300">
              {new Date().getFullYear()}. All Rights Reserved.
            </span>{" "}
          </p>
          <div className=" flex gap-8">
            <Link href={"/"} className="dark:text-gray-300 font-medium">
              Terms of Use
            </Link>
            <Link href={"/"} className="dark:text-gray-300 font-medium">
              Privacy Policy
            </Link>
            <Link href={"/"} className="dark:text-gray-300 font-medium">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
