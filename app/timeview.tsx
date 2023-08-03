// React Native imports
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

// Expo imports
import { Link, useLocalSearchParams } from 'expo-router';

// Components imports
import Content from '../src/components/content'

export default function TimeViewScreen() {

    const { date, time, timezoneInfo } = useLocalSearchParams()

    return (
        <Content>
            <View style={{ alignItems: 'flex-start', marginLeft: '5%', width: '100%' }}>
                <Text style={styles.titleText}>{'Time'}</Text>
                <Text style={styles.text}>{time}</Text>
                <View style={{ height: '5%' }}/>
                <Text style={styles.titleText}>{'Day'}</Text>
                <Text style={styles.text}>{date}</Text>
                <View style={{ height: '5%' }}/>
                <Text style={styles.titleText}>{'Time Zone'}</Text>
                <Text style={styles.text}>{timezoneInfo}</Text>
            </View>
        </Content>
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
    text: {
        fontWeight: 'normal',
        fontSize: 18,
        marginLeft: '5%'
    },
    titleText: {
        fontWeight: '700',
        fontSize: 24
    }
})