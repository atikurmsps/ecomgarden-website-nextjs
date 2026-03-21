import Image from "next/image";

const partners = [
  { name: "USPS", img: "/images/partners/usps.webp", w: 157, h: 77 },
  { name: "Amazon SPN", img: "/images/partners/amazon-spn.webp", w: 157, h: 60 },
  { name: "Sam's Club", img: "/images/partners/sams-club.webp", w: 157, h: 65 },
  { name: "CenturyLink", img: "/images/partners/centurylink.webp", w: 157, h: 62 },
  { name: "EasyShip", img: "/images/partners/easyship.webp", w: 157, h: 86 },
  { name: "Zoro", img: "/images/partners/zoro.webp", w: 157, h: 82 },
  { name: "Shopify", img: "/images/partners/shopify.webp", w: 158, h: 85 },
  { name: "Google Workspace", img: "/images/partners/google-workspace.webp", w: 157, h: 38 },
  { name: "Walmart", img: "/images/partners/walmart.png", w: 157, h: 75 },
  { name: "Google Ads", img: "/images/partners/google-ads.webp", w: 157, h: 53 },
];

export default function PartnersSection() {
  return (
    <section style={{ padding: "70px 0 50px" }} className="bg-white">
      <div className="container-main">
        <h2
          className="font-bold text-center text-black mb-10"
          style={{ fontSize: "32px" }}
        >
          Our Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              style={{ width: "140px", height: "60px", position: "relative" }}
            >
              <div className="flex items-center justify-center h-full">
                <Image
                  src={partner.img}
                  alt={partner.name}
                  width={partner.w}
                  height={partner.h}
                  className="max-w-[130px] max-h-[50px] w-auto h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
