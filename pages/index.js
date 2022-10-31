import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useContext, useEffect } from 'react';
import bg from "../assets/bg/ffflux.svg";
import Capsula from '../src/components/Capsula';
import FAQ from '../src/components/FAQs';
import Footer from '../src/components/Footer';
import Hero from '../src/components/Hero';
import Nosotros from '../src/components/Nostros';
import WhyUs from '../src/components/WhyUs';
import MainContext from '../src/context';

export default function Home({dictionary, categories}) {

  const contextService = useContext(MainContext);

  useEffect(() => {
    contextService.handleCategories(categories);
  }, [categories])

  return (
    <Box w="100%" h="90vh" zIndex={0} >
      <Image
        src={bg}
        alt={bg}
        layout='fill'
        objectFit='cover'
      />
      <Hero dictionary={dictionary} />
      <Capsula dictionary={dictionary} />
      <Nosotros dictionary={dictionary} />
      <WhyUs dictionary={dictionary} />
      <FAQ dictionary={dictionary} />
      <Footer dictionary={dictionary} />
    </Box>
  )
}

export const getServerSideProps = async ({pageContext, locale}) => {
  const response = await import(`../lang/${locale}.json`);

  const query = encodeURIComponent(`*[ _type == "category" ]`);

  const url = `https://jtkuuwmj.api.sanity.io/v1/data/query/production?query=${query}`

  const result = await fetch(url).then((res) => res.json());

  if(!result.result || !result.result.length) {
    return {
      props: {
        categories: []
      }
    }
  } else {
    return {
      props: {
        categories: result.result,
        dictionary: response.default
      }
    }
  }
}
