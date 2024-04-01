import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Pressable } from 'react-native';
import { surahNames, surahDetails } from '../Database/QuranData'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styled } from 'nativewind';


const StyledText = styled(Text)
const StyledTextInput = styled(TextInput)
const StyledPressable = styled(Pressable)
const QuranSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [Juz, setJuz] = useState(false);
    const [Dark, setDark] = useState(false);

    const [searchResults, setSearchResults] = useState(surahNames);
    const color = Dark ? '#000000' : 'white'
    const bgcolor = Dark ? '#000000' : 'white'

    const handleSearch = (text) => {


        const searchTerm = text;
        setSearchTerm(searchTerm);
        const results = surahNames.filter((surah) => {
            return (
                surah.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
                surah.arabic.includes(searchTerm)
            );
        });


        if (!results) {
            setSearchResults(surahNames)
            setSearchTerm('')
            return
        }
        setSearchResults(results);
    };




    return (

        <View style={{ backgroundColor: bgcolor, flex: 1, padding: 20 }}>
            <SafeAreaView>
                <StyledPressable onPress={() => {
                    console.log("pressed");
                    setDark(!Dark)
                }} className='p-3 bg-blue-700 rounded-xl flex items-center  w-30 justify-end' ><Text style={{ color: color }} >{Dark ? "Light " : "Dark mode"}</Text></StyledPressable>

                <View className='flex  justify-center items-center ' >
                    <StyledText className='text-lg  text-white'  > Assalaamu `alaykum</StyledText>
                    <StyledText className='font-bold text-lg '  > Rizwan Sabir</StyledText>
                </View>

                <View className='flex  border-2 border-blue-700 h-40 rounded-2xl m-3 mt-5'>

                    <View className='flex    flex-1 justify-center items-center'>
                        <Text className='text-4xl p-1'>Isha </Text>
                        <Text className='text-lg'>7:10 PM </Text>
                        <Text> Lahore ,Pakistan</Text>
                    </View>
                </View>

                <View className='flex  border-2 border-blue-700 h-36 rounded-2xl m-3 mt-5'>

                    <View className='flex  ml-4 mt-5   flex-1r'>
                        <Text> Last Read</Text>
                        <Text className='text-3xl font-extrabold'>Al -WAQI'AH</Text>
                        <Text className=''>Continue Reading</Text>
                    </View>
                </View>

                <View className=''>




                    <StyledTextInput className='rounded-2xl mt-2'
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
                        placeholder="Search Surah by name"
                        value={searchTerm}
                        onChangeText={handleSearch}
                    />
                    <View className='flex justify-center  flex-row '>
                        <StyledPressable className='p-3 w-20 bg-blue-700 rounded-xl flex items-center m-3'><Text>Surah</Text></StyledPressable>
                        <StyledPressable className='p-3 w-20 bg-blue-700 rounded-xl flex items-center m-3'><Text> Juz</Text></StyledPressable>
                    </View>
                    <FlatList
                        data={searchResults}
                        renderItem={SurahShow}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </SafeAreaView>
        </View>
    );
};




function SurahShow({ item }) {
    return (

        // <View>

        //     <Text>{item.english}</Text>
        // </View>

        <View className='   m-4 flex-row'>
            <View className='flex w-10 rounded-2xl  bg-blue-700 w  h-full mr-2'></View>
            <View className='flex flex-1'><Text style={{ fontSize: 18, marginBottom: 5 }}>{item.english} </Text><Text>Details</Text></View>
            <View className='flex flex-1'><Text style={{ fontSize: 18, marginBottom: 5 }}> {item.arabic}</Text></View>

        </View>
    )
}

export default QuranSearch;
{ }