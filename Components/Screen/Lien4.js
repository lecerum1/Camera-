import React from 'react';
import { Modal, ImageBackground, AppRegistry, View,Button} from 'react-native';





export default class Lien4 extends React.Component {


 render() {
   return (
     <ImageBackground style={{flex:1}} source={require("../../assets/Images/facade.jpg")}>

    
      <View style={{
       flex: 1,
       flexDirection: 'column',
       justifyContent: 'flex-end',
       alignItems: 'stretch',
      }}>
      <View style={{height: 50, backgroundColor: 'white'}} />
      <Button
               style={{height: 30,width: 100, backgroundColor:'black', color:'white', justifyContent:'center',aligntext:'center'}}
               onPress={ () => this.props.navigation.navigate('Home')}
               title="Home"
               color="black"
             />
      </View>
     </ImageBackground>    );
 }
}
