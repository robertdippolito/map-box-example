import React from 'react'
import ReactDOM from 'react-dom'
import MapBox from './components/Mapbox'

import 'semantic-ui-css/semantic.min.css'

class App extends React.Component {
    render() {
        return(
            <MapBox />
            // <div>
            //     <button className="ui button">Click Me 2</button>
            // </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
