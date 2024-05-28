import React, { useState } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import toast from "react-hot-toast";
import { auth } from "../../FirebaseAuth/FirebaseAuth";

const ModalSection = ({userName}) => {
  const [openModal, setOpenModal] = useState(false);

  const [orderDetails, setOrderDetails] = useState({
    fullName: "",
    address: "",
    pincode: "",
    mobile: "",
  });


  const handleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });

    console.log(orderDetails);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    if (
      !orderDetails.fullName ||
      !orderDetails.address ||
      !orderDetails.pincode ||
      !orderDetails.mobile
    ) {
      return toast.error("All fields are required");
    } else {
      toast.success("order successfully");

      onCloseModal();
    }
  };

  function onCloseModal() {
    setOpenModal(false);
    setOrderDetails("");
  }

  const isLoggedIn = () => {
    const user = auth.currentUser;
    return !!user;
  };

  const handleLoginFirst = () => {
    toast.error("Please log in to proceed with checkout.");

  }

  return (
    <> 
      {isLoggedIn() ? ( // Render only if user is authenticated
        <Button
          onClick={() => setOpenModal(true)}
          className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-1 text-sm text-white uppercase w-full"
        >
          Checkout
        </Button>
      ) : (
        // <p>Please log in to proceed with checkout.</p>
        <Button onClick={handleLoginFirst}>Checkout</Button>
      )}
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label value="Your Full Name" />
              </div>
              <TextInput
                autoComplete="off"
                value={orderDetails.fullName}
                onChange={handleChange}
                required
                name="fullName"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Enter Full Address" />
              </div>
              <TextInput
                type="text"
                value={orderDetails.address}
                required
                autoComplete="off"
                onChange={handleChange}
                name="address"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label value="Your Pincode" />
              </div>
              <TextInput
                autoComplete="off"
                value={orderDetails.pincode}
                onChange={handleChange}
                required
                name="pincode"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label value="Your Mobile Number" />
              </div>
              <TextInput
                autoComplete="off"
                value={orderDetails.mobile}
                onChange={handleChange}
                required
                name="mobile"
              />
            </div>
            <div className="w-full">
              <Button className="w-full" onClick={handleOrder}>
                Order Now
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalSection;
