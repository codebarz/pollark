import React from 'react';
import ReactDOM from 'react-dom';

import FusionCharts from 'fusioncharts';
import FusionMaps from 'fusioncharts/fusioncharts.maps';
// @ts-ignore
import ReactFC from 'react-fusioncharts';
import World from 'fusioncharts/maps/fusioncharts.world';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import './Map.css';

ReactFC.fcRoot(FusionCharts, FusionMaps, World, FusionTheme);

// Resolves charts dependancy

const chartConfigs = {
  type: 'world',
  width: '100%',
  height: '400',
  dataFormat: 'json',
  dataSource: {
    // Map Configuration
    chart: {
      caption: 'Your most recent event stats',
      subcaption: 'Location of all votes gotten',
      captionalignment: 'left',
      theme: 'fusion',
      formatnumberscale: '0',
      baseFont: 'Poppins',
      markerBgColor: '#f96332',
      numbersuffix: ' tonns per capita',
      entityfillhovercolor: '#E5E5E9',
      entitytooltext:
        "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black'>$lname</div><div style='font-size:12px; color:black'>$value tonns per capita</div>"
    },
    // Aesthetics; ranges synced with the slider
    colorrange: {
      startlabel: 'Low',
      endlabel: 'High',
      code: '#e8805e',
      minvalue: '0',
      gradient: '1',
      color: [
        {
          maxvalue: '150',
          displayvalue: 'Average',
          code: '#f96332'
        },
        {
          maxvalue: '300',
          code: '#f96332'
        }
      ]
    },
    // Source data as JSON --> id represents countries of world.
    markers: {
      items: [
        {
          id: 'lon',
          shapeid: 'circle',
          x: '340.23',
          y: '125.9',
          label: 'LHR',
          tooltext: 'Ikorodu, Lagos {br} Votes : 100',
          labelpos: 'left'
        },
        {
          id: 'alt',
          shapeid: 'circle',
          x: '160.14',
          y: '164.9',
          label: 'ATL',
          tooltext:
            'Hartsfield Jackson Atlanta International Airport {br} Votes : 859',
          labelpos: 'bottom'
        },
        {
          id: 'dub',
          shapeid: 'circle',
          x: '458.14',
          y: '203.9',
          label: 'DXB',
          tooltext: 'Dubai International Airport {br} Votes : 126',
          labelpos: 'bottom'
        },
        {
          id: 'tok',
          shapeid: 'circle',
          x: '628.14',
          y: '165.9',
          label: 'HND',
          tooltext: 'Tokyo Haneda Airport{br} Votes : 2123',
          labelpos: 'bottom'
        },
        {
          id: 'beij',
          shapeid: 'circle',
          x: '573.14',
          y: '161.9',
          label: 'PEK',
          tooltext: 'Beijing Capital International Airport {br} Votes : 3000',
          labelpos: 'bottom'
        }
      ]
    }
  }
};

function Maps() {
  return (
    <main>
      <div className="pollarkMap">
        <ReactFC {...chartConfigs} />
      </div>
    </main>
  );
}

export default Maps;
