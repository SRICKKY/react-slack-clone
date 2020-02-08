import React from 'react';
import { connect } from 'react-redux';
import { Grid, Header, Icon, Dropdown, Image } from 'semantic-ui-react';
import firebase from '../../firebase'

class UserPanel extends React.Component {

    // state = {
    //     user: null
    // }

    // componentDidMount(){
    //     this.setState({
    //         user: this.props.currentUser
    //     })
    // }

    dropdownOptions = () => [
        {
            key: "user",
            text: <span>Signed in as <strong>{this.props.currentUser ? this.props.currentUser.displayName: "Anonymous"}</strong></span>,
            disabled: true
        },
        {
            key: "avatar",
            text: <span>Change Avatar</span>
        },
        {
            key: "signout",
            text: <span onClick={this.handleSignout}>Sign Out</span>
        }
    ];

    handleSignout = () => {
        firebase
            .auth()
            .signOut()
            .then( _ => console.log("Signed Out!"))
    }

    render() {
        const { displayName } = this.props.currentUser;
        const { photoURL } = this.props;

        return (
            <Grid style={{ background: '#4c3c4c' }}>
                <Grid.Column>
                    <Grid.Row style={{ padding: '1.2em', margin: 0 }}>
                        {/* App Header */}
                        <Header inverted floated="left" as="h2">
                            <Icon name="code" />
                            <Header.Content>DevChat</Header.Content>
                        </Header>

                        {/* User Dropdown */}
                        <Header style={{ padding: '0.25em' }} as="h4" inverted>
                            <Dropdown 
                                trigger={
                                    <span>
                                        <Image src={photoURL} spaced="right" avatar />
                                        {displayName}
                                    </span>
                                } 
                                options={this.dropdownOptions()} 
                            />
                        </Header>
                    </Grid.Row>

                </Grid.Column>
            </Grid>

        )
    }
}

const mapStateToProps = state  => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(UserPanel);