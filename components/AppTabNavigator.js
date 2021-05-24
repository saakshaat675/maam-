//import React from 'react';
import BookDonate from '../screens/BookDonate'
import BookReq from '../screens/BookReq'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export const Tab = createBottomTabNavigator({

Donate:{screen:BookDonate},
Request :{screen:BookReq},

})