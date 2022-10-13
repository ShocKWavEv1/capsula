import { Box } from '@chakra-ui/react'
import FAQ from '../../src/components/FAQs';
import Footer from '../../src/components/Footer';
import Nosotros from '../../src/components/Nostros';
import WhyUs from '../../src/components/WhyUs';

export default function Transparencia({dictionary}) {
  return (
    <Box w="100%" h="auto" zIndex={0} >
      <WhyUs dictionary={dictionary} />
      <Nosotros dictionary={dictionary} />
      <FAQ dictionary={dictionary} />
      <Footer dictionary={dictionary} />
    </Box>
  )
}

export async function getStaticProps({locale}) {
  const response = await import(`../../lang/${locale}.json`);
  return {
    props: {
      dictionary: response.default
    }
  }
}
