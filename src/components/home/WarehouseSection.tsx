import Link from "next/link";
import Image from "next/image";

export default function WarehouseSection() {
  return (
    <section style={{ padding: "50px 0 50px" }} className="bg-[#f8f9f9]">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left - Text Content */}
          <div>
            <h2
              className="font-extrabold mb-5 leading-tight"
              style={{ fontSize: "32px", color: "#e5a24e" }}
            >
              Operating Dedicated Warehouses in NY, FL, CT
            </h2>
            <p
              className="text-[#333] mb-6 leading-relaxed"
              style={{ fontSize: "16px", textAlign: "justify" }}
            >
              No matter which method you use to sell, we&apos;ve got you
              covered. Our 3PL warehouses can do FBA prep, WFS prep, storage,
              2-step Dropshipping, or ship your orders directly to your
              customers.
            </p>
            <Link href="/services/3pl-warehouse" className="btn-primary">
              Get only warehouse service
            </Link>
          </div>

          {/* Right - Map Image */}
          <div className="flex justify-center">
            <Image
              src="/images/warehouse/warehouse-map.webp"
              alt="Warehouse Locations Map"
              width={550}
              height={400}
              className="w-full max-w-[500px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
