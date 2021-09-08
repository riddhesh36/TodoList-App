import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';


const Task = (props) =>{
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}> {props.text} </Text>
            </View>
            <View style={styles.circle}>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#E3FDFF',
        padding: 15,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems:'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#7299FF',
        borderRadius: 8,
        opacity: 0.4,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',

    },
    circle: {
        width: 12,
        height: 12,
        borderColor:'#7299FF',
        borderWidth: 2,
        borderRadius: 5,
    },

});
export default Task;