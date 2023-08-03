// React imports
import React from 'react'

// React Native imports
import { KeyboardAvoidingView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

// View Model imports
import useViewModel from './viewModel'

// Components imports
import Ellipse from '../ellipse'

interface ContentProps {
    children?: React.ReactNode,
    style?: StyleProp<ViewStyle>
}

export default function Content({ children, style }: ContentProps) {

    const { insets, paddingBottom } = useViewModel()

    const safeStyle = { paddingBottom: paddingBottom, paddingLeft: insets.left, paddingRight: insets.right, paddingTop: insets.top }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <View style={[styles.container, {...safeStyle, backgroundColor: '#ffffff'}, style]}>
                <View style={styles.ellipse}>
                    <Ellipse/>
                </View>
                {children}
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1
    },
    ellipse: {
        bottom: 0,
        position: 'absolute'
    }
})