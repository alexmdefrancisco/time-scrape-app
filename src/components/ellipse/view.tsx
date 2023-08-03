// React imports
import React from 'react'

// React Native imports
import { Dimensions } from 'react-native'
import { Canvas, Oval, RadialGradient, vec } from '@shopify/react-native-skia'

export default function Ellipse() {

    const { height: screenHeight, width: screenWidth } = Dimensions.get('window')
    const overHeight = 0.3
    const overWidth = 1.6

    const height = screenHeight * overHeight
    const width = screenWidth * overWidth

    return (
        <Canvas style={{ height: height/2, width: screenWidth }}>
            <Oval height={height} width={width} x={screenWidth * (-(overWidth-1)/2)} y={0}>
                <RadialGradient
                    c={vec(screenWidth/2, height/2)}
                    colors={['#fff50070', '#79eed270']} //'#ffba2b70', '#fea9bf70'
                    r={height/2}
                />
                <RadialGradient
                    c={vec(screenWidth/2, height)}
                    colors={['#fff50070', '#79eed270']}
                    r={width/2}
                />
            </Oval>
        </Canvas>
    )

}