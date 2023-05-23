import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const Map2 = () => (
<center>
    <h2>Мы находимся тут</h2>
<YMaps >    
      <Map 
        width={800} 
        height={500} 
        defaultState={{ 
        center: [43.553624, 39.791388], 
        zoom:15,
        controls: ["zoomControl", "fullscreenControl"], 
      }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
    <Placemark
      modules={["geoObject.addon.balloon"]}
      defaultGeometry={[43.553624, 39.791388]}
      properties={{
      balloonContentBody:
          "Ашрам Сочи - Фурманова, 38",
      }}
    />
        </Map>  
  </YMaps>
</center>
);
export default Map2;

