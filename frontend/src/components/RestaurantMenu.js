import { useEffect, useState } from "react";
import { resMenuMock } from "../utils/mockData";
import { useParams } from "react-router-dom";
const RestautantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    const menuData = resMenuMock.find(
      (item) => String(item?.info?.id) === String(resId)
    );
    setResInfo(menuData);
  }, [resId]);

  if (!resInfo) {
    return <div>Loading...</div>;
  }

  const { name, cuisines, costForTwoMessage } = resInfo?.info || {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ") || "Cuisine not available"} - {costForTwoMessage}
      </h3>
      <ul>
        <li>Pizza</li>
        <li>Burger</li>
        <li>Pasta</li>
        <li>Salad</li>
        <li>Dessert</li>
      </ul>
    </div>
  );
};

export default RestautantMenu;
