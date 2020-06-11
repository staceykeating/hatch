import React, {Component} from 'react';
import axios from 'axios';


class TestImage extends Component {

  state = {
    selectedImage: null
  }

  uploadFile = event => {
    this.setState({
      selectedImage: event.target.files[0]
    })
  }

  imageUploader = () => {
    const data = new FormData();
    data.append('image', this.state.selectedImage, this.state.selectedImage.name)
    axios.post("/api/trip", data, {
      onUploadProgress: progressEvent =>{
        console.log(`Upload Progress`)
      }
    })
    .then(res => {
      console.log(res)
    })
  }


  render() {
  return (
    <div>
      <input type="file"
      onChange={this.uploadFile}
      ref={imageInput => this.imageInput = imageInput}
      />
      {/* <button onClick={() => this.imageInput.click()}> upload Image </button> */}
      <button onClick={this.imageUploader}> Save Image </button>
    </div>
  )
}
}

export default TestImage