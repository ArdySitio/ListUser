import React, { useState } from "react";
import moment from "moment";
import listNation from "../nationality/nation";
import { Table, Image, Select, Popover, Button } from "antd";

export default function TableUser({ data }) {
  const [value, setValue] = useState("");
  const [label, setLabel] = useState("");

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  const handleSelect = (event) => {
    // console.log(event, "action");
    setValue(event.currentTarget);
    setLabel(event.currentTarget);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => (
        <>
          {name.title} {name.first} {name.last}
        </>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "City",
      dataIndex: "location",
      key: "location",
      render: (location) => {
        const content = (
          <div>
            <p>
              {location.street.number}, {location.street.name}
            </p>
            <p>
              {location.city}, {location.state}, {location.country},{" "}
              {location.postcode}
            </p>
            <p>{location.timezone.description}</p>
          </div>
        );
        return (
          <>
            <Popover content={content} title="Address">
              <Button type="text">{location.city}</Button>
            </Popover>
          </>
        );
      },
    },
    {
      title: "Picture",
      dataIndex: "picture",
      key: "picture",
      render: (picture) => {
        return (
          <>
            <Image src={picture.medium} />
          </>
        );
      },
    },
    {
      title: "Date of Birth",
      dataIndex: ["dob", "date"],
      key: ["dob", "date"],
      render: (date) => {
        return <>{moment(date).format("DD/MM/YYY HH:mm:ss")}</>;
      },
    },
    {
      title: "Age",
      dataIndex: ["dob", "date"],
      key: ["dob", "date"],
      render: (date) => {
        return <>{currentYear - moment(date).format("YYYY")}</>;
      },
    },
    {
      title: "Nationality",
      dataIndex: "nat",
      key: "nat",
      render: (nation) => {
        return (
          <Select defaultValue={nation} onChange={handleSelect}>
            {listNation.map((item, index) => {
              return (
                <Select.Option value={item.value} key={index}>
                  {item.label}
                </Select.Option>
              );
            })}
          </Select>
        );
      },
    },
  ];

  return (
    <>
      <Table pagination={false} dataSource={data} columns={columns} />
    </>
  );
}
