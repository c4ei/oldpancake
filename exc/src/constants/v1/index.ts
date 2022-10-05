import { Interface } from '@ethersproject/abi'
import { ChainId } from '@pancakeswap-libs/sdk'
import V1_EXCHANGE_ABI from './v1_exchange.json'
import V1_FACTORY_ABI from './v1_factory.json'

const V1_FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x36DC049965fb0E07B9d49A2DCCE37Ac634D73ffa', // TODO org 0xC07d4604400139108BbdB3076636365A385879eF
  [ChainId.BSCTESTNET]: '0x36DC049965fb0E07B9d49A2DCCE37Ac634D73ffa'
}

const V1_FACTORY_INTERFACE = new Interface(V1_FACTORY_ABI)
const V1_EXCHANGE_INTERFACE = new Interface(V1_EXCHANGE_ABI)

export { V1_FACTORY_ADDRESSES, V1_FACTORY_INTERFACE, V1_FACTORY_ABI, V1_EXCHANGE_INTERFACE, V1_EXCHANGE_ABI }
