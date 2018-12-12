import React from 'react'
import mapboxgl from 'mapbox-gl'

require('dotenv').config();
mapboxgl.accessToken = process.env.MAPBOX_KEY

class MapBox extends React.Component {
    constructor(props: Props){
        super(props);
        this.state = {
            lng: -79.3794,
            lat: 43.6491,
            zoom: 16.80
        };
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        console.log(`env key is: ${process.env.MAPBOX_KEY}`);
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [lng, lat],
            zoom: zoom
        });
        map.on('move', () => {
            const { lng, lat } = map.getCenter();
            this.setState({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }
    render() {
        const { lng, lat, zoom } = this.state;
        return (
            <div>
                <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
                   <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
                </div>
                <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
            </div>
        );
    }
 }

export default MapBox;