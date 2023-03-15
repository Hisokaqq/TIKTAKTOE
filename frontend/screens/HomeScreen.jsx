import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  navigation.setOptions({
    headerTitle: '',
    headerStyle: { backgroundColor: '#0077b6' },
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person-circle-outline" size={28} color="white" style={{ marginLeft: 16 }} />
      </TouchableOpacity>
    ),
  });

  return (
    <View style={styles.container}>
        <View style={styles.selector}>
            <TouchableOpacity style={styles.selects}>
                <Text style={{color:"#fff", fontSize: 20}}>Single player mode</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selects}>
                <Text style={{color:"#fff", fontSize: 20}}>Multiplayer mode</Text>
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
