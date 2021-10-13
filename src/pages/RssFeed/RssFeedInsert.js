import React, { Component } from "react";

import { Button, Form, Input } from "antd";

import { postRequest } from "../../helper/Api";
import { RSS_FEED_TABLE_ROUTE } from "../../helper/constants";
import { getValueFromEvent } from "../../helper/common";
import ButtonGroup from "antd/lib/button/button-group";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 9 },
  },
};

class RssFeedInsert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  onChange = (key, value, event) => {
    const newValue = getValueFromEvent(value, event);
    this.setState({
      data: { ...this.state.data, [key]: newValue },
    });
  };

  onFinish = async (payload) => {
    const response = await postRequest("/rss-feed", payload);
    if (response.error) {
      window.alert("Something went wrong");
    } else {
      window.location.href = RSS_FEED_TABLE_ROUTE;
    }
  };

  goBack = () => {
    window.location.href = RSS_FEED_TABLE_ROUTE;
  };

  render() {
    return (
      <div className="wrapper">
        <h1 className="title">Add Rss Feed Url</h1>
        <Form {...formItemLayout} onFinish={this.onFinish}>
          <Form.Item name="name" label="Name">
            <Input
              placeholder="Name"
              onChange={this.onChange.bind(null, "name")}
              required
            />
          </Form.Item>
          <Form.Item name="url" label="Url">
            <Input
              placeholder="Url"
              onChange={this.onChange.bind(null, "url")}
              required
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              xl: { span: 12, offset: 5 },
            }}
          >
            <ButtonGroup>
              <Button
                className="cancel-button"
                type="danger"
                size="large"
                onClick={this.goBack}
              >
                Cancel
              </Button>

              <Button type="primary" htmlType="submit" size="large">
                Add Rss Feed Url
              </Button>
            </ButtonGroup>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default RssFeedInsert;
