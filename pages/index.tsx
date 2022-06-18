import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/Card";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Seekpharma</title>
        <meta name="description" content="Seekpharma" />
      </Head>
      <main>
        <section className="relative bg-sp-secondary h-screen">
          <header className="flex flex-col sm:flex-row justify-between">
            <div>LOGO</div>
            <div className="flex flex-row gap-4">
              <div className="text-base">our vision</div>
              <div className="text-base">who we are</div>
              <div className="text-base">contact us</div>
              <div>
                <button>Sign in</button>
              </div>
            </div>
          </header>
          <div className="h-full flex flex-col justify-center">
            <div className="flex flex-col items-center gap-8">
              <h2 className="tracking-[10px]">SEEKPHARMA</h2>
              <p className="text-sm sm:text-base">
                pharmaceuticals easily find and found
              </p>
              <input
                className="p-2 w-full max-w-xl"
                placeholder="search for any diease of product"
              />
              <button className="p-4 bg-white text-sp-primary rounded-lg">
                Let's get started
              </button>
            </div>
          </div>
        </section>
        <section className="h-screen flex flex-col items-center bg-sp-secondary">
          <div className="text-xs text-gray-500 pb-4">WHY SEEKPHARMA?</div>
          <div className="text-center max-w-md pb-4">
            simplify knowledge exchange between pharmaceutical companies and
            doctors.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <Card
              title="Simplified Search,"
              subTitle="Save Research Time"
              teaserText="With a simple search doctors can find information on drug related information such as indication, dosing and clinical research."
              linkText="Register now"
              linkUrl="#"
            />
            <Card
              title="Improve Product Presence,"
              subTitle="Exploit Potential"
              teaserText="Pharmaceutical companies can easily upload brand information and promotional material onto the platform with the most recent information. Every pharmaceutical product will get a dedicated brand page."
              linkText="Find out more"
              linkUrl="#"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
