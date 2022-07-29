import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,} from 'react-native'
import PropTypes from 'prop-types';
import { Card, Title, Paragraph }  from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class ArticleItem extends Component {

  static propTypes ={
      deal: PropTypes.object.isRequired,
      onPress: PropTypes.func.isRequired,
    
  };

 handlepress = () => {
    this.props.onPress(this.props.deal);
   console.log("Article Item deal",this.props.deal);
  }
    render(){
        const {deal} = this.props;
      //  console.log("deal",deal);
      
        // const saveData = async() => {
        //     var Data = {
        //   Author: author ,
        //   Title: title,
        //     };
        //    await AsyncStorage.setItem('SavedData',JSON.stringify(saveData))
        // };

        return(
         <Card>
             <Card.Content>
                 <Title>Author : {deal.author}</Title>
             </Card.Content>
             <Card.Cover source={{uri : deal.urlToImage }}/>
             <Card.Content>
                 <Paragraph>{deal.title}...</Paragraph>
             </Card.Content>
             <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignContent:'space-around'}}>
            <TouchableOpacity style={styles.appButtonContainer}>
               <Text style={styles.bookmarkbtn}>BookMark</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainer} onPress={this.handlepress}>
                <Text style={styles.readmorebtn}>Readmore..</Text>
            </TouchableOpacity>
             </View>            
         </Card>
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
    bookmarkbtn:{
       
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
    readmorebtn:{
    
       color:'#fff',
       fontSize: 18,
       fontWeight: "bold",
       alignSelf: "center",
       textTransform: "uppercase"
    },
});