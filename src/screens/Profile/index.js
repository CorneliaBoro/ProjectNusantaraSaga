import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { TextalignLeft} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';;
import { dongeng1, dongeng3, dongeng4, dongeng5, dongeng6, dongeng7, profile } from '../../assets/images';

export default function Profile() {
 return (
    <ScrollView>
        <View style={styles.container}>
            <View style ={styles.box}>
                <Text style={styles.title}>Profile</Text>
         </View>
        
         <View style={styles.konten}>
         <View style={styles.itemAndIconContainer}>
            <Image source = {profile} style={styles.Image} />
            <View style={styles.teksprofile}>
                 <Text style={[styles.title , { color: colors.blue(1) }, {fontSize:22}]}>Arunika Mindaha</Text>
                 <Text style={[styles.title , { color: colors.black(1) }, {fontSize:18}]}>Writer</Text>
                 <View style={styles.boxfollow}>
                 <Text style={[styles.teks, { color: colors.white(1) }, {fontSize:15}]}>Follow</Text>
                 </View>
            </View>  
         </View>

         <View style={[styles.itemAndIconContainer, {gap:70}]}>
            <View style={styles.kontencoloumn}>
             <Text style={[styles.title , { color: colors.black(1) }, {fontSize:20}]}>30</Text>
             <Text style={[styles.title , { color: colors.blue(1) }, {fontSize:15}]}>Books</Text>
            </View>

            <View style={styles.kontencoloum}>
             <Text style={[styles.title , { color: colors.black(1) }, {fontSize:20}]}>2.6K</Text>
             <Text style={[styles.title , { color: colors.blue(1) }, {fontSize:15}]}>Following</Text>
            </View>

            <View style={styles.kontencoloum}>
             <Text style={[styles.title , { color: colors.black(1) }, {fontSize:20}]}>90K</Text>
             <Text style={[styles.title , { color: colors.blue(1) }, {fontSize:15}]}>FOllowers</Text>
            </View>
         
         </View>
         </View>
         <View style ={styles.box2}>
                <Text style={[styles.title , { color: colors.black(1) }, {fontSize:20}]}>Bookshelf</Text>
         </View>
         <View style={styles.konten}></View>
         <View style={styles.boxbook}>
         <View style={[styles.itemAndIconContainer, {gap:10}]}>
         <View style={styles.kontenbook}>
             <Text style={[styles.title , { color: colors.black(1) }, {fontSize:10}]}>Beauty of Sumba</Text>
             <Image source = {dongeng1} style={styles.Imagebook} />
            </View>

            <View style={styles.kontenbook}>
             <Text style={[styles.title , { color: colors.black(1) }, {fontSize:10}]}>Story of Moon</Text>
             <Image source = {dongeng3} style={styles.Imagebook} />
            </View>

             <View style={styles.kontenbook}>
             <Text style={[styles.title , { color: colors.black(1) }, {fontSize:10}]}>Magic is Here!</Text>
             <Image source = {dongeng4} style={styles.Imagebook} />
            </View>

            
            
        </View>
        <View style={[styles.itemAndIconContainer, {gap:10}]}>
         <View style={styles.kontenbook}>
             <Text style={[styles.title , { color: colors.black(1) }, {fontSize:10}]}>Mistery in the Wood</Text>
             <Image source = {dongeng5} style={styles.Imagebook} />
            </View>

            <View style={styles.kontenbook}>
             <Text style={[styles.title , { color: colors.black(1) }, {fontSize:10}]}>Animal</Text>
             <Image source = {dongeng6} style={styles.Imagebook} />
            </View>

             <View style={styles.kontenbook}>
             <Text style={[styles.title , { color: colors.black(1) }, {fontSize:10}]}>Mushroom Grove</Text>
             <Image source = {dongeng7} style={styles.Imagebook} />
            </View>

            
            
        </View>
    
         </View>
         <View style={styles.konten}></View>

       
        
       
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
      justifyContent: 'left',
      paddingBottom :20,
    },
    kontencoloum:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        paddingBottom :20,
      },

      kontenbook:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        gap:5,
      },
    
    konten:{
      paddingTop: 25,
      paddingHorizontal: 24,
      justifyContent: 'space-between',
      flexDirection: 'coloumn',
    },
    teksprofile:{
      flexDirection: 'coloum',
      justifyContent: 'left',
      alignItems :'left',
      paddingHorizontal: 25,
    },
    boxfollow:{
        width: 200,
        height: 35,
        backgroundColor: colors.blue(),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems :'center',
    },
    box: {
        width: 394,
        height: 60,
        backgroundColor: colors.white(),
        borderRadius: 5,
        elevation: 5,
        paddingHorizontal: 15,
        // marginLeft :14,
        margintop:10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      box2: {
        width: 370,
        height: 50,
        backgroundColor: colors.white(),
        borderRadius: 10,
        elevation: 10,
        paddingHorizontal: 15,
        marginLeft :14,
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
      },
      boxbook: {
        width: 370,
        height: 350,
        backgroundColor: colors.white(),
        borderRadius: 10,
        elevation: 10,
        paddingHorizontal: 10,
        marginLeft :14,
        paddingTop :30,
      },
    teks: {
      fontSize: 15,
      fontFamily: fontType['Ppn-Regular'],
      justifyContent: 'space-between',
      color: 'white',
    },
    Line: {
        width: '100%', 
        height: 1, 
        backgroundColor: 'white',
      },
    title: {
      fontSize: 25,
      fontFamily: fontType['Ppn-Bold'],
      color: colors.black(1),
    },
    Image: {
        width: 110,
        height: 110,
        borderRadius: 75,
        resizeMode: 'cover',
        borderWidth: 3, 
        borderColor: colors.black(0.8), 
      },
    Imagebook: {
        width: 110,
        height: 110,
        borderRadius: 0,
        resizeMode: 'cover',
      },
  });