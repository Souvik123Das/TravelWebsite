import Iceland1 from "../assets/iceland1.jpg";
import Iceland2 from "../assets/Iceland2.jpeg";
import Kyrzysthan from "../assets/Kyrzysthan.jpg";
import Kyrzysthan1 from "../assets/img.jpg";

import "./Destination.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Most searched Destinations</h1>
      <p>People love to visit these places!!</p>
      <DestinationData
        ClassName="first-dest"
        heading="Iceland"
        text="Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks. Most of the population lives in the capital, Reykjavik, which runs on geothermal power and is home to the National and Saga museums, tracing Iceland’s Viking history. Iceland is known throughout the world for its beautiful and unspoilt nature, although recently, the country has gained further fame through its musical talents, its football team, its financial crisis and its erupting volcanoes.The presence of abundant electrical power due to Iceland's geothermal and hydroelectric energy sources has led to the growth of the manufacturing sector. Power-intensive industries, which are the largest components of the manufacturing sector, produce mainly for export."
        img1={Iceland1}
        img2={Iceland2}
      />
      <DestinationData
        ClassName="first-dest-reverse"
        heading="Kyrgyzstan"
        text="Kyrgyzstan is most famous for snowy peaks, high alpine meadows, broad grasslands filled with the fragrances of plants and flowers, clear mountain rivers, and serene mirrored lakes scattered among the tall peaks.Historical tourism in Kyrgyzstan spans the events of millennia and digs into layers of half-forgotten history as it resurrects the memory of nomads, settlers and merchants of the past. In the winter, skiing and snowboarding are popular, and in the summer, mountain biking is one of the best ways to take advantage of the slopes.Influences from China, Persia, Turkey and Russia are still prominent today, both in the historical sites and in Kyrgyzstan’s art. The archaeological sites and petroglyphs attest to Kyrgyzstan’s long history, and the bazaars are a slice of the ancient Silk Road that lives on to this day. "
        img1={Kyrzysthan}
        img2={Kyrzysthan1}
      />
    </div>
  );
};
export default Destination;
