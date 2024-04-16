import { Button, Form, Input, Modal, Table } from "antd";
import { useState } from "react";
import { useForm } from "antd/es/form/Form";
//using ant design

function StudentManagement() {
  const [visible, setVisible] = useState(false);

  //tạo ra 1 biến đại diện cho 1 cái Form
  const [formVarialbe] = useForm();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
  ];

  const [dataSource, setDataSource] = useState([]);

  const hanldeOpenModal = () => {
    // Open modal
    setVisible(true);
  };

  const hanldeHideModal = () => {
    // Hide modal
    setVisible(false);
  };

  const hanldeOK = () => {
    // sumbit form
    formVarialbe.submit();
  };

  const handleSubmit = (values) => {
    console.log(values);
    // ...data source: lấy lại mảng cũ
    setDataSource([...dataSource, values]);
    formVarialbe.resetFields(); //biến giá trị ô input thành rỗng
    hanldeHideModal();
  };

  return (
    <div>
      <Button type="primary" onClick={hanldeOpenModal}>
        Add new student
      </Button>
      <Table dataSource={dataSource} columns={columns} />;
      <Modal
        title="Basic Modal"
        open={visible}
        onCancel={hanldeHideModal}
        onOk={hanldeOK}
      >
        {/* set up: khi click OK => submit form  */}
        <Form form={formVarialbe} onFinish={handleSubmit}>
          <Form.Item
            name={"name"} // đây là tên biến
            label={"Student Name"}
            rules={[
              {
                required: true,
                message: "Please enter a student name",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default StudentManagement;

//BTVN: làm lại pet-todo nhưng sử dụng ant design
