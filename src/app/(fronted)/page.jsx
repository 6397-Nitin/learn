
import Hero from '@/components/Hero';
import benefitsImage1 from '../../../public/images/benefits-1.png';
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <section className="section-one">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 items-center">
            <div className="left-content">
              <div className="badge mb-3 inline-block">
                <h3 className="text-2xl uppercase font-bold tracking-wide border-b-4 border-primary">Benefits</h3>
              </div>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Benefits of using <span className="text-primary">veritas</span>Mail</h1>
              <Image src={benefitsImage1} className="w-[75%]" alt="benefits"></Image>
            </div>
            <div className="right-content">
              <p className="mb-8 text-lg font-normal text-gray-700 lg:text-xl dark:text-gray-400 lg:leading-loose"><span className="text-primary">veritas</span>Mail is the trusted solution for secure and accurate email verification across multiple industries. Whether you're a financial institution, a market research firm, or running marketing campaigns, VeritasMail ensures your email lists are clean, accurate, and ready for engagement.</p>
              <div className="grid grid-cols-2">
                <div>
                  <ul className="list-disc list-inside leading-10">
                    <li>Verify Customer Email Accuracy</li>
                    <li>Secure Customer Communication</li>
                    <li>Engage Real Customers</li>
                    <li>Ensure Email Accuracy (DOI)</li>
                    <li>Maximize Campaign ROI</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc list-inside leading-10">
                    <li>Reduce Hard Bounce Rate</li>
                    <li>Improve Deliverability</li>
                    <li>Protect Sender Reputation</li>
                    <li>Lower Marketing Costs</li>
                    <li>Reach Real People</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
