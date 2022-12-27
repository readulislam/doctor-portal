import { Button, Label, Modal, Textarea } from 'flowbite-react';
import React, { useState } from 'react';
import storage from '../../Utils/FireBase';


const UploadPrescription = ({open,setOpen}) => {
  const [image, setImage] = useState('');
  const [Url, setUrl] = useState('');
  
  const upload = () => {
    if (image === null)
      return;
    setUrl("Getting Download Link...")
    console.log(Url);
    
    // Sending File to Firebase Storage
    storage.ref(`/images/${image.name}`).put(image)
      .on("state_changed", alert("success"), alert, () => {
  
        // Getting Download Link
        storage.ref("images").child(image.name).getDownloadURL()
          .then((url) => {
            setUrl(url);
          })
      });
      console.log(Url);
  }
  return (
    <React.Fragment>
    <Modal
      show={open}
      position="center"
      onClose={() => {
        setOpen(false);
      }}
    >
     <Modal.Header className="">Upload Prescription </Modal.Header>
        
        <Modal.Body>
        <input type="file" 
        onChange={(e) => { setImage(e.target.files[0]) }} />
        <br/>
        <button onClick={upload}>Upload</button>
        <br />
        <p><a href={Url}>{Url}</a></p>
          <div id="textarea">
            <div className="mb-2 block">
                <Label
                htmlFor="Prescription"
                value="Upload Prescription"
                />
            </div>
            <Textarea
                id="Prescription"
                placeholder="Leave a Prescription..."
                required={true}
                onChange={()=>{}}
                rows={20}
            />
            </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-between">
          <Button
            className="px-2 "
            color="gray"
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            
            className="px-2 "
            gradientDuoTone="cyanToBlue"
            onClick={() => {
              setOpen(false);
            //   handleOtpSubmit();
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
    </Modal>
  </React.Fragment>
  )
}

export default UploadPrescription