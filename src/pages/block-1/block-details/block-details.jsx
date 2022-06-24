import React from "react";
import "./block-detail.style.scss";

import Loader from "react-loader-spinner/index";
import {
  useQueryDataById,
  useQueryDelete,
  // useQueryUpdate,
} from "../../../hooks/useQueryData";
import { useParams, useHistory } from "react-router-dom";

import { Modal, Button, Text } from "@nextui-org/react";
import FormInput from "../form-input/form-input";

const BlockDetails = () => {
  const history = useHistory();
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const { id } = useParams();
  const { isLoading, error, data, isFetching } = useQueryDataById(id);
  // const putData = useQueryUpdate();
  const deleteData = useQueryDelete(id);

  const onHandleDelete = (id) => {
    if (window.confirm("You want to delete ?")) {
      deleteData.mutate(id, {
        onSuccess: () => {
          history.push("/airlines");
        },
      });
    } 
  };

  // const onFormUpdate = (formData) => {
  //   putData.mutate({ formData });
  //   history.push(`/airlines/${id}`);
  // };

  if (isLoading || isFetching)
    return (
      <Loader
        className="loader"
        type="Circles"
        color="black"
        width={100}
        height={600}
      />
    );

  if (error) return <h2>{error.message}</h2>;

  return (
    <div className="block-detail-container">
      <div className="left">
        <div className="block-detail-logo">
          <img src={data.data.logo} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="block-detail-name">
          Name: <span>{data.data.name}</span>
        </div>
        <div className="block-detail-country">
          Country: <span>{data.data.country}</span>
        </div>
        <div className="block-detail-slogan">
          Slogan: <span>{data.data.slogan}</span>
        </div>
        <div className="block-detail-website">
          Website: <span>{data.data.website}</span>
        </div>
        <div className="block-detail-established">
          Established: <span>{data.data.established}</span>
        </div>
        <div className="bottom-buttons">
          <Button auto shadow onClick={handler}>
            <span style={{ color: "white" }}>Edit Block</span>
          </Button>
          <Button auto flat color="error" onClick={onHandleDelete}>
            <span style={{ color: "black" }}>Delete</span>
          </Button>
        </div>
      </div>
      <div className="bottom">
        <div>
          <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                Welcome to
                <Text b size={18}>
                  NextUI
                </Text>
              </Text>
            </Modal.Header>
            <Modal.Body>
              <FormInput defaultValues={data.data} isLoading={isLoading}/>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default BlockDetails;
