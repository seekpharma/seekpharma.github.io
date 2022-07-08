import {
  faBinoculars,
  faClockFour,
  faEarthEurope,
  faEnvelope,
  faFlask,
  faMagnifyingGlass,
  faShareNodes,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { I18nContext, useTranslation } from "react-i18next";
import Card from "../components/Card";

const Index: NextPage = () => {
  const { locales, push, reload, pathname } = useRouter();
  const { i18n } = useContext(I18nContext);
  const { t } = useTranslation();

  const [email, setEmail] = useState<string | null>(null);
  const [emailLoading, setEmailLoading] = useState<boolean>(false);

  const openSearchPage = () => {
    if (window) {
      window.open("https://search.seekpharma.com");
    }
  };

  const changeLanguage = (event: any) => {
    push(pathname, pathname, { locale: event.target.value }).then((res) => {
      if (res) {
        reload();
      }
    });
  };

  const displayEmail = () => {
    if (!email) {
      setEmailLoading(true);
      fetch("/api/getContactEmail")
        .then((response) => response.json())
        .then((result) => {
          setEmailLoading(false);
          setEmail(result?.email ?? null);
        });
    }
  };

  return (
    <>
      <Head>
        <title>Seekpharma</title>
        <meta name="description" content="Seekpharma" />
      </Head>
      <main className="bg-sp-secondary">
        <section className="pr-0 pl-0 md:pr-6 md:pl-6 pb-6 relative bg-sp-primary rounded-b-[100px] sm:rounded-b-[250px]">
          <header className="flex flex-row justify-between items-center p-4">
            <div>
              <select
                value={i18n.language}
                onChange={changeLanguage}
                className="text-gray-500 bg-sp-primary col-span-3"
              >
                {locales?.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button className="bg-white p-2 rounded-md">
                <span onClick={openSearchPage} className="text-sp-primary">
                  {t("signIn")}
                </span>
              </button>
            </div>
          </header>
          <div className="h-full flex flex-col justify-center">
            <div className="flex flex-col items-center gap-8">
              <h2 className="tracking-[10px] text-xl sm:text-3xl">
                SEEKPHARMA
              </h2>
              <p className="text-sm sm:text-xl w-52 text-center">
                <span className="text-white">{t("header.teaser1")} </span>
                <span>{t("header.teaser2")} </span>
                <span className="text-white">{t("header.teaser3")} </span>
                <span>{t("header.teaser4")}</span>
              </p>
            </div>
          </div>
        </section>

        <section className="pt-16 min-h-screen flex flex-col items-center bg-sp-secondary">
          <div className="text-xs text-gray-500 pb-4">
            {t("whySection.title")}
          </div>
          <div className="text-xl text-center max-w-md pb-4">
            {t("whySection.teaser")}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <Card
              title={t("whySection.card1.title")}
              subTitle={t("whySection.card1.subTitle")}
              teaserText={t("whySection.card1.teaserText")}
              icon={faStethoscope}
              linkText={t("whySection.card1.linkText")}
            />
            <Card
              title={t("whySection.card2.title")}
              subTitle={t("whySection.card2.subTitle")}
              teaserText={t("whySection.card2.teaserText")}
              icon={faFlask}
              linkText={t("whySection.card2.linkText")}
            />
          </div>
        </section>

        <section className="pt-12 pb-12 md:pt-0 md:pb-0 min-h-screen flex flex-col justify-center items-center bg-white">
          <div className="text-xs text-center text-gray-500 pb-4">
            {t("profitSection.title")}
          </div>
          <div className="text-xl text-center max-w-md pb-4">
            {t("profitSection.teaser")}
          </div>
          <div className="text-center text-xs max-w-md text-gray-500">
            {t("profitSection.subTeaser")}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid grid-rows-cards justify-items-center p-8 m-4 gap-2 bg-white max-w-xs">
              <div className="flex justify-center items-center w-16 h-16 rounded-full bg-sp-primary">
                <FontAwesomeIcon
                  className="w-8 h-8 rounded-full bg-sp-primary"
                  icon={faEarthEurope}
                />
              </div>
              <div>
                <p className="font-medium text-center">
                  {t("profitSection.bullets.left.title")}
                </p>
              </div>
              <div>
                <p className="text-xs text-center">
                  {t("profitSection.bullets.left.teaser")}
                </p>
              </div>
            </div>

            <div className="grid grid-rows-cards justify-items-center p-8 m-4 gap-2 bg-white max-w-xs">
              <div className="flex justify-center items-center w-16 h-16 rounded-full bg-sp-primary">
                <FontAwesomeIcon
                  className="w-8 h-8 rounded-full bg-sp-primary"
                  icon={faShareNodes}
                />
              </div>
              <div>
                <p className="font-medium text-center">
                  {t("profitSection.bullets.middle.title")}
                </p>
              </div>
              <div>
                <p className="text-xs text-center">
                  {t("profitSection.bullets.middle.teaser")}
                </p>
              </div>
            </div>

            <div className="grid grid-rows-cards justify-items-center p-8 m-4 gap-2 bg-white max-w-xs">
              <div className="flex justify-center items-center w-16 h-16 rounded-full bg-sp-primary">
                <FontAwesomeIcon
                  className="w-8 h-8 rounded-full bg-sp-primary"
                  icon={faEnvelope}
                />
              </div>
              <div>
                <p className="font-medium text-center">
                  {t("profitSection.bullets.right.title")}
                </p>
              </div>
              <div>
                <p className="text-xs text-center">
                  {t("profitSection.bullets.right.teaser")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-12 pb-12 md:pt-0 md:pb-0 min-h-screen flex flex-col items-center bg-gray-100 justify-center">
          <div className="text-xs text-gray-500 pb-4">
            {t("visionSection.title")}
          </div>
          <div className="text-xl text-center max-w-md pb-4">
            {t("visionSection.teaser")}
          </div>
          <div className="text-center text-xs max-w-md text-gray-500">
            {t("visionSection.subTeaser")}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid grid-rows-3 justify-items-center p-8 m-4 gap-2 max-w-xs">
              <div>
                <p>{t("visionSection.bullets.left.title")}</p>
              </div>
              <FontAwesomeIcon className="w-8 h-8" icon={faBinoculars} />
              <div>
                <p className="text-xs text-center">
                  {t("visionSection.bullets.left.teaser")}
                </p>
              </div>
            </div>
            <div className="grid grid-rows-3 justify-items-center p-8 m-4 gap-2 max-w-xs">
              <div>
                <p>{t("visionSection.bullets.middle.title")}</p>
              </div>
              <FontAwesomeIcon className="w-8 h-8" icon={faClockFour} />
              <div>
                <p className="text-xs text-center">
                  {t("visionSection.bullets.middle.teaser")}
                </p>
              </div>
            </div>
            <div className="grid grid-rows-3 justify-items-center p-8 m-4 gap-2 max-w-xs">
              <div>
                <p>{t("visionSection.bullets.right.title")}</p>
              </div>
              <FontAwesomeIcon className="w-8 h-8" icon={faMagnifyingGlass} />
              <div>
                <p className="text-xs text-center">
                  {t("visionSection.bullets.right.teaser")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="p-8 flex flex-col items-center bg-gray-100 justify-center border-t">
          <div className="text-xl text-center max-w-md pb-12">
            {t("teamSection.title")}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="grid grid-flow-row justify-items-center gap-2">
              <img
                alt=""
                className="w-32 h-32 object-cover rounded-full"
                src="rahul.png"
              />
              <div>
                <p className="text-base text-sp-primary font-semibold">RAHUL</p>
              </div>
              <div>
                <p className="text-sm text-center">{t("teamSection.pharmaSpecialist")}</p>
              </div>
            </div>
            <div className="grid grid-flow-row justify-items-center gap-2">
              <img
                alt=""
                className="w-32 h-32 object-cover rounded-full"
                src="basem.png"
              />
              <div>
                <p className="text-base text-sp-primary font-semibold">BASEM</p>
              </div>
              <div>
                <p className="text-sm text-center">
                  {t("teamSection.strategy")}
                </p>
              </div>
            </div>
            <div className="grid grid-flow-row justify-items-center gap-2">
              <img
                alt=""
                className="w-32 h-32 object-cover rounded-full"
                src="wing.png"
              />
              <div>
                <p className="text-base text-sp-primary font-semibold">WING</p>
              </div>
              <div>
                <p className="text-sm text-center">{t("teamSection.ux")}</p>
              </div>
            </div>
            <div className="grid grid-flow-row justify-items-center gap-2">
              <img
                alt=""
                className="w-32 h-32 object-cover rounded-full"
                src="kenan.png"
              />
              <div>
                <p className="text-base text-sp-primary font-semibold">KENAN</p>
              </div>
              <div>
                <p className="text-sm text-center">
                  {t("teamSection.software")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="p-8 flex flex-col gap-5 items-center justify-center bg-sp-primary">
          <div>
            <p className="text-xl text-white">{t("contactSection.title")}</p>
          </div>
          <div className="pb-4">
            <p className="text-sm text-white">{t("contactSection.teaser")}</p>
          </div>
          <div>
            {!email && !emailLoading && (
              <button
                className="p-2 bg-white text-sp-primary rounded-lg"
                onClick={displayEmail}
              >
                {t("contactSection.actionButton")}
              </button>
            )}
            {emailLoading && (
              <span className="text-xs">
                {t("contactSection.actionLoading")}
              </span>
            )}
            {email && <a href={`mailto:${email}`}>{email}</a>}
          </div>
        </section>

        <footer className="flex justify-end bg-gray-100 h-12 p-3"></footer>
      </main>
    </>
  );
};

export default Index;
