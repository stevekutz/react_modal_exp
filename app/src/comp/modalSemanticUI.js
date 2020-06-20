import React, {Component} from 'react';
import {Actions, Button, Content, Header, Icon, Modal} from 'semantic-ui-react';

export default class ModalSemanticUI extends Component {
    state = {modalOpen: false}

    handleClose = () => this.setState({modalOpen: false})
    handleOpen = () => this.setState({modalOpen: true})

    render() {

        return (
            <Modal
                trigger = {<Button onClick = {this.handleOpen}> SemanticUI modal</Button>}
                open = {this.state.modalOpen}
                onClose = {this.handleClose}
                basic
                size = 'small'
            >
                <Header icon = 'browser' content = 'Modal via Semantic UI' />
                <Modal.Content>
                    <h3> Some content inside </h3>
                </Modal.Content>
                <Modal.Actions>
                    <Button color = 'green' onClick = {this.handleClose} inverted>
                        <Icon name = 'checkmark' />
                        Okay
                    </Button>
                </Modal.Actions>

            </Modal>
        )

    }

}