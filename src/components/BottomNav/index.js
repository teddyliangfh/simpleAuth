import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.less";

const menu = [
  {
    key: "home",
    title: "HomePage",
    link: "/",
    icon: "shouye",
  },
  {
    key: "cart",
    title: "CartPage",
    link: "/cart",
    icon: "fenlei",
  },
  {
    key: "olist",
    title: "OrderList",
    link: "/olist",
    icon: "icon-",
  },
  {
    key: "user",
    title: "UserInfo",
    link: "/user",
    icon: "wode",
  },
];

export default class BottomNav extends Component {
  componentWillUnmount() {
    console.log("BottomNav componentWillUnmount"); //sy-log
  }
  render() {
    return (
      <ul className="bottomNav">
        {menu.map((item) => (
          <MenuItem key={item.key} {...item} />
        ))}
      </ul>
    );
  }
}

function MenuItem(props) {
  return (
    <li className="menuItem">
      <span className={"iconfont icon-" + props.icon}></span>
      <Link to={props.link}>{props.title}</Link>
    </li>
  );
}
