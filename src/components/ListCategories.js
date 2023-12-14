import React from 'react';
import { View, ScrollView, Text, Image,StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Like } from 'iconsax-react-native';
import { fontType, colors } from '../theme';

const ItemVertical = ({ item }) => (
    <View style={itemVertical.cardItem}>
      <Image style={itemVertical.cardImage} source={item.image} />
      <View style={itemVertical.cardContent}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flex: 1, paddingRight: 10 }}>
            <Text style={itemVertical.cardTitle}>{item.title}</Text>
            <Text style={itemVertical.cardText}>{item.publications} Publications</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Like color={colors.blue(0.6)} variant="Linear" size={20} />
          </View>
        </View>
      </View>
    </View>
  );
  
const ListCategories = ({ data }) => (
  <ScrollView>
    <View style={itemVertical.listCategories}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ItemVertical item={item} />}
        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  </ScrollView>
);

export default ListCategories;



const itemVertical = StyleSheet.create({
    listCategories: {
        flex :1,
        paddingVertical: 10,
        height: '100%',
        flexGrow: 1, 
    },
    listCard: {
    marginTop:10,
      gap: 15,
    },
    cardItem: {
      backgroundColor: colors.cream,
      flexDirection: 'row',
      borderRadius: 10,
    },
    cardTitle: {
      fontSize: 14,
      fontFamily: fontType['Ppn-Bold'],
      color: colors.black(),
    },
    cardText: {
      fontSize: 10,
      fontFamily: fontType['Ppn-Medium'],
      color: colors.grey(0.8),
    },
    cardImage: {
      width: 50,
      height: 50,
      borderRadius: 10,
      resizeMode: 'cover',
    },
  
    cardContent: {
      gap: 10,
      justifyContent: 'space-between',
      paddingRight: 10,
      paddingLeft: 15,
      flex: 1,
    },
  });
  
  