import { Box } from '@chakra-ui/react'
import FAQ from '../../src/components/FAQs';
import Footer from '../../src/components/Footer';

export default function Transparencia({dictionary}) {
  return (
    <Box w="100%" h="auto" zIndex={0} >
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
