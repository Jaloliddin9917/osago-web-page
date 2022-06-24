import { Table, Row, Col, Tooltip, User, Text, Modal } from "@nextui-org/react";
import { StyledBadge } from "./StyledBadge";
import { IconButton } from "./IconButton";
import { EyeIcon } from "./EyeIcon";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { useHistory } from "react-router-dom";
import { useQueryData, useQueryTableDelete, useQueryDataById } from "../../../hooks/useQueryData";
import Loader from "react-loader-spinner/index";
import FormInput from "../form-input/form-input";
import { Fragment, useEffect, useState } from "react";

const BlockTableVersion = () => {
  const [pages, setPages] = useState(1);
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const history = useHistory();
  const [id, setId] = useState()
  const columns = [
    { name: "NAME", uid: "name" },
    { name: "Country", uid: "country" },
    { name: "Established", uid: "established" },
    { name: "ACTIONS", uid: "actions" },
  ];

  const closeHandler = () => {
    setVisible(false);
  };
  


  const { isLoading, isError, error, data } = useQueryData(pages);
  const deleteData = useQueryTableDelete();
  const eachData = useQueryDataById(id);

  console.log(id);
  console.log(eachData);
  console.log(pages);

  useEffect(() => {
    setPages(pages)
  }, [pages]);


  const onHandleDelete = (id) => {
    if (window.confirm("You want to delete ?")) {
      deleteData.mutate(id, {
        onSuccess: () => {
          history.push("/block-table");
        },
      });
    }
  };

  if (isLoading)
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

  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User squared src={user.logo} name={cellValue} css={{ p: 0 }}>
            {user.website}
          </User>
        );
      case "country":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                {/* {user.slogan} */}
              </Text>
            </Row>
          </Col>
        );
      case "established":
        return <StyledBadge type={user.status}>{cellValue}</StyledBadge>;

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details">
                <IconButton onClick={() => console.log("View user", user.id)}>
                  <EyeIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip onClick={() => setId(user.id)} content="Edit user">
                <IconButton onClick={handler}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => onHandleDelete(user.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    <Fragment>
      <Table
        aria-label="Example table with custom cells"
        css={{
          height: "auto",
          maxWidth: "1210px",
          margin: "50px auto",
          marginBottom: "100px",
        }}
        selectionMode="none"
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={data?.data}>
          {(item) => (
            <Table.Row>
              {(columnKey) => (
                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
        <Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={9}
          total={5}
          onPageChange={(page) => setPages(page)}
        />
      </Table>
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
          <FormInput defaultValues={eachData?.data?.data} isLoading={isLoading} />
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default BlockTableVersion;
