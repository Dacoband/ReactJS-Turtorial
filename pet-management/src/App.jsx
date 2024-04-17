import { Button, Form, Input, Modal, Space, Table } from "antd";
import { useForm } from "antd/es/form/Form";
import { useCallback, useEffect, useState } from "react";

function PetManagement() {
  const [dataSource, setDataSource] = useState(
    JSON.parse(localStorage.getItem("pets")) || []
  );
  const [visible, setVisible] = useState(false);
  const [deleteConfirmationVisible, setDeleteConfirmationVisible] =
    useState(false);
  const [petToDelete, setPetToDelete] = useState(null);
  const [form] = useForm();

  useEffect(() => {
    localStorage.setItem("pets", JSON.stringify(dataSource));
  }, [dataSource]);

  const handleOpenModal = () => {
    setVisible(true);
  };

  const handleHideModal = () => {
    setVisible(false);
  };

  const handleOK = () => {
    form.submit();
  };

  const getNextId = useCallback(() => {
    return dataSource.length === 0
      ? 1
      : dataSource[dataSource.length - 1].id + 1;
  }, [dataSource]);

  const handleSubmit = useCallback(
    (values) => {
      const newPet = { ...values, id: getNextId() };
      setDataSource([...dataSource, newPet]);
      form.resetFields();
      handleHideModal();
    },
    [dataSource, form, getNextId, handleHideModal]
  );

  const handleDelete = useCallback(
    (id) => {
      const pet = dataSource.find((pet) => pet.id === id);
      setPetToDelete(pet);
      setDeleteConfirmationVisible(true);
    },
    [dataSource]
  );

  const handleConfirmDelete = () => {
    const updatedDataSource = dataSource.filter(
      (pet) => pet.id !== petToDelete.id
    );
    setDataSource(updatedDataSource);
    setDeleteConfirmationVisible(false);
  };

  const handleCancelDelete = () => {
    setDeleteConfirmationVisible(false);
  };

  const handleSearch = useCallback(
    (value) => {
      const filteredData = dataSource.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setDataSource(filteredData);
    },
    [dataSource]
  );

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button type="danger" onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Space style={{ display: "flex", justifyContent: "center" }}>
        <Button type="primary" onClick={handleOpenModal}>
          Create Pet
        </Button>
        <Input.Search
          placeholder="Search Pets"
          onSearch={handleSearch}
          allowClear
          enterButton
          size="large"
        />
      </Space>
      <Table columns={columns} dataSource={dataSource} />
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOK}
        onCancel={handleHideModal}
      >
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label="Pet Name"
            rules={[{ required: true, message: "Please enter the pet's name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[
              { required: true, message: "Please enter the pet's price" },
            ]}
          >
            <Input type="number" min={0} />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Delete Confirmation"
        visible={deleteConfirmationVisible}
        onOk={handleConfirmDelete}
        onCancel={handleCancelDelete}
      >
        <p>
          Are you sure you want to delete the pet:{" "}
          {petToDelete && petToDelete.name}?
        </p>
      </Modal>
    </div>
  );
}

export default PetManagement;
