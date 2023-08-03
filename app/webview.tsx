// React Native imports
import { Text, StyleSheet } from 'react-native'

// Components imports
import Content from '../src/components/content'

export default function WebView() {
    return (
        <Content>
            <Text style={styles.text}>{'This is webview page'}</Text>
        </Content>
    )
}

const styles = StyleSheet.create({
    text: {
      fontSize: 22,
      textAlign: 'center',
      width: '50%',
      color: "#38434D"
    }
  })