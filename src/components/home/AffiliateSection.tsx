import Link from "next/link";

export default function AffiliateSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#87af51",
        padding: "50px 0",
      }}
    >
      <div className="container-main text-center">
        <h2
          className="font-extrabold text-white mb-2 leading-tight"
          style={{ fontSize: "28px" }}
        >
          Become an Affiliate Partner
        </h2>
        <p className="text-white text-[18px] mb-8">
          Earn $1,000+ every month from each refer*
        </p>
        <Link
          href="/referral"
          className="inline-block bg-black text-white rounded-[5px] font-semibold hover:bg-gray-900 transition-colors text-[16px]"
          style={{ padding: "17px 30px" }}
        >
          Join Affiliate Today
        </Link>
      </div>
    </section>
  );
}
