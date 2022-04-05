import { MainWrapper, Gallery } from '../../components'
import LackOfMetamask from '../../components/LackOfMetamask/LackOfMetamask'
import { provider } from '../../api/bridge'

export function Main({ currentPage, setCurrentPage }) {
  return (
    <MainWrapper currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {provider ? <Gallery /> : <LackOfMetamask></LackOfMetamask>}
    </MainWrapper>
  )
}
