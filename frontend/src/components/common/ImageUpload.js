import React from 'react'
import axios from 'axios'

export default class ImageUpload extends React.Component {
  state = {
    image: null
  }

  handleUpload = async ({ target: { files } }) => {
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'px8nzwkd')
    const res = await axios.post('https://api.cloudinary.com/v1_1/dhemsdusi/image/upload', data)
    this.setState({ image: res.data.url }, () => {
      this.props.handleChange({ target: { name: this.props.fieldName, value: res.data.url } })
    })
  }

  render() {
    const { image } = this.state
    return (
      <>
      {image ?
        <div>
          <img alt="member" src={image} />
        </div>
        :
      <>
      {/* <label>{this.props.labelText}</label> */}
      <input type="file"
        onChange={this.handleUpload} />
      </>
      }
  </>
    )
  }
}