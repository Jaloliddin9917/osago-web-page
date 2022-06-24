import React, { Fragment, useState, useEffect } from "react";
import Card from "../../components/Card";
import "./block-1.style.scss";
import axios from "axios";

import Loader from "react-loader-spinner/index";
import {
  // useQueryData,
  useAddData,
} from "../../hooks/useQueryData";

import Pagination from "@mui/material/Pagination";
import { Modal, Button, Text, Loading } from "@nextui-org/react";
import FormInput from "./form-input/form-input";
import { useQueryClient, useQuery } from "react-query";
import { Link } from "react-router-dom";

async function fetchProjects(page = 0) {
  const { data } = await axios.get(
    `http://localhost:4001/airlines?_limit=9&_page=` + page
  );
  return data;
}

const Block1 = () => {
  const queryClient = useQueryClient();
  // const history = useHistory();
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState(0);

  const handler = () => setVisible(true);

  const { isLoading, isError, error, data } = useQuery(
    ["items", page],
    () => fetchProjects(page),
    { keepPreviousData: true, staleTime: 5000 }
  );

  useEffect(() => {
    if (data?.hasMore) {
      queryClient.prefetchQuery(["items", page + 1], () =>
        fetchProjects(page + 1)
      );
    }
  }, [data, page, queryClient]);

  const postData = useAddData();
  const onFormSubmit = (data) => {
    postData.mutate(data, {
      onSuccess: (data) => {
        closeHandler();
      },
    });
  };
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  if (postData.isLoading && isLoading)
    return (
      <Loader
        className="loader"
        type="Circles"
        color="black"
        width={100}
        height={600}
      />
    );

  if (isError) return <h2>{error.message}</h2>;

  return (
    <Fragment>
      <div className="block-container">
        <div style={{ display: "flex" }}>
          <div className="block-title">Блог</div>
          <div className="add-block-link">
            <Button auto shadow onClick={handler}>
              {isLoading ? (
                <Loading color="currentColor" size="sm" />
              ) : (
                <span style={{ color: "white" }}>Add Block</span>
              )}
            </Button>
            <Link to={"/block-table"}>
              <img
                src="https://img.icons8.com/parakeet/48/undefined/experimental-list-parakeet.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="block-card">
          {data?.map((item) => (
            <Card
              id={item.id}
              key={item.id}
              title={item.name}
              image={item.logo}
            />
          ))}
        </div>
        <div className="block-pagination">
          <Pagination
            count={10}
            color="secondary"
            variant="outlined"
            onChange={(e, value) => setPage(value)}
          />
        </div>
        <div className="modal">
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
                <FormInput
                  onFormSubmit={onFormSubmit}
                  isLoading={postData.isLoading}
                />
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Block1;
