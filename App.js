import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
     
      <TextInput
      style={styles.input}
    />
      
      <TextInput
      style={styles.input}
   
    
      placeholder="useless placeholder"
      keyboardType="numeric"
      />
</View>
  )
}

export default App

const styles = StyleSheet.create({
  
})

