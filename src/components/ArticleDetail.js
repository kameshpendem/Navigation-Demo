import React,{Component} from 'react'
import {Button,TouchableOpacity,Text,StyleSheet,Image,ScrollView,Linking,View} from 'react-native'
import PropTypes from 'prop-types';



export default class ArticleDetail extends Component {

  static propTypes ={
    deal: PropTypes.object.isRequired,
    onBack: PropTypes.func.isRequired,
  };

  openUrl = () => {
 const URL =  Linking.openURL(this.props.deal.url);
 console.log("URl" ,URL);
    };

    render(){
     //  const {deal} = this.props.deal;
   return(
    <ScrollView style={styles.deals}>
    <TouchableOpacity style={styles.backButtonContainer} onPress={this.props.onBack}>
        <Text style={styles.backBTN}>BACK</Text>
    </TouchableOpacity>
    <View style={{paddingTop: 10}}>            
    <Image source={{uri: this.props.deal.urlToImage }} style={{width:'100%' , height:200}} />
    <Text style={{color:'#000',fontSize:20, fontStyle:'italic',fontWeight:'normal',padding: 10, paddingLeft:5}}>Author : {this.props.deal.author}</Text>
    <Text style={{color:'#000',fontSize:20, fontStyle:'italic',fontWeight:'normal',}}>Source : {this.props.deal.source.name}</Text>
    <Text style={{color:'#000',padding:10,paddingLeft:5,fontFamily:'TimesNewRomanPS-ItalicMT',fontSize:20,fontWeight:'normal'}}>
        Description :  <Text>{this.props.deal.description}</Text>
    </Text>
    <Button title='Read Complete Article' onPress={this.openUrl}/>
    </View>
    </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    deals:{
        marginHorizontal:12,
        marginTop:12,   
            },
    image:{
        width: '100%',
        height: 150,

    },
    backButtonContainer: {
        elevation: 8,
        backgroundColor: "#87CEFA",
        borderRadius: 10,
        paddingVertical: 10,
        width:'20%'
      },
    backBTN:{ 
       color:'#fff',
       fontSize: 18,
       fontWeight: "bold",
       alignSelf: "center",
       textTransform: "uppercase"
    },
});