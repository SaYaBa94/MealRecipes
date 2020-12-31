import React from 'react'
import {WebView} from 'react-native-webview'

function YoutubeWebView({route}){
    return(
        <WebView source={{uri: route.params.link}} 
        originWhitelist={['*']}/>
    )
}

export {YoutubeWebView}