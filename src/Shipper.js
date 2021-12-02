import React from 'react';
import { Switch, Route} from "react-router-dom";
import ShipperLogin from './components/shipper/ShipperLogin';
import MenuShipper from './components/shipper/MenuShipper';

function Shipper () {
    return (
        <Switch>
            <Route exact path="/shipper/login">
                <ShipperLogin/>;
            </Route>
            <Route exact path="/shipper">
                <MenuShipper/>
            </Route>
        </Switch>
    );
}


export default Shipper;