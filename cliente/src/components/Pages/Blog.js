import React, { Component } from "react";
import HeaderHome from "./../Layout/HeaderHome"

class Blog extends Component {
  render() {
    return (
      <div>
        <HeaderHome subtitle="~Blog~" />
        <div className="header-login">Blog</div>
        <section className="section-home"></section>

      </div>
    )
  }
}

export default Blog;
