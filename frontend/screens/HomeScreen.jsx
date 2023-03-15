import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerTitle: '',
          
          headerStyle: { backgroundColor: '#0077b6' },
        });
      }, [navigation]);

  return (
    <View style={styles.container}>
        <View style={styles.selector}>
            <TouchableOpacity style={styles.selects} >
                <Text style={{color:"#fff", fontSize: 20}}>Play against a Bot</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selects} onPress={() => navigation.navigate('SingleGame')}>
                <Text style={{color:"#fff", fontSize: 20}}>Play one on one</Text>
            </TouchableOpacity>
            
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0077b6",
        width: "100%",
        height: "100%",
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
    },
    selector:{
        gap: 10
    },
    selects:{
        borderWidth: 5,
        padding: 10,
        borderColor: "#fff",
        borderRadius: 5,
        display: "flex",
        alignItems: "center",

    }
})

export default HomeScreen;
