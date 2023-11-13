import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Pet, Radar, Ranking, SearchNormal1, Setting4, Slack, Star1, Like, DirectInbox} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';;
import { dongeng1, dongeng3, dongeng4 } from '../../assets/images';


export default function Discover() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.boxsearch}>
            <SearchNormal1 size={20} color={colors.grey(1)} />
            <Text style={[styles.teks, { color: colors.grey(1) }]}>  Book, Author, or Keyword . . .</Text>
            <Setting4 size={20} color={colors.grey(1)} />
          </View>
          <View style={styles.itemAndIconContainer}>
          <Image
            style={styles.cardImage}
            source={dongeng1}
          />
          <View style = {styles.itemAndIconContainer1}>
            <Text style={[styles.teks, { color: colors.white(0.7)},{fontSize :11}]}>Arunika Senja</Text>
          <Text style={styles.title}>A Friendship of Otter and Tortoise</Text> 
          <View style ={styles.iconstar}>
          <Star1 size={15} color ='red' variant="Bold"></Star1>
          <Star1 size={15} color ='red' variant="Bold"></Star1>
          <Star1 size={15} color ='red' variant="Bold"></Star1>
          <Star1 size={15} color ='red' variant="Bold"></Star1>
          <Star1 size={15} color ='red' variant="Bold"></Star1>
          </View>
         <Text style={[styles.teks, { color: colors.white(1)},{fontSize :10}]}>A Friendship of Otter and Tortoise is a
          heartwarming tale that revolves around 
          the unlikely bond formed between an otter and a tortoise....</Text> 
          </View>
          </View>           
        </View>
        <View style={styles.box2}>
        <View style={styles.box3}>
          <Text style={[styles.teks, { color: colors.blue(1) }]}> Books </Text>
        </View>
        <Text style={[styles.teks, { color: colors.grey(1) }]}>       Comic </Text>
        <Text style={[styles.teks, { color: colors.grey(1) }]}>        All </Text>
      </View>
      <View style={styles.konten}>
        <Text style={[styles.title, { color: colors.black(1) }, {fontSize:20}]}>Categories</Text>
      </View>
      <CategoriesList />
      <View style={styles.konten}>
        <Text style={[styles.title, { color: colors.black(1) }, {fontSize:20}]}>Popular Now!</Text>
      </View>
      <ListPopular />
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(1),
  },
  itemAndIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 24,
  },
  itemAndIconContainer1: {
    width: 210,
    flexDirection: 'column',
    alignItems: 'left',
    paddingHorizontal: 10,
  },
  iconstar: {
    flexDirection: 'row',
    alignItems: 'left',
    paddingBottom: 10,
    gap: 5,
  },
  konten:{
    paddingTop: 25,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'coloumn',
  },
  box: {
    width: 393,
    height: 300,
    backgroundColor: colors.blue(1),
    borderRadius: 0,
    elevation: 100,
    paddingTop: 45,
    paddingBottom: 0,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'left',
    flexDirection: 'coloumn',
  },
  boxsearch: {
    width: 340,
    height: 55,
    backgroundColor: colors.white(1),
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  teks: {
    fontSize: 15,
    fontFamily: fontType['Ppn-Regular'],
    justifyContent: 'space-between',
    color: 'white',
  },
  title: {
    fontSize: 17,
    fontFamily: fontType['Ppn-Bold'],
    color: 'white',
  },
  box2: {
    width: 300,
    height: 55,
    marginTop: 25,
    marginLeft: 40,
    backgroundColor: colors.white(0.5),
    borderRadius: 15,
    paddingHorizontal: 10,
    justifyContent: 'left',
    alignItems: 'center',
    flexDirection: 'row',
  },
  box3: {
    width: 135,
    height: 30,
    backgroundColor: colors.white(1),
    borderRadius: 15,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: 140,
    height: 170,
    borderRadius: 0,
    resizeMode: 'cover',
  },
  CategoriesList: {
    flex :1,
    paddingVertical: 10,
  },
  ListPopular: {
    flex :1,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
});

