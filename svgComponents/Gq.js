import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgGq = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GQ_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GQ_svg__b">
                <Stop stopColor="#EC3938" offset="0%" />
                <Stop stopColor="#E12524" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GQ_svg__c">
                <Stop stopColor="#51B422" offset="0%" />
                <Stop stopColor="#429919" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GQ_svg__d">
                <Stop stopColor="#258DE7" offset="0%" />
                <Stop stopColor="#1276CC" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#GQ_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#GQ_svg__b)" d="M0 10h21v5H0z" />
            <Path fill="url(#GQ_svg__c)" d="M0 0h21v5H0z" />
            <Path fill="url(#GQ_svg__a)" d="M0 5h21v5H0z" />
            <Path
                d="M10.066 8.932a.73.73 0 0 0 .175-.425l.008-1.264A.25.25 0 0 0 9.996 7h-.242c-.14 0-.176-.078-.08-.174l.652-.652a.247.247 0 0 1 .348 0l.652.652c.096.096.057.174-.08.174h-.242a.253.253 0 0 0-.254.243v1.264c0 .134.08.322.17.414l-.09-.092c.093.094.063.171-.082.171h-.496c-.139 0-.176-.08-.078-.182l-.108.114z"
                fill="#159940"
            />
            <Path fill="url(#GQ_svg__d)" d="M0 0l7 7.5L0 15z" />
        </G>
    </Svg>
)

export default SvgGq
