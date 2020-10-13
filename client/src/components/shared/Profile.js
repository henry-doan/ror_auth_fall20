import React, { Component } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Grid, Image, Header, Button } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

class Profile extends Component {
  state =  { editing: false, formValues: { name: '', email: '', file: '' } }

  componentDidMount() {
    const { name, email } = this.props.user 
    this.setState({ formValues: { name, email } })
  }

  onDrop = (files) => {
    this.setState({ formValues: {...this.state.formValues, file: files[0] }})
  }

  toggleEdit = () => this.setState({ editing: !this.state.editing })

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      formValues: {
        ...this.state.formValues,
        [name]: value 
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, file } = this.state.formValues
    const { user, updateUser } = this.props 
    updateUser(user.id, { name, email, file })
    this.setState({
      editing: false, 
      formValues: { 
        ...this.state.formValues,
        file: ''
      }
    })
  }

  editView = () => {
    const { user } = this.props 
    const { name, email, file } = this.state.formValues
    return(
      <Form onSubmit={this.handleSubmit}>
        <Grid.Column width={4}>
          <Dropzone
            onDrop={this.onDrop}
            multiple={false}
          >
            {({ getRootProps, getInputProps, isDragActive}) => {
              return (
                <div
                  {...getRootProps()}
                  style={styles.dropzone}
                >
                  <input { ...getInputProps()} />
                  {
                    isDragActive ?
                    <p>There is a file already</p>: 
                    <p>Drop files here</p> 
                  }
                </div>
              )
            }}
          </Dropzone>
        </Grid.Column>
        <Grid.Column width={8}>
          <Form.Input
            name='name'
            value={name}
            onChange={this.handleChange}
            required
            label='Name'
          />
          <Form.Input
            name='email'
            value={email}
            onChange={this.handleChange}
            required
            label='Email'
          />
          <Button>Update</Button>
        </Grid.Column>
      </Form>
    )
  }

  profileView = () => {
    const { name, email, image } = this.props.user
    return (
      <>
        <Grid.Column width={4}>
          <Image src={image || defaultImage} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header>{name}</Header>
          <Header>{email}</Header>
        </Grid.Column>
      </>
    )
  }

  render() {
    const { editing } = this.state
    return (
      <>
        <h1>Profile</h1>
        <Grid>
          <Grid.Row>
            { editing ? this.editView() : this.profileView() }
            <Grid.Column>
              <Button onClick={this.toggleEdit}>
                { editing ? 'Cancel' : 'Edit'}
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  }
}

const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    {
      value =>
      <Profile {...props} {...value} />
    }
  </AuthConsumer>
)

export default ConnectedProfile;