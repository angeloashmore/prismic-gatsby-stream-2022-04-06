import { ReactComponent as UndrawArt } from "../assets/undraw-art.svg";
import { ReactComponent as UndrawServices } from "../assets/undraw-services.svg";
import { ReactComponent as UndrawShop } from "../assets/undraw-shop.svg";

export const VeryHeavyComponent = () => {
  return (
    <div className="hidden">
      <UndrawArt />
      <UndrawServices />
      <UndrawShop />
    </div>
  );
};
