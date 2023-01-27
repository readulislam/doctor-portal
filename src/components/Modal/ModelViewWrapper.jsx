import { Button, Modal } from "flowbite-react";
import React from "react";


import PrimaryButton from "../../Common/PrimaryButton";


const ModelViewWrapper = ({
  props,children,modalHeaderTitle,PrimaryButtonTitle,PrimaryButtonType,
}) => {

  const {doctorData,setDate,slotsInfo,selected,setSelected,userId, number,setNumber,currentTime,disableDate,setOpen,open,handleSubmit,}= props ;
  
  return (
    <>
      {" "}
      <Modal className="bg-gray-900 " show={open}  size='4xl' position="center" onClose={() => setOpen(false)}>

        <div className="bg-green-200 rounded-md ">
        <form id="form" onSubmit={handleSubmit}>
          <Modal.Header className="!py-3 px-8 !text-gray-700 uppercase">{modalHeaderTitle}</Modal.Header>
          <div className="h-[680px] overflow-y-auto">
          <Modal.Body>
            {children}


            
          
          </Modal.Body>
          </div>
          <Modal.Footer className="flex !py-3 justify-between  w-full">
            <Button color="gray" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <PrimaryButton type={PrimaryButtonType}>
              {PrimaryButtonTitle}
            </PrimaryButton>
          </Modal.Footer>
        </form>
        </div>
      </Modal>










    
      

    </>
  );
};

export default ModelViewWrapper;
