import { Popconfirm } from "antd";

// To return the columns for the rss feed list table
export const getColumns = ({ onDeleteClick, onViewClick }) => {
  return [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => b["name"].localeCompare(a["name"]),
    },
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
    },
    {
      title: "Action",
      key: "action",
      render: (props) => (
        <span>
          <div
            className="update-button"
            onClick={onViewClick.bind(null, props)}
          >
            View List
          </div>
          <Popconfirm
            title={"Are you sure you want to delete the url?"}
            onConfirm={onDeleteClick.bind(null, props)}
            okText="Yes"
            cancelText="No"
          >
            <div className="delete-button">Delete</div>
          </Popconfirm>
        </span>
      ),
      width: "10%",
    },
  ];
};

export const getValueFromEvent = (value, event) => {
  if (event) {
    return value;
  } else {
    if (value && value.target) {
      return value.target.value;
    } else {
      return value;
    }
  }
};
