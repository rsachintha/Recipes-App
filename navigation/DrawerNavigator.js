import * as React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import RootClientTabs from './ClientTabs';
import { Icon } from "react-native-elements";
import { NavigationContainer,DarkTheme } from "@react-navigation/native";
import { colors } from '../global/styles';
import BookmarkedRecipeScreen from '../screens/BookmarkedRecipeScreen';
import DrawerContent from '../components/DrawerContent';
import { Provider as PaperProvider,DarkTheme as PaperDarkTheme } from 'react-native-paper';
import MyAccountScreen from '../screens/MyAccountScreen';
import SettingScreen from '../screens/SettingScreen';

const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator
        drawerContent={props=><DrawerContent {...props}/>}
        >

            <Drawer.Screen 
            name='RootClientTabs'
            component={RootClientTabs}
            options = {{
               headerShown:false,
                title:'Home',
                drawerIcon:({focused,size})=>(
                    <Icon 
                    type='material-community'
                    name='home'
                    color={focused ? '#7cc':colors.gray2}
                    size ={size}
                    
                    />
                )
            }}
            />

            <Drawer.Screen 
            name='MyAccountScreen'
            component={MyAccountScreen}
            options = {{
               headerShown:false,
                title:'Profile',
                drawerIcon:({focused,size})=>(
                    <Icon 
                    type='material'
                    name='person'
                    color={focused ? '#7cc':colors.grey2}
                    size ={size}
                    
                    />
                )
            }}
            />
            <Drawer.Screen 
            name='BookmarkedRecipeScreen'
            component={BookmarkedRecipeScreen}
            options = {{
               headerShown:false,
                title:'Saved Recipes',
                drawerIcon:({focused,size})=>(
                    <Icon 
                    type='material-community'
                    name='bookmark'
                    color={focused ? '#7cc':colors.grey2}
                    size ={size}
                    
                    />
                )
            }}
            />
            <Drawer.Screen 
            name='SettingScreen'
            component={SettingScreen}
            options = {{
               headerShown:false,
                title:'Settings',
                drawerIcon:({focused,size})=>(
                    <Icon 
                    type='material-community'
                    name='cog-outline'
                    color={focused ? '#7cc':colors.grey2}
                    size ={size}
                    
                    />
                )
            }}
            />

        </Drawer.Navigator>
        
    )
}