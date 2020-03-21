import Web3 from 'web3'
import React from 'react'

export default class Stake extends React.Component {
    state = {
        addr1: '0x000',
        addr2: '0x000',
      }
      
        componentDidMount() {
          this.loadBlockchain();
        }
        componentWillMount(){
          this.test()
        }
      
        async loadBlockchain() {
          const web3 = await new Web3(window.ethereum);
          const accounts = await web3.eth.getAccounts();
          const account = accounts[0]
          console.log(account)
          this.setState({addr2: account})
        }
      
        async test(){
          const web3 = await new Web3(window.ethereum);
          const accounts = await web3.eth.getAccounts();
          const account = accounts[0]
          console.log('test', account)
          this.setState({addr1: account})
        }
      
        render() {
      
          return (
            <div>
              <h1>addr</h1>
              <p>{this.state.addr1}</p>
              <p>{this.props.isAuthed}</p>
            </div>
          );
        }
}