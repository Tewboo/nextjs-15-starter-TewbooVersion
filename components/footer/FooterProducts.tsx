import Link from "next/link";

const footerProducts = [
  { url: "https://phcopilot.ai/", name: "Product Hunt Copilot" }, // TODO: change to your own url
  { url: "https://smartexcel.cc/", name: "Smart Excel" }, // TODO: change to your own url 
  {
    url: "https://landingpage.weijunext.com/",
    name: "Landing Page Boilerplate",
  }, // TODO: change to your own url
  { url: "https://nextjscn.org/", name: "Next.js 中文文档" }, // TODO: change to your own url
  { url: "https://nextjs.weijunext.com/", name: "Next.js Practice" }, // TODO: change to your own url
  { url: "https://starter.weijunext.com/", name: "Next.js Starter" }, // TODO: change to your own url
  {
    url: "https://github.com/weijunext/indie-hacker-tools",
    name: "Indie Hacker Tools",
  }, // TODO: change to your own url
  { url: "https://tewboo.my/", name: "J&apos;s Lab" }, // Fixed the apostrophe here
];

const FooterProducts = () => {
  return (
    <div className="flex space-x-2 flex-wrap justify-center">
      {/* {footerProducts.map((product, index) => {
        return (
          <span key={product.url}>
            <Link href={product.url} target="_blank">
              {product.name}
            </Link>
            {index !== footerProducts.length - 1 ? (
              <>
                <span>{" • "}</span>
              </>
            ) : (
              <></>
            )}
          </span>
        );
      })} */}
      <span key="https://tewboo.my/">
        <Link href="https://tewboo.my/" target="_blank">
          J&apos;s Lab 即将上线
        </Link>
      </span>
    </div>
  );
};

export default FooterProducts;
