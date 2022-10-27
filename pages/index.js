import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import bg from "../assets/bg/ffflux.svg";
import Capsula from '../src/components/Capsula';
import FAQ from '../src/components/FAQs';
import Footer from '../src/components/Footer';
import Hero from '../src/components/Hero';
import Nosotros from '../src/components/Nostros';
import WhyUs from '../src/components/WhyUs';

export default function Home({dictionary}) {
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

export async function getStaticProps({locale}) {
  const response = await import(`../lang/${locale}.json`);
  return {
    props: {
      dictionary: response.default
    }
  }
}
