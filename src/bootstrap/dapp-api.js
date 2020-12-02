import Web3 from 'web3'
import Archon from '@kleros/archon'

import * as _addresses from '../constants/addresses'

const env = process.env.NODE_ENV === 'production' ? 'PROD' : 'DEV'
const ETHEREUM_PROVIDER_URL =
  process.env[`REACT_APP_${env}_ETHEREUM_PROVIDER_URL`]
const ETHEREUM_ETHEREUM_PROVIDER_URL =
  process.env[`REACT_APP_${env}_ETHEREUM_ETHEREUM_PROVIDER_URL`]
const PATCH_USER_SETTINGS_URL =
  process.env[`REACT_APP_${env}_PATCH_USER_SETTINGS_URL`]

let web3
if (process.env.NODE_ENV === 'test')
  web3 = new Web3(require('ganache-cli').provider())
else if (window.ethereum) web3 = new Web3(window.ethereum)
else if (window.web3 && window.web3.currentProvider)
  web3 = new Web3(window.web3.currentProvider)
else web3 = new Web3(new Web3.providers.HttpProvider(ETHEREUM_PROVIDER_URL))

const ETHWeb3 = new Web3(
  new Web3.providers.HttpProvider(ETHEREUM_ETHEREUM_PROVIDER_URL)
)

const networkName = 'MAINNET'
const ARBITRABLE_ADDRESSES =
  _addresses[`${networkName}_MULTIPLE_ARBITRABLE_TRANSACTION_ADDRESSES`]
const ARBITRABLE_TOKEN_ADDRESSES =
  _addresses[`${networkName}_MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ADDRESSES`]
const T2CR_ADDRESS = _addresses[`${networkName}_T2CR_ADDRESS`]
const ERC20_ADDRESS = _addresses[`${networkName}_ERC20_BADGE_ADDRESS`]
const STABLECOIN_ADDRESS = _addresses[`${networkName}_STABLECOIN_BADGE_ADDRESS`]
const TOKENS_VIEW_ADDRESS = _addresses[`${networkName}_TOKENS_VIEW_ADDRESS`]

const archon = new Archon(web3.currentProvider, 'https://ipfs.kleros.io')

const ETHAddressRegExpCaptureGroup = '(0x[a-fA-F0-9]{40})'
const ETHAddressRegExp = /0x[a-fA-F0-9]{40}/
const strictETHAddressRegExp = /^0x[a-fA-F0-9]{40}$/
export {
  ARBITRABLE_ADDRESSES,
  ARBITRABLE_TOKEN_ADDRESSES,
  T2CR_ADDRESS,
  ERC20_ADDRESS,
  STABLECOIN_ADDRESS,
  PATCH_USER_SETTINGS_URL,
  web3,
  ETHWeb3,
  archon,
  ETHAddressRegExpCaptureGroup,
  ETHAddressRegExp,
  strictETHAddressRegExp,
  TOKENS_VIEW_ADDRESS,
}
