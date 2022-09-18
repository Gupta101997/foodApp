import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {colors,hr80} from '../../global/style';

const WelcomeScreen = ({navigation}) => {
  return (
   <View style={styles.container}>
        <Text style={styles.title}>Welcome Screen</Text>
        <View>
        <Image source={require('../../../assets/Delivery.png')} style={styles.logoImage}/>
        </View>
        <View style={hr80}/>
         <Text style={styles.text}> Find the  best  food around  you at 
         LOwest  price</Text>
        <View style={hr80}/>
        
           <View style={styles.btnout}>
                <TouchableOpacity onPress={()=>navigation.navigate('signup')} >
                        <Text style={styles.btn}>Sign up</Text>
                 </TouchableOpacity>
                  <TouchableOpacity onPress={()=>navigation.navigate('login')} >
                    <Text style={styles.btn}>Log In</Text>
                 </TouchableOpacity>
           </View>
   </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"red",
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    fontSize:50,
    color: colors.col1,
    textAlign:'center',
    marginVertical:10,
    fontWeight:"200",
  },
  text:{
    fontSize:18,
    width:"80%",
    color:colors.col1,
    textAlign:'center'
  },
  logoImage:{
    width:300,
    height:300
  }, 
  btnout:{
    flexDirection:'row',
  },
  btn: {
    fontSize: 20,
    color: colors.text1,
    textAlign: 'center',
    marginVertical: 30,
    marginHorizontal: 10,
    fontWeight: '700',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
},
})

export default WelcomeScreen
