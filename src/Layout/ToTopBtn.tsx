"use client";
import { FloatButton } from "antd";

export default function ToTopBtn() {
  return (
    <FloatButton.BackTop style={{ zIndex: 102 }} target={() => document.querySelector("main")!} />
  );
}
