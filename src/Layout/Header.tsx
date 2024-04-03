import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">Home</Link>
        <Link href="/jobs">Jobs</Link>
        <Link href="/about">About</Link>
      </div>
    </header>
  );
}

// export default function Header() {
//   const items: MenuProps["items"] = [
//     {
//       label: (
//         <span className="center" style={{ fontSize: "30px", height: "100%" }}>
//           Jobs
//         </span>
//       ),
//       key: "logo",
//     },
//     {
//       label: "UserName",
//       key: "user",
//       style: { marginLeft: "auto" },
//       icon: <UserOutlined />,
//     },
//     {
//       label: "Выйти",
//       key: "logout",
//       icon: <PoweroffOutlined />,
//       // danger: true,
//       className: "logout-btn",
//       //   disabled: isLoggingOut,
//       onClick() {
//         window.location.reload();
//         // setIsLoggingOut(true);
//         // LOGOUT();
//       },
//     },
//   ];

//   return (
//     <Menu
//       //   selectedKeys={[pathname]}
//       selectable={false}
//       theme={"dark"}
//       //   style={{ background: theme === 'dark' ? '#111' : '' }}
//       //   style={{ background: theme === 'dark' ? '#111' : '' }}
//       mode="horizontal"
//       items={items}
//       className="HEADER"
//     />
//   );
// }
