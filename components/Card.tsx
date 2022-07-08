import { faCoffee, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ICardProps {
  title: string;
  subTitle: string;
  teaserText: string;
  linkText: string;
  icon: IconDefinition;
  linkUrl?: string;
}

const Card = ({
  title,
  subTitle,
  teaserText,
  linkText,
  icon,
  linkUrl,
}: ICardProps) => (
  <div className="grid grid-rows-cards shadow-xl justify-items-center p-10 m-4 gap-2 bg-white max-w-xs">
    <div className="flex justify-center items-center w-16 h-16 rounded-full bg-sp-primary">
      <FontAwesomeIcon className="w-8 h-8" icon={icon} />
    </div>
    <div className="text-center pb-2">
      <p>{title}</p>
      <p className="text-sp-primary">{subTitle}</p>
    </div>
    <div className="pb-4 text-xs text-center text-gray-500">{teaserText}</div>
    {linkUrl && (
      <a href={linkUrl} className="hover:underline underline-offset-8">
        {linkText}
      </a>
    )}
  </div>
);

export default Card;
