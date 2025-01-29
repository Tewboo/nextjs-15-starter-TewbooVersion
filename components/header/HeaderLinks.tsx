import Image from 'next/image';
import Link from "next/link";
import React from "react";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { FaWeixin } from 'react-icons/fa';
import { SiBuymeacoffee } from "react-icons/si";

const headerLinks = [
  {
    name: "repo",
    href: "https://github.com/weijunext/nextjs-15-starter",
    icon: BsGithub,
  }, // TODO: change to your own url  
  { name: "twitter", href: "https://x.com/Tewbooathtb", icon: BsTwitterX },
  { name: "wechat", href: "#", icon: FaWeixin },
  {
    name: "buyMeCoffee",
    href: "https://www.buymeacoffee.com/weijunext",
    icon: SiBuymeacoffee,
  }, // TODO: change to your own url 
];

const HeaderLinks = () => {
  const renderWeChatIcon = () => (
    <div className="relative group mx-3 flex max-w-[24px] flex-col items-center justify-center cursor-pointer">
      <FaWeixin className="text-lg" />
      <div className="absolute hidden group-hover:block top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white rounded-lg shadow-lg z-50 border border-gray-200">
        <div className="w-[200px] h-[200px] relative">
          <Image
            src="/wechatQR1.png"
            alt="WeChat QR Code"
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-row items-center">
      {renderWeChatIcon()}
      {headerLinks.filter(link => link.name === 'twitter').map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
        >
          {link.icon &&
            React.createElement(link.icon, { className: "text-lg" })}
        </Link>
      ))}
      {/* 
      {headerLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener norefferer nofollow"
          className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
        >
          {link.icon &&
            React.createElement(link.icon, { className: "text-lg" })}
        </Link>
      ))} */}
    </div>
  );
};

export default HeaderLinks;
