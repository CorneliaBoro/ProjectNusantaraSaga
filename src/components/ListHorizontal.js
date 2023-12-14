import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Like} from 'iconsax-react-native';
import { fontType, colors } from '../theme';



const ItemHorizontal = ({item, variant, onPress}) => {
  return (
    <View style={itemHorizontal.card}>
        <View style={itemHorizontal.cardContent}>
            <View style={[itemHorizontal.card , {backgroundColor:item.bg }]}>
            <View>
              <TouchableOpacity onPress={onPress}>
                <Like color={colors.red()} variant={variant} size={20} />
              </TouchableOpacity>
            </View>
            <Text style={itemHorizontal.cardTitle}>{item.title}</Text>
            <Text style={itemHorizontal.cardText}>{item.writer}</Text>
            </View> 
          </View> 
    </View>
  );
};

const ListHorizontal = ({data}) => {
  const [bookmark, setBookmark] = useState([]);
  const toggleBookmark = itemId => {
    if (bookmark.includes(itemId)) {
      setBookmark(bookmark.filter(id => id !== itemId));
    } else {
      setBookmark([...bookmark, itemId]);
    }
  };
  const renderItem = ({item}) => {
    variant = bookmark.includes(item.id) ? 'Bold' : 'Linear';
    return (
      <ItemHorizontal
        item={item}
        variant={variant}
        onPress={() => toggleBookmark(item.id)}
      />
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 15}} />}
      contentContainerStyle={{paddingHorizontal: 10}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
export default ListHorizontal;

const itemHorizontal = StyleSheet.create({
  card:{
    width: 150,
    height:200,
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 50,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'coloumn',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontFamily: fontType['Ppn-Bold'],
    fontSize: 13,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Ppn-Medium'],
  },
  horizontalLine: {
    width: '100%', 
    height: 1, 
    backgroundColor: 'white',
  },
});

