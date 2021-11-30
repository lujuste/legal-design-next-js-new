import { NextPage } from 'next'
import { Flex, Spinner } from '@chakra-ui/react'
import HomeDefault from '../../shared/components/HomeDefault'

import iconFeature from '../../../public/images/icon-feature.svg'

const Consultancy: NextPage = () => {
  return (
    <HomeDefault
      buttonText="Quero que a bits faça meu Legal Design"
      title="Consultoria"
      icon={iconFeature}
      description="Tenha um Jurídico estratégico.
   Aplique o Legal Design e traga mais resultados para a empresa."
    />
  )
}

export default Consultancy
