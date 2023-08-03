// React Native imports
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

// Expo imports
import { Image } from 'expo-image'
import { Link } from 'expo-router'

// Components imports
import Content from '../src/components/content'

export default function Landing() {

    return (
        <Content>
            <View style={{ height: '12.5%' }}/>
            <Image contentFit='contain' source={require('../src/assets/logo.png')} style={{ height: '10%', width: '80%' }}></Image>

            <View style={{ height: '10%' }}/>
            <Text style={styles.text}>{'This is a timescrap sample app'}</Text>

            <View style={{ height: '10%' }}/>
            <Link href='/webview' asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={{ fontWeight: 'bold' }}>{'Open WebView'}</Text>
              </TouchableOpacity>
            </Link>
        </Content>
    )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#79eed270',
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    width: '50%',
    color: '#38434D'
  }
})
