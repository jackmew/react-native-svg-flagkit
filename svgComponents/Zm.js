import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgZm = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ZM_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="ZM_svg__b">
                <Stop stopColor="#2A8815" offset="0%" />
                <Stop stopColor="#35A51D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ZM_svg__c">
                <Stop stopColor="#EF8A34" offset="0%" />
                <Stop stopColor="#EC7E21" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ZM_svg__d">
                <Stop stopColor="#F48D36" offset="0%" />
                <Stop stopColor="#EC7E21" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ZM_svg__e">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ZM_svg__f">
                <Stop stopColor="#EC322B" offset="0%" />
                <Stop stopColor="#DB261F" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#ZM_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#ZM_svg__b)" d="M0 0h21v15H0z" />
            <Path
                d="M16.196 3.624s-.403.153-.834 0c-.342-.122-.687-.534-.97-.677-.164-.083.14-.478-.184-.371-.325.106-.855-.39-.855-.39s-.548-.667.259-.667 2.51.58 2.51.58.063-.3.202-.438.242-.265.47-.23c.227.034.353.355.353.355l-.354.135v.266s2.362-.724 2.92-.668c.558.056.109.669-.228 1.057-.13.15-.556.456-.815.21-.259-.245-.163.266-.43.43-.438.27-.602.516-.753.587-.15.072-.479 0-.479 0l.096.247s.027.296-.096.414-.208.202-.508.166c-.3-.035-.441.04-.541-.29-.1-.33.237-.716.237-.716zm.247-.342v.772l.339-.284-.34-.488z"
                fill="url(#ZM_svg__c)"
            />
            <Path fill="url(#ZM_svg__d)" d="M18 6h3v9h-3z" />
            <Path fill="url(#ZM_svg__e)" d="M15 6h3v9h-3z" />
            <Path fill="url(#ZM_svg__f)" d="M12 6h3v9h-3z" />
        </G>
    </Svg>
)

export default SvgZm
