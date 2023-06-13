import React, {useState, useEffect} from 'react';
import './HomePage.css';
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { ImageSlider } from '../ImageSlider/ImageSlider'
//---COMPONENTS---
import {GameCardContainer} from '../GameCardContainer/GameCardContainer';
import { Slider } from '../Slider/Slider';


export const HomePage = ({trending, anticipated, isLoaded}) => {



    return (
          <Flex h='100vh' w='100%' direction='column' align='center' mt='10'>
            <Heading>Spotlight</Heading>
            <Text>This Will Show at max 5 games to spotlight on a tv screen</Text>
          </Flex>
    )
}