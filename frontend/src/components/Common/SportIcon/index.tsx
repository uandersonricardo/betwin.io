import { IconType } from "react-icons";
import {
  TbBallAmericanFootball,
  TbBallBaseball,
  TbBallBasketball,
  TbBallTennis,
  TbBallVolleyball,
  TbCircleOff,
  TbCricket,
  TbSoccerField
} from "react-icons/tb";

type SportIconProps = {
  sport: string;
};

const SportIcon: React.FC<SportIconProps> = ({ sport, ...props }) => {
  switch (sport) {
    case "football":
      return <TbSoccerField {...props} />;
    case "basketball":
      return <TbBallBasketball {...props} />;
    case "volleyball":
      return <TbBallVolleyball {...props} />;
    case "tennis":
      return <TbBallTennis {...props} />;
    case "baseball":
      return <TbBallBaseball {...props} />;
    case "cricket":
      return <TbCricket {...props} />;
    case "american_football":
      return <TbBallAmericanFootball {...props} />;
    default:
      return <TbCircleOff {...props} />;
  }
};

export default SportIcon;
