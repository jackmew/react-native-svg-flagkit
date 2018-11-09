import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgLb = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LB_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LB_svg__b">
                <Stop stopColor="#F03340" offset="0%" />
                <Stop stopColor="#EB212E" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LB_svg__c">
                <Stop stopColor="#1FC065" offset="0%" />
                <Stop stopColor="#17A555" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#LB_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#LB_svg__b)" d="M0 0h21v4H0zM0 11h21v4H0z" />
            <Path fill="url(#LB_svg__a)" d="M0 4h21v7H0z" />
            <Path
                d="M9.65 9.35a.497.497 0 0 0-.003-.703l.206.206a.972.972 0 0 0-.837-.232l-1.032.258c-.267.067-.3-.017-.08-.183l1.191-.892c.224-.168.184-.304-.103-.304h-.484c-.28 0-.309-.1-.064-.222l1.112-.556c.245-.123.223-.222-.064-.222h-.484c-.28 0-.323-.138-.103-.304l1.19-.892a.719.719 0 0 1 .81 0l1.19.892c.224.168.184.304-.103.304h-.484c-.28 0-.309.1-.064.222l1.112.556c.245.123.223.222-.064.222h-.484c-.28 0-.323.138-.103.304l1.19.892c.224.168.191.25-.08.183l-1.03-.258a.977.977 0 0 0-.838.232l.206-.206a.496.496 0 0 0-.003.703l.3.3c.193.193.134.35-.145.35h-2.01c-.273 0-.339-.156-.145-.35l.3-.3z"
                fill="url(#LB_svg__c)"
            />
        </G>
    </Svg>
)

export default SvgLb
