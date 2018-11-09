import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Path,
    Rect,
} from 'react-native-svg'

const SvgMv = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MV_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MV_svg__b">
                <Stop stopColor="#F32249" offset="0%" />
                <Stop stopColor="#D01739" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MV_svg__c">
                <Stop stopColor="#15A04F" offset="0%" />
                <Stop stopColor="#0F7E3D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#MV_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#MV_svg__b)" d="M0 0h21v15H0z" />
            <Rect
                fill="url(#MV_svg__c)"
                x={3}
                y={3}
                width={15}
                height={9}
                rx={0.5}
            />
            <Path
                d="M12.25 4.08a3.5 3.5 0 1 0 0 6.839 3.501 3.501 0 0 1 0-6.838z"
                fill="url(#MV_svg__a)"
            />
        </G>
    </Svg>
)

export default SvgMv
