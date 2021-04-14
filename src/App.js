import React from 'react';

import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceOsm from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

import {
  DigitizeButton,
  ToggleGroup,
  MeasureButton,
  MapComponent  
} from '@terrestris/react-geo';

import './App.css';
import 'ol/ol.css';
import 'antd/dist/antd.css';
import './react-geo.css';

const layer = new OlLayerTile({
  source: new OlSourceOsm()
});

const map = new OlMap({
  view: new OlView({
    center:  fromLonLat([-52.2140570, -3.2181566]),
    zoom: 13,
  }),
  layers: [layer]
});


function App() {

  return (
    <div className="App">
      <MapComponent
        map={map}
      />
         <div>          
          <ToggleGroup>
            <DigitizeButton
              name="drawPoint"
              map={map}
              drawType="Point"                  
            >
            Add Ponto
            </DigitizeButton>

            <DigitizeButton
              name="drawLine"
              map={map}
              drawType="LineString"
            >
            Add Linha
            </DigitizeButton>

            <DigitizeButton
              name="drawPolygon"
              map={map}
              drawType="Polygon"
            >
            Add Poligono
            </DigitizeButton>

            <DigitizeButton
              name="drawCircle"
              map={map}
              drawType="Circle"
            >
            Add Circulo
            </DigitizeButton>

            <DigitizeButton
              name="drawRectangle"
              map={map}
              drawType="Rectangle"
            >
            Add Retângulo
            </DigitizeButton>

            <DigitizeButton
              name="drawText"
              map={map}
              drawType="Text"
            >
            Add Texto
            </DigitizeButton>

            <DigitizeButton
              name="deleteFeature"
              map={map}
              editType="Delete"
            >
            Deletar
            </DigitizeButton>
            
            <MeasureButton
              name="line"
              map={map}
              measureType="line"
            >
            Distância
            </MeasureButton>

            <MeasureButton
              name="steps"
              map={map}
              measureType="line"
              showMeasureInfoOnClickedPoints
            >
            Distância por etapas
            </MeasureButton>

            <MeasureButton
              name="multi"
              map={map}
              measureType="line"
              multipleDrawing
            >
            Distância Multiplas
            </MeasureButton>

            <MeasureButton
              name="poly"
              map={map}
              measureType="polygon"
            >
            Área
            </MeasureButton>

            <MeasureButton
              name="angle"
              map={map}
              measureType="angle"
            >
            Angulo
            </MeasureButton>

          </ToggleGroup>
        </div>       
        
    </div>
  );
}

export default App;