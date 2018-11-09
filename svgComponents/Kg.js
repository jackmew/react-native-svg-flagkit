import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Path,
    Circle,
} from 'react-native-svg'

const SvgKg = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KG_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KG_svg__b">
                <Stop stopColor="#F22A46" offset="0%" />
                <Stop stopColor="#E71834" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KG_svg__c">
                <Stop stopColor="#FFF04D" offset="0%" />
                <Stop stopColor="#FFEE35" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#KG_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#KG_svg__b)" d="M0 0h21v15H0z" />
            <Circle fill="url(#KG_svg__c)" cx={10.5} cy={7.5} r={2.5} />
            <Path
                d="M10.5 11.035l-1.224 1.827-.31-2.177L7.071 11.8l.665-2.096-2.191.182 1.508-1.6L5 7.5l2.053-.787-1.508-1.6 2.191.183L7.071 3.2l1.895 1.115.31-2.177L10.5 3.965l1.224-1.827.31 2.177L13.929 3.2l-.665 2.096 2.191-.182-1.508 1.6L16 7.5l-2.053.787 1.508 1.6-2.191-.183.665 2.096-1.895-1.115-.31 2.177-1.224-1.827zm0-.035a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                fill="url(#KG_svg__c)"
            />
        </G>
    </Svg>
)

export default SvgKg
