import React from 'react';
import {View,Text, TextInput} from 'react-native' ;
const App = () => {
  return(
    <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#FF8C88'}}>
    <View style={{flex: 1, height: 100, backgroundColor: 'red'}}></View>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 100, backgroundColor: '#000FFF'}}>
    <Text style={{fontSize: 30, }}>Helo Sidik </Text>
    </View>
    <View style={{flex: 1, height: 100, backgroundColor: 'yellow'}}></View>
    <View style={{flex: 1, height: 100, backgroundColor: 'green'}}>
      <TextInput style={{ height: 35, borderColor: 'black', borderWidth: 2 }}
      />
      </View>
    

    </View>
        
  );
}
export default App;