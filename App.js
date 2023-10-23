import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Book, ReceiptSquare, SearchNormal1, Like, Document, Notification, ProfileCircle, Book1 } from 'iconsax-react-native';
import { fontType, colors } from './src/theme';
import { dongeng1, dongeng2, dongeng3, dongeng4 } from './src/assets/images';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.itemAndIconContainer}>
          <Text style={[styles.title, { color: colors.white(1) }]}>Let's Read Something!</Text>
          <Book size={23} color={colors.white(1)} />
        </View>
        <View style={styles.itemAndIconContainer}>
          <View style={styles.boxsearch}>
            <SearchNormal1 size={10} color={colors.white(1)} />
            <Text style={[styles.teks, { color: colors.white(1) }]}>  Search...</Text>
          </View>
          <Like size={23} color={colors.white(1)} />
          <Document size={23} color={colors.white(1)} />
          <Notification size={23} color={colors.white(1)} />
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.box3}>
          <Text style={[styles.teks1, { color: colors.blue(1) }]}> Ebook </Text>
        </View>
        <Text style={[styles.teks1, { color: colors.grey(1) }]}>           Comic </Text>
      </View>
      <View style={[styles.content]}>
        <View style={styles.itemAndIconContainer}>
          <Text style={[styles.title, { color: colors.black(1) }]}>Recent Readings!</Text>
          <Text style={[styles.title, { color: colors.blue(1) }]}>View All</Text>
        </View>
        <ListBook />
        <View style={[styles.horizontalLine, { opacity: 0.2 }]}></View>
        <View style={styles.itemAndIconContainer}>
          <Text style={[styles.title, { color: colors.black(1) }]}>Categories</Text>
          <Text style={[styles.title, { color: colors.blue(1) }]}>Sort by: Popularity</Text>
        </View>
        <ListCategories />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  title: {
    fontSize: 15,
    fontFamily: fontType['Ppn-Bold'],
  },
  content: {
    paddingTop: 25,
    paddingBottom: 30,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'coloumn',
  },

  itemAndIconContainer: {
    flexDirection: 'row', // Mengatur teks dan ikon dalam satu baris
    justifyContent: 'space-between',
  },
  box: {
    width: 395,
    height: 140,
    backgroundColor: colors.blue(1),
    borderRadius: 10,
    elevation: 9,
    paddingTop: 45,
    paddingBottom: 30,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'coloumn',
  },
  boxsearch: {
    width: 200,
    height: 30,
    backgroundColor: colors.white(0.2),
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: 'left',
    alignItems: 'center',
    flexDirection: 'row',
  },
  teks: {
    fontSize: 10,
    fontFamily: fontType['Ppn-Regular'],
    // color: 'white',
  },
  teks1: {
    fontSize: 15,
    fontFamily: fontType['Ppn-Bold'],
    // color: 'white',
  },

  box2: {
    width: 280,
    height: 55,
    marginTop: 25,
    marginLeft: 60,
    backgroundColor: colors.grey(0.1),
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

  horizontalLine: {
    marginTop : 20,
    marginBottom : 12,
    width: '100%', 
    height: 1, 
    backgroundColor: 'grey',
  },

  listCategories: {
    paddingVertical: 10,
  },
  listBook: {
    paddingVertical: 10,
    gap: 10,
  },

});

const ListBook = () => {
  return (
    <ScrollView>
      <View style={styles.ListBook}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal 
          contentContainerStyle={{ gap: 15 }}>
          <View style={[itemHorizontal.card, { backgroundColor: colors.blue(1) }]}>
            <Book1 size={20} color={colors.white(1)} />
            <Text style={itemHorizontal.cardTitle}>The Enchanted Moon: A Tale of Wishes</Text>
            <View style={[itemHorizontal.horizontalLine, { opacity: 0.3 }]}></View>
            <View style={[itemHorizontal.cardContent]}>
             <ProfileCircle size={15} color={colors.white(1)} />
             <Text style={itemHorizontal.cardText}>Cornelia Boro</Text>
            </View>
          </View>
          <View style={[itemHorizontal.card, { backgroundColor: colors.green(1) }]}>
            <Book1 size={20} color={colors.white(1)} />
            <Text style={itemHorizontal.cardTitle}>A Friendship of Otter and Tortoise</Text>
            <View style={[itemHorizontal.horizontalLine, { opacity: 0.3 }]}></View>
            <View style={[itemHorizontal.cardContent]}>
             <ProfileCircle size={15} color={colors.white(1)} />
             <Text style={itemHorizontal.cardText}>Mindaha</Text>
            </View>
          </View>
          <View style={[itemHorizontal.card, { backgroundColor: colors.red(1) }]}>
            <Book1 size={20} color={colors.white(1)} />
            <Text style={itemHorizontal.cardTitle}>The Legend of the Phoenix</Text>
            <View style={[itemHorizontal.horizontalLine, { opacity: 0.3 }]}></View>
            <View style={[itemHorizontal.cardContent]}>
             <ProfileCircle size={15} color={colors.white(1)} />
             <Text style={itemHorizontal.cardText}>Arunika Senja</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const ListCategories = () => {
  return (
    <ScrollView>
      <View style={styles.ListCategories}>
      <ScrollView
          showsVerticalScrollIndicator={false}
          vertical>
      <View style={itemVertical.listCard}>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={dongeng1}

            />
            <View style={itemVertical.cardContent}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 1, paddingRight: 10 }}>
                  <Text style={itemVertical.cardTitle}>Fabel</Text>
                  <Text style={itemVertical.cardText}>128 Publications</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Like color={colors.blue(0.6)} variant="Linear" size={20} />
                </View>
              </View>
            </View>
          </View>
          
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={dongeng2}
            />
            <View style={itemVertical.cardContent}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 1, paddingRight: 10 }}>
                  <Text style={itemVertical.cardTitle}>Mythological</Text>
                  <Text style={itemVertical.cardText}>50 Publications</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Like color={colors.blue(0.6)} variant="Linear" size={20} />
                </View>
              </View>
            </View>
          </View>

          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={dongeng3}
            />
            <View style={itemVertical.cardContent}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 1, paddingRight: 10 }}>
                  <Text style={itemVertical.cardTitle}>Urban Legend</Text>
                  <Text style={itemVertical.cardText}>20 Publications</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Like color={colors.blue(0.6)} variant="Linear" size={20} />
                </View>
              </View>
            </View>
          </View>
          
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={dongeng4}
            />
            <View style={itemVertical.cardContent}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 1, paddingRight: 10 }}>
                  <Text style={itemVertical.cardTitle}>Classic Folktales</Text>
                  <Text style={itemVertical.cardText}>70 Publications</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Like color={colors.blue(0.6)} variant="Linear" size={20} />
                </View>
              </View>
            </View>
          </View>

      </View>
      </ScrollView>
     </View>
     </ScrollView>
  );
};



const itemVertical = StyleSheet.create({
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


const itemHorizontal = StyleSheet.create({
  card:{
    width: 150,
    height:180,
    borderRadius: 12,
    marginTop : 10,
    paddingTop: 20,
    paddingBottom: 30,
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

