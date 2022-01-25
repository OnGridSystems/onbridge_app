import Networks from '../../networks.json'

export function shortenAddress(address) {
  if (!address) {
    return
  }

  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
}

export function web3Injected(e) {
  return e !== undefined
}

export async function switchNetwork(chainId) {
  const params = Networks[chainId].params

  if (!window.ethereum) {
    console.log('error');
    throw new Error('eror')
  }

  if (web3Injected(window.ethereum)) {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: params.chainId }],
      })
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [params],
          })
        } catch (addError) {
          // handle "add" error
        }
      }
      // handle other "switch" errors
    }
  }
}
