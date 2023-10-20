import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Book, ReceiptSquare, Clock, Message } from 'iconsax-react-native';
import { fontType, colors } from './src/theme';
import { dongeng1, dongeng2, dongeng3, dongeng4 } from './src/assets/images';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Nusantara Saga</Text>
        <Book size={28} color={colors.bluec(1)} />
      </View>
      <View style={content1.container}>
        <Text style={content1.title}>Hello Mindaha!</Text>
        <Text style={content1.subtitle}>Which books suits your current mood?</Text>
        <View style={styles.listCategory}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ ...category.item, marginLeft: 5 }}>
              <Text style={{ ...category.title, color: colors.bluec() }}>
                Popular
              </Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>Urban Legends</Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>Mythological</Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>Maritime </Text>
            </View>
            <View style={{ ...category.item, marginRight: 24 }}>
              <Text style={category.title}>Classic Folktales</Text>
            </View>
          </ScrollView>
        </View>
        <View style={content1.item}></View>
        <View style={content1.box}>
          <Text style={content1.subtitle}>Remember, Mindaha. You have an unfinished book since September 29, 2023
          </Text>
        </View>
        <Text style={content1.title1}>Recomendation</Text>
      </View>
      <ListBook />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: colors.white(), // Atur latar belakang menjadi putih
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Ppn-ExtraBold'],
    color: colors.bluec(1),
  },
});

const content1 = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: colors.cream(0.1),
  },

  item: {
    margin: 10,
  },

  title: {
    fontFamily: fontType['Ppn-SemiBold'],
    fontSize: 28,
    lineHeight: 35,
    color: colors.bluec(1),
  },
  subtitle: {
    fontFamily: fontType['Ppn-Regular'],
    fontSize: 15,
    lineHeight: 25,
    color: colors.black(1),
  },
  subtitle: {
    fontFamily: fontType['Ppn-Regular'],
    fontSize: 15,
    lineHeight: 25,
    paddingBottom: 20,
    color: colors.black(1),
  },
  title1: {
    fontFamily: fontType['Ppn-SemiBold'],
    fontSize: 15,
    lineHeight: 25,
    paddingTop: 20,
    color: colors.bluec(1),
  },
  box: {
    paddingHorizontal: 24,
    paddingTop: 15,
    borderRadius: 10,
    width: 370,
    height: 150,
    backgroundColor: colors.white(0.7),
  },
})

const category = StyleSheet.create({
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal: 5
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.bluec(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  ListBook: {
    paddingVertical: 10,
    gap: 10,
  },
})


const ListBook = () => {
  return (
    <ScrollView>
      <View style={styles.ListBook}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ gap: 10 }}>
          <View style={{ ...itemHorizontal.cardItem, marginLeft: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={dongeng2}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                  The Enchanted Moon: A Tale of Wishes
                  </Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <ReceiptSquare color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={dongeng1}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                  A Friendship of Otter and Tortoise
                  </Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <ReceiptSquare color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={dongeng3}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Baking 101: Mastering the Art of Baking
                  </Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <ReceiptSquare color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...itemHorizontal.cardItem, marginRight: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={dongeng4}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Rediscovering Vinyl: The Resurgence of Analog
                  </Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <ReceiptSquare color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
  <View style={itemVertical.listCard}>
  <View style={itemVertical.cardItem}>
    <Image
      style={itemVertical.cardImage}
      source={dongeng1}
    />
    <View style={itemVertical.cardContent}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flex: 1, paddingRight: 10 }}>
          <Text style={itemVertical.cardTitle}>A Friendship of Otter and Tortoise</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <ReceiptSquare color={colors.bluec(0.6)} variant="Linear" size={20} />
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
          <Text style={itemVertical.cardTitle}>A Friendship of Otter and Tortoise</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <ReceiptSquare color={colors.bluec(0.6)} variant="Linear" size={20} />
        </View>
      </View>
    </View>
  </View>
</View>

      </View>
    </ScrollView>  
  );
};

const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.cream,
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.blueb(),
    fontSize: 10,
    fontFamily: fontType['Ppn-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Ppn-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Ppn-Medium'],
    color: colors.blueb(0.6),
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});

const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 300,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '50%',
    gap: 10,
    maxWidth: '60%',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',  
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
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});

