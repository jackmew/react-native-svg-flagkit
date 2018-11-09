import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    Path,
    G,
    Mask,
    Use,
    Circle,
} from 'react-native-svg'

const SvgGd = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GD_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GD_svg__b">
                <Stop stopColor="#E42235" offset="0%" />
                <Stop stopColor="#CE1225" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GD_svg__d">
                <Stop stopColor="#079B77" offset="0%" />
                <Stop stopColor="#007B5D" offset="100%" />
            </LinearGradient>
            <Path id="GD_svg__c" d="M0 0h17v11H0z" />
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GD_svg__e">
                <Stop stopColor="#FFD938" offset="0%" />
                <Stop stopColor="#FDD117" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GD_svg__g">
                <Stop stopColor="#FFD93B" offset="0%" />
                <Stop stopColor="#FDD117" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GD_svg__h">
                <Stop stopColor="#E21C30" offset="0%" />
                <Stop stopColor="#CE1225" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#GD_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#GD_svg__b)" d="M0 0h21v15H0z" />
            <G transform="translate(2 2)">
                <Mask id="GD_svg__f" fill="#fff">
                    <Use xlinkHref="#GD_svg__c" />
                </Mask>
                <Use fill="url(#GD_svg__d)" xlinkHref="#GD_svg__c" />
                <Path
                    d="M1.295 5.599c.283.453.69.752 1.068.829.209.042-.173-.914-.007-1.018.142-.088.825.706.885.54.137-.38.056-.921-.25-1.411-.439-.703-.456-.239-1.643-.742.124.72-.492 1.1-.053 1.802z"
                    fill="url(#GD_svg__e)"
                    mask="url(#GD_svg__f)"
                />
                <Path
                    d="M0 0h17L8.5 5.5 0 0zm0 11l8.5-5.5L17 11H0z"
                    fill="url(#GD_svg__g)"
                    mask="url(#GD_svg__f)"
                />
                <Circle
                    fill="url(#GD_svg__h)"
                    mask="url(#GD_svg__f)"
                    cx={8.5}
                    cy={5.5}
                    r={2.5}
                />
                <Path
                    fill="url(#GD_svg__e)"
                    mask="url(#GD_svg__f)"
                    d="M8.5 6.271l-1.176.847.442-1.38-1.168-.856 1.449-.006L8.5 3.5l.453 1.376 1.45.006-1.17.856.443 1.38z"
                />
            </G>
        </G>
    </Svg>
)

export default SvgGd
