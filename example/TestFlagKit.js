import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { flagSvgs, getFlagSvgComponentByCode, getFlagObjectByCode } from 'react-native-svg-flagkit'

class TestFlagKit extends Component {
    _test() {
        const svgObject = getFlagObjectByCode('AI')
        return (
            <View style={styles.itemContainer}>
                <View style={{ flex: 1, ...styles.center }}>
                    <View style={styles.center}>
                        <Text>{svgObject.code}</Text>
                        <Text>{svgObject.region}</Text>
                    </View>
                </View>
                <View style={{ flex: 3, flexDirection: 'row' }}>
                    <View style={{ flex: 1, ...styles.center }}>
                        <View style={{ ...styles.center}}>
                            <Text>{'SVG'}</Text>
                        </View>
                        {
                            svgObject.component ? <svgObject.component width={210 * 0.8} height={150 * 0.8} /> : <Text>{'Still Working'}</Text>
                        }
                    </View>
                    <View style={{ flex: 1, ...styles.center }}>
                        <View style={{ ...styles.center }}>
                            <Text>{'PNG'}</Text>
                        </View>
                        <Image
                            style={{ width: 210 * 0.8, height: 150 * 0.8 }}
                            source={svgObject.img}
                        />
                    </View>
                </View>
            </View>
        )
    }
    render() {
        return (
            <ScrollView>
                {
                    flagSvgs.map(flagSvg => {
                        return (
                            <View style={styles.itemContainer}>
                                <View style={{ flex: 1, ...styles.center }}>
                                    <View style={styles.center}>
                                        <Text>{flagSvg.code}</Text>
                                        <Text>{flagSvg.region}</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 3, flexDirection: 'row' }}>
                                    <View style={{ flex: 1, ...styles.center }}>
                                        <View style={{ ...styles.center }}>
                                            <Text>{'SVG'}</Text>
                                        </View>
                                        {
                                            flagSvg.component ? <flagSvg.component width={210 * 0.8} height={150 * 0.8} /> : <Text>{'Still Working'}</Text>
                                        }
                                    </View>
                                    <View style={{ flex: 1, ...styles.center }}>
                                        <View style={{ ...styles.center }}>
                                            <Text>{'PNG'}</Text>
                                        </View>
                                        <Image
                                            style={{ width: 210 * 0.8, height: 150 * 0.8 }}
                                            source={flagSvg.img}
                                            // resizeMode={'cover'}
                                        />
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
                {
                    this._test()
                }
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    itemContainer: {
        height: 200,
        justifyContent: 'space-around',
        alignItems: 'center',
        // flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 25,
        margin: 5
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default TestFlagKit;
