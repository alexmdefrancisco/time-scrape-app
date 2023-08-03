// React imports
import { useState } from 'react'

// React Native imports
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { WebView } from 'react-native-webview'

// Expo imports
import { Link } from 'expo-router'

export default function WebViewScreen() {

    const [timeData, setTimeData] = useState<undefined | object>()

    const INJECTED_JAVASCRIPT = `(function() {
        var time = document.getElementById('theTime').innerText;
        var date = document.querySelector('.local-time h4').innerText;
        var timezoneInfo = document.querySelector('.local-time p a').innerText;
        window.ReactNativeWebView.postMessage(JSON.stringify({time, date, timezoneInfo}));
    })();`

    return (
        <>
            <Link href={{ pathname: '/timeview', params: timeData }} asChild>
              <TouchableOpacity style={styles.button} disabled={!timeData}>
                <Text style={{ fontWeight: 'bold' }}>{'Display time in app'}</Text>
              </TouchableOpacity>
            </Link>
            <WebView
                style={styles.container}
                source={{ uri: 'https://www.worldtimeserver.com/current_time_in_US-NY.aspx' }}
                injectedJavaScript={INJECTED_JAVASCRIPT}
                onMessage={event => {
                    // Parse the received message
                    let { time, date, timezoneInfo } = JSON.parse(event.nativeEvent.data)

                    // Save the time, date and timezone info
                    setTimeData({ time, date, timezoneInfo })
                
                    // Log the time, date and timezone info
                    // console.log(`Time: ${time}, Date: ${date}, Timezone Info: ${timezoneInfo}`)
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#79eed270',
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 10,
        alignItems: 'center'
    },
    container: {
        flex: 1,
    },
    text: {
      fontSize: 22,
      textAlign: 'center',
      width: '50%',
      color: "#38434D"
    }
})