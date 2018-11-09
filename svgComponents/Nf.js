import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgNf = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NF_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NF_svg__b">
                <Stop stopColor="#219646" offset="0%" />
                <Stop stopColor="#197837" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NF_svg__c">
                <Stop stopColor="#259D4B" offset="0%" />
                <Stop stopColor="#197837" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#NF_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#NF_svg__b)" d="M10 0h11v15H10zM0 0h7v15H0z" />
            <Path fill="url(#NF_svg__a)" d="M6 0h9v15H6z" />
            <Path
                d="M9.444 4.003l.422-1.52A.705.705 0 0 1 10.5 2c.276 0 .562.222.634.484l.422 1.52a.5.5 0 1 0 .248.893l.31 1.116a.501.501 0 0 0-.614.487.5.5 0 0 0 .85.358l.325 1.174a.499.499 0 1 0 .217.779L13.5 11H11v2h-1v-2H7.5l.608-2.19a.5.5 0 1 0 .217-.778l.326-1.174A.498.498 0 0 0 9.5 6.5a.5.5 0 0 0-.615-.487l.31-1.116a.5.5 0 1 0 .248-.893z"
                fill="url(#NF_svg__c)"
            />
        </G>
    </Svg>
)

export default SvgNf
