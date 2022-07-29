import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import ArticleItem from './ArticleItem'

class ArticleList extends React.Component {    

  static propTypes = {
    deals: PropTypes.array.isRequired,
    onItemPress: PropTypes.func.isRequired,
  };


 render() {    
    return (
    <View style={styles.container}>
    <FlatList 
      data={this.props.deals}
      renderItem={({item}) => (
        <ArticleItem deal={item} onPress={this.props.onItemPress}/>
   )}
    />
    </View>
  );
}
}
export default ArticleList;

const styles = StyleSheet.create({
container:{
width:'100%',
},
});