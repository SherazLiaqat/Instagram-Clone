import { Button, Modal } from '@material-ui/core';
import React, { Component } from 'react'

export default class Try extends Component {
    state = {
       
       show:false,
      
        
        
      };
     handleModal(){
       this.setState({show:true})
     }
    render() {
        return (
            <div>
                <Button onClick={()=>this.handleModal()}> Modal</Button>
                <Modal>
                    <Modal.Hedaer>Heading</Modal.Hedaer>
                    <Modal.body>Heading</Modal.body>
                    <Modal.footer>

                    </Modal.footer>
                </Modal>
            </div>
        )
    }
}