const ListPopular = () => {
  return (
    <ScrollView>
      <View style={styles.ListPopular}>
      <View style={popular.cardItem}>
                <Image
                  style={popular.cardImage}
                  source={dongeng4}
                />
                <View style={popular.cardContent}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, paddingRight: 10 }}>
                     <Text style={popular.cardText}>Mindaha</Text>
                      <Text style={popular.cardTitle}>The Lovely Bird</Text>
                      <View style ={styles.iconstar}>
                        <Star1 size={15} color ='red' variant="Bold"></Star1>
                        <Star1 size={15} color ='red' variant="Bold"></Star1>
                        <Star1 size={15} color ='red' variant="Bold"></Star1>
                        <Star1 size={15} color ='red' variant="Bold"></Star1>
                        <Star1 size={15} color ='red' variant="Bold"></Star1>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center',justifyContent:'center' }}>
                      <View style={popular.circle}>
                      <DirectInbox color={colors.white(1)} variant="Linear" size={28} />
                      </View>
                      
                    </View>
                  </View>
                </View>
            </View>
      
            <View style={popular.cardItem}>
                <Image
                  style={popular.cardImage}
                  source={dongeng3}
                />
                <View style={popular.cardContent}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, paddingRight: 10 }}>
                     <Text style={popular.cardText}>Cornelia</Text>
                      <Text style={popular.cardTitle}>The Enchanted Moon</Text>
                      <View style ={styles.iconstar}>
                        <Star1 size={15} color ='red' variant="Bold"></Star1>
                        <Star1 size={15} color ='red' variant="Bold"></Star1>
                        <Star1 size={15} color ='red' variant="Bold"></Star1>
                        <Star1 size={15} color ='red' variant="Bold"></Star1>
    
                        </View>
                    </View>
                    <View style={{ alignItems: 'center',justifyContent:'center' }}>
                      <View style={popular.circle}>
                      <DirectInbox color={colors.white(1)} variant="Linear" size={28} />
                      </View>
                      
                    </View>
                  </View>
                </View>
            </View>

      </View>
    </ScrollView>
  );
};

const CategoriesList = () => {
  return (
    <ScrollView>
      <View style={styles.CategoriesList}>
        <View style={category.kontenvertical}>
          <View style={category.box}>
            <View style={styles.itemAndIconContainer}>
              <Pet size="30" color="black" variant="Outline" />
              <Text style={[styles.title, { color: colors.black(0.8) }, { fontSize: 18 }]}>Fabel</Text>
            </View>
          </View>

          <View style={category.box}>
            <View style={styles.itemAndIconContainer}>
              <Radar size="30" color="black" variant="Outline" />
              <Text style={[styles.title, { color: colors.black(0.8) }, { fontSize: 18 }]}>Myth</Text>
            </View>
          </View>
        
        </View>
        <View style={category.kontenhorizontal}>
          
        <View style={category.kontenvertical}>
          <View style={category.box}>
            <View style={styles.itemAndIconContainer}>
              <Ranking size="30" color="black" variant="Outline" />
              <Text style={[styles.title, { color: colors.black(0.8) }, { fontSize: 18 }]}>Magic</Text>
            </View>
          </View>

          <View style={category.box}>
            <View style={styles.itemAndIconContainer}>
              <Slack size="30" color="black" variant="Outline" />
              <Text style={[styles.title, { color: colors.black(0.8) }, { fontSize: 18 }]}>Folk</Text>
            </View>
          </View>
        
        </View>
        
       </View>
      </View>
    </ScrollView>
  );
};

const category = StyleSheet.create({
  box:{
    width: 150,
    height: 50,
    backgroundColor: colors.yellow(1),
    borderRadius: 10,
    elevation: 5,
    marginLeft:24,
    paddingTop:10,
    paddingHorizontal:30,
    justifyContent: 'space-between',
    alignItems: 'left',
  },
  kontenvertical:{
    width : 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  kontenhorizontal:{
    width : 300,
    marginTop:10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});


const popular = StyleSheet.create({
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
    width: 60,
    height: 62,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  circle:{
    width: 50,
    height: 50,
    borderRadius: 50, 
    backgroundColor:colors.blue(1), 
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
  },
});


