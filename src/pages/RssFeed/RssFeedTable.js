import React, { Component } from "react";

import { Button, Table } from "antd";

import { getColumns } from "../../helper/common";
import { deleteRequest, getRequest } from "../../helper/Api";
import {
  RSS_FEED_CREATE_ROUTE,
  RSS_FEED_LIST_ROUTE,
} from "../../helper/constants";

class RssFeedTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount = async () => {
    // Axios call for getting rss feed response for table when user comes to this page
    const response = await getRequest("/rss-feed");

    // Setting response data in state
    this.setState({
      data: response.data,
    });
  };

  onClick = () => {
    window.location.href = RSS_FEED_CREATE_ROUTE;
  };

  onDeleteClick = async (clickData, event) => {
    const response = await deleteRequest(`/rss-feed/${clickData._id}`);
    if (response.error) {
      window.alert("Something went wrong");
    }
  };

  onViewClick = (clickData) => {
    window.location.href = `${RSS_FEED_LIST_ROUTE}/${clickData._id}`;
  };

  getFinalColumns = () => {
    return getColumns({
      onDeleteClick: this.onDeleteClick,
      onViewClick: this.onViewClick,
    });
  };

  render() {
    // To get column for the table
    const columns = this.getFinalColumns();

    const isLoading = !this.state.data.length;

    return (
      <div className="table-wrapper">
        <Button onClick={this.onClick}>Create</Button>
        <Table
          columns={columns}
          dataSource={this.state.data}
          loading={isLoading}
          bordered
          showSorterTooltip={false}
          pagination={false}
          rowKey="_id"
        />
      </div>
    );
  }
}

export default RssFeedTable;
