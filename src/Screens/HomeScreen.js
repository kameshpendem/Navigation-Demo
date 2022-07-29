import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import Ajax from '../Ajax';
import ArticleList from '../components/ArticleList';
import ArticleDetail from '../components/ArticleDetail'

export default class HomeScreen extends React.Component {

  state ={
    deals : [],
    currentDealId: null,
  };

  async componentDidMount (){
     const deals = await Ajax.fetchInitialData();
     this.setState({
       deals: deals
     })
  };

  setCurentDeal= (dealId) => {
    this.setState({
    currentDealId: dealId
    });
  };       

  unsetCurentDeal= (dealId) => {
    this.setState({
    currentDealId: null,                                    
    });
  }; 
                 
  currentDeal = () => {
      return this.state.deals.find(
      (deal) => deal === this.state.currentDealId           
    );
    //console.log("CurrentDeal",currentDeal);
  };


  render(){
     
    if(this.state.currentDealId) {
    
      console.log("current Deal");
      return ( 
        
      <ArticleDetail deal={this.currentDeal()}
        onBack={this.unsetCurentDeal}
      />     
                                                   
      );
    }

    if (this.state.deals.length > 0) {
      return (<ArticleList deals={this.state.deals} onItemPress={this.setCurentDeal}/>);
    }

    return (
      <View style={styles.container}>
          <Text>News app</Text> 
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container:{
flex:1,
justifyContent:'center',
alignItems:'center',
  },
});
