"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[9527],{7015:function(s,a,e){e.r(a);var p=e(2143),Z=e(50250),c=e(59378),v=e(5648),i=e(74775),u=e(5937),g=e(2068),_=e(74399),h=e(63942),O=e(16073),I=e(24628),b=e(19260),f=e(56140),o=e(5388),y=e(49545),M=e(6965),k=e(49706),C=e(95127),E=e(74418),x=e(73024),l=e(28257),d=e(67294),n=e(96923);function m(){var r=(0,l.eL)(),t=r.texts;return(0,n.tZ)(l.dY,null,(0,n.tZ)(d.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("p",null,t[1].value),(0,n.tZ)("p",null,t[2].value,(0,n.tZ)(l.rU,{to:"/components/layout-cn"},t[3].value),t[4].value),(0,n.tZ)("h2",{id:"\u5F00\u53D1\u8005\u6CE8\u610F\u4E8B\u9879"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5F00\u53D1\u8005\u6CE8\u610F\u4E8B\u9879"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u5F00\u53D1\u8005\u6CE8\u610F\u4E8B\u9879"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,t[5].value,(0,n.tZ)("code",null,t[6].value),t[7].value,(0,n.tZ)("a",{href:"https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element"},(0,n.tZ)("code",null,t[8].value),t[9].value,(0,n.tZ)("code",null,t[10].value),t[11].value),t[12].value,(0,n.tZ)("code",null,t[13].value),t[14].value),(0,n.tZ)("li",null,t[15].value,(0,n.tZ)("code",null,t[16].value),t[17].value)),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(o.Z,{items:[{demo:{id:"components-menu-demo-horizontal"},previewerProps:{title:"\u9876\u90E8\u5BFC\u822A",filename:"components/menu/demo/horizontal.tsx",jsx:`import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
];
const App = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default App;
`,description:"<p>\u6C34\u5E73\u7684\u9876\u90E8\u5BFC\u822A\u83DC\u5355\u3002</p>"}},{demo:{id:"components-menu-demo-inline"},previewerProps:{title:"\u5185\u5D4C\u83DC\u5355",filename:"components/menu/demo/inline.tsx",jsx:`import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
];
const App = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default App;
`,description:"<p>\u5782\u76F4\u83DC\u5355\uFF0C\u5B50\u83DC\u5355\u5185\u5D4C\u5728\u83DC\u5355\u533A\u57DF\u3002</p>"}},{demo:{id:"components-menu-demo-inline-collapsed"},previewerProps:{title:"\u7F29\u8D77\u5185\u5D4C\u83DC\u5355",filename:"components/menu/demo/inline-collapsed.tsx",jsx:`import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      style={{
        width: 256,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};
export default App;
`,description:`<p>\u5185\u5D4C\u83DC\u5355\u53EF\u4EE5\u88AB\u7F29\u8D77/\u5C55\u5F00\u3002</p>
<p>\u4F60\u53EF\u4EE5\u5728 <a href="/components/layout/#components-layout-demo-side">Layout</a> \u91CC\u67E5\u770B\u4FA7\u8FB9\u5E03\u5C40\u7ED3\u5408\u7684\u5B8C\u6574\u793A\u4F8B\u3002</p>`}},{demo:{id:"components-menu-demo-sider-current"},previewerProps:{title:"\u53EA\u5C55\u5F00\u5F53\u524D\u7236\u7EA7\u83DC\u5355",filename:"components/menu/demo/sider-current.tsx",jsx:`import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const App = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 256,
      }}
      items={items}
    />
  );
};
export default App;
`,description:"<p>\u70B9\u51FB\u83DC\u5355\uFF0C\u6536\u8D77\u5176\u4ED6\u5C55\u5F00\u7684\u6240\u6709\u83DC\u5355\uFF0C\u4FDD\u6301\u83DC\u5355\u805A\u7126\u7B80\u6D01\u3002</p>"}},{demo:{id:"components-menu-demo-vertical"},previewerProps:{title:"\u5782\u76F4\u83DC\u5355",filename:"components/menu/demo/vertical.tsx",jsx:`import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];
const onClick = (e) => {
  console.log('click', e);
};
const App = () => (
  <Menu
    onClick={onClick}
    style={{
      width: 256,
    }}
    mode="vertical"
    items={items}
  />
);
export default App;
`,description:"<p>\u5B50\u83DC\u5355\u662F\u5F39\u51FA\u7684\u5F62\u5F0F\u3002</p>"}},{demo:{id:"components-menu-demo-theme"},previewerProps:{title:"\u4E3B\u9898",filename:"components/menu/demo/theme.tsx",jsx:`import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];
const App = () => {
  const [theme, setTheme] = useState('dark');
  const [current, setCurrent] = useState('1');
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
      <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        theme={theme}
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </>
  );
};
export default App;
`,description:"<p>\u5185\u5EFA\u4E86\u4E24\u5957\u4E3B\u9898 <code>light</code> \u548C <code>dark</code>\uFF0C\u9ED8\u8BA4 <code>light</code>\u3002</p>"}},{demo:{id:"components-menu-demo-submenu-theme"},previewerProps:{title:"\u5B50\u83DC\u5355\u4E3B\u9898",filename:"components/menu/demo/submenu-theme.tsx",jsx:`import React, { useState } from 'react';
import { MailOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
function getItem(label, key, icon, children, theme) {
  return {
    key,
    icon,
    children,
    label,
    theme,
  };
}
const App = () => {
  const [theme, setTheme] = useState('light');
  const [current, setCurrent] = useState('1');
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  const onClick = (e) => {
    setCurrent(e.key);
  };
  const items = [
    getItem(
      'Navigation One',
      'sub1',
      <MailOutlined />,
      [getItem('Option 1', '1'), getItem('Option 2', '2'), getItem('Option 3', '3')],
      theme,
    ),
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
  ];
  return (
    <>
      <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        openKeys={['sub1']}
        selectedKeys={[current]}
        mode="vertical"
        theme="dark"
        items={items}
      />
    </>
  );
};
export default App;
`,description:"<p>\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>theme</code> \u5C5E\u6027\u6765\u8BBE\u7F6E SubMenu \u7684\u4E3B\u9898\u4ECE\u800C\u8FBE\u5230\u4E0D\u540C\u76EE\u5F55\u6811\u4E0B\u4E0D\u540C\u4E3B\u9898\u8272\u7684\u6548\u679C\u3002\u8BE5\u4F8B\u5B50\u9ED8\u8BA4\u4E3A\u6839\u76EE\u5F55\u6DF1\u8272\uFF0C\u5B50\u76EE\u5F55\u6D45\u8272\u6548\u679C\u3002</p>"}},{demo:{id:"components-menu-demo-switch-mode"},previewerProps:{title:"\u5207\u6362\u83DC\u5355\u7C7B\u578B",filename:"components/menu/demo/switch-mode.tsx",jsx:`import React, { useState } from 'react';
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Navigation One', '1', <MailOutlined />),
  getItem('Navigation Two', '2', <CalendarOutlined />),
  getItem('Navigation Two', 'sub1', <AppstoreOutlined />, [
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
    getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
  ]),
  getItem('Navigation Three', 'sub2', <SettingOutlined />, [
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),
  getItem(
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      Ant Design
    </a>,
    'link',
    <LinkOutlined />,
  ),
];
const App = () => {
  const [mode, setMode] = useState('inline');
  const [theme, setTheme] = useState('light');
  const changeMode = (value) => {
    setMode(value ? 'vertical' : 'inline');
  };
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  return (
    <>
      <Switch onChange={changeMode} /> Change Mode
      <Divider type="vertical" />
      <Switch onChange={changeTheme} /> Change Style
      <br />
      <br />
      <Menu
        style={{
          width: 256,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        theme={theme}
        items={items}
      />
    </>
  );
};
export default App;
`,description:"<p>\u5C55\u793A\u52A8\u6001\u5207\u6362\u6A21\u5F0F\u3002</p>"}},{demo:{id:"components-menu-demo-style-debug"},previewerProps:{debug:!0,title:"Style debug",filename:"components/menu/demo/style-debug.tsx",jsx:`import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Navigation One Long Long Long Long', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Option 11', '11'),
  getItem('Option 12', '12'),
];
const App = () => {
  const [theme, setTheme] = useState('dark');
  const [current, setCurrent] = useState('1');
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
      <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        theme={theme}
        onClick={onClick}
        selectedKeys={[current]}
        mode="inline"
        items={items}
        inlineCollapsed
        // Test only. Remove in future.
        _internalRenderMenuItem={(node) =>
          React.cloneElement(node, {
            style: {
              ...node.props.style,
              textDecoration: 'underline',
            },
          })
        }
        // Test only. Remove in future.
        _internalRenderSubMenuItem={(node) =>
          React.cloneElement(node, {
            style: {
              ...node.props.style,
              background: 'rgba(255,255,255,0.3)',
            },
          })
        }
        // Test only. Remove in future.
        _internalDisableMenuItemTitleTooltip
      />
    </>
  );
};
export default App;
`,description:"<p>buggy!</p>"}},{demo:{id:"components-menu-demo-menu-v4"},previewerProps:{debug:!0,title:"v4 \u7248\u672C Menu",filename:"components/menu/demo/menu-v4.tsx",jsx:`import React, { useState } from 'react';
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Menu, Switch, ConfigProvider } from 'antd';
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Navigation One', '1', <MailOutlined />),
  getItem('Navigation Two', '2', <CalendarOutlined />),
  getItem('Navigation Two', 'sub1', <AppstoreOutlined />, [
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
    getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
  ]),
  getItem('Navigation Three', 'sub2', <SettingOutlined />, [
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),
  getItem(
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      Ant Design
    </a>,
    'link',
    <LinkOutlined />,
  ),
];
const App = () => {
  const [mode, setMode] = useState('inline');
  const changeMode = (value) => {
    setMode(value ? 'vertical' : 'inline');
  };
  return (
    <>
      <Switch onChange={changeMode} /> Change Mode
      <br />
      <br />
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              radiusItem: 0,
              radiusSubMenuItem: 0,
              colorItemTextHover: '#1890ff',
              colorItemTextSelected: '#1890ff',
              colorItemBgSelected: '#e6f7ff',
              colorActiveBarWidth: 3,
              itemMarginInline: 0,
              colorItemBgHover: 'transparent',
            },
          },
        }}
      >
        <Menu
          style={{
            width: 256,
          }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={mode}
          items={items}
        />
      </ConfigProvider>
    </>
  );
};
export default App;
`,description:"<p>V4 \u6837\u5F0F\u7684 Menu \u7EC4\u4EF6\u3002</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"menu"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#menu"},(0,n.tZ)("span",{className:"icon icon-link"})),"Menu"),(0,n.tZ)(u.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[18].value),(0,n.tZ)("th",null,t[19].value),(0,n.tZ)("th",null,t[20].value),(0,n.tZ)("th",null,t[21].value),(0,n.tZ)("th",null,t[22].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[23].value),(0,n.tZ)("td",null,t[24].value),(0,n.tZ)("td",null,t[25].value),(0,n.tZ)("td",null,t[26].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[27].value),(0,n.tZ)("td",null,t[28].value),(0,n.tZ)("td",null,t[29].value),(0,n.tZ)("td",null,t[30].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[31].value),(0,n.tZ)("td",null,t[32].value),(0,n.tZ)("td",null,t[33].value,(0,n.tZ)("code",null,t[34].value)),(0,n.tZ)("td",null,t[35].value),(0,n.tZ)("td",null,t[36].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[37].value),(0,n.tZ)("td",null,t[38].value),(0,n.tZ)("td",null,t[39].value),(0,n.tZ)("td",null,t[40].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[41].value),(0,n.tZ)("td",null,t[42].value),(0,n.tZ)("td",null,t[43].value),(0,n.tZ)("td",null,t[44].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[45].value),(0,n.tZ)("td",null,t[46].value),(0,n.tZ)("td",null,t[47].value),(0,n.tZ)("td",null,t[48].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[49].value),(0,n.tZ)("td",null,t[50].value),(0,n.tZ)("td",null,(0,n.tZ)(l.rU,{to:"#itemtype"},t[51].value)),(0,n.tZ)("td",null,t[52].value),(0,n.tZ)("td",null,t[53].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[54].value),(0,n.tZ)("td",null,t[55].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[56].value),t[57].value,(0,n.tZ)("code",null,t[58].value),t[59].value,(0,n.tZ)("code",null,t[60].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[61].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[62].value),(0,n.tZ)("td",null,t[63].value),(0,n.tZ)("td",null,t[64].value),(0,n.tZ)("td",null,t[65].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[66].value),(0,n.tZ)("td",null,t[67].value),(0,n.tZ)("td",null,t[68].value),(0,n.tZ)("td",null,t[69].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[70].value),(0,n.tZ)("td",null,t[71].value),(0,n.tZ)("td",null,t[72].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[73].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[74].value),(0,n.tZ)("td",null,t[75].value),(0,n.tZ)("td",null,t[76].value),(0,n.tZ)("td",null,t[77].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[78].value),(0,n.tZ)("td",null,t[79].value),(0,n.tZ)("td",null,t[80].value),(0,n.tZ)("td",null,t[81].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[82].value),(0,n.tZ)("td",null,t[83].value),(0,n.tZ)("td",null,t[84].value),(0,n.tZ)("td",null,t[85].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[86].value),(0,n.tZ)("td",null,t[87].value),(0,n.tZ)("td",null,t[88].value),(0,n.tZ)("td",null,t[89].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[90].value),(0,n.tZ)("td",null,t[91].value),(0,n.tZ)("td",null,t[92].value),(0,n.tZ)("td",null,t[93].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[94].value),(0,n.tZ)("td",null,t[95].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[96].value),t[97].value,(0,n.tZ)("code",null,t[98].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[99].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[100].value),(0,n.tZ)("td",null,t[101].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[102].value),t[103].value,(0,n.tZ)("code",null,t[104].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[105].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[106].value),(0,n.tZ)("td",null,t[107].value),(0,n.tZ)("td",null,t[108].value),(0,n.tZ)("td",null,t[109].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[110].value),(0,n.tZ)("td",null,t[111].value),(0,n.tZ)("td",null,t[112].value),(0,n.tZ)("td",null,t[113].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[114].value),(0,n.tZ)("td",null,t[115].value),(0,n.tZ)("td",null,t[116].value),(0,n.tZ)("td",null,t[117].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[118].value),(0,n.tZ)("td",null,t[119].value),(0,n.tZ)("td",null,t[120].value),(0,n.tZ)("td",null,t[121].value),(0,n.tZ)("td",null)))),(0,n.tZ)("blockquote",null,(0,n.tZ)("p",null,t[122].value,(0,n.tZ)("a",{href:"https://github.com/react-component/menu#api"},t[123].value))),(0,n.tZ)("h3",{id:"itemtype"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#itemtype"},(0,n.tZ)("span",{className:"icon icon-link"})),"ItemType"),(0,n.tZ)("blockquote",null,(0,n.tZ)("p",null,t[124].value,(0,n.tZ)(l.rU,{to:"#MenuItemType"},t[125].value),t[126].value,(0,n.tZ)(l.rU,{to:"#SubMenuType"},t[127].value),t[128].value,(0,n.tZ)(l.rU,{to:"#MenuItemGroupType"},t[129].value),t[130].value,(0,n.tZ)(l.rU,{to:"#MenuDividerType"},t[131].value),t[132].value)),(0,n.tZ)("h4",{id:"menuitemtype"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#menuitemtype"},(0,n.tZ)("span",{className:"icon icon-link"})),"MenuItemType"),(0,n.tZ)(u.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[133].value),(0,n.tZ)("th",null,t[134].value),(0,n.tZ)("th",null,t[135].value),(0,n.tZ)("th",null,t[136].value),(0,n.tZ)("th",null,t[137].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[138].value),(0,n.tZ)("td",null,t[139].value),(0,n.tZ)("td",null,t[140].value),(0,n.tZ)("td",null,t[141].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[142].value),(0,n.tZ)("td",null,t[143].value),(0,n.tZ)("td",null,t[144].value),(0,n.tZ)("td",null,t[145].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[146].value),(0,n.tZ)("td",null,t[147].value),(0,n.tZ)("td",null,t[148].value),(0,n.tZ)("td",null,t[149].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[150].value),(0,n.tZ)("td",null,t[151].value),(0,n.tZ)("td",null,t[152].value),(0,n.tZ)("td",null,t[153].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[154].value),(0,n.tZ)("td",null,t[155].value),(0,n.tZ)("td",null,t[156].value),(0,n.tZ)("td",null,t[157].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[158].value),(0,n.tZ)("td",null,t[159].value),(0,n.tZ)("td",null,t[160].value),(0,n.tZ)("td",null,t[161].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h4",{id:"submenutype"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#submenutype"},(0,n.tZ)("span",{className:"icon icon-link"})),"SubMenuType"),(0,n.tZ)(u.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[162].value),(0,n.tZ)("th",null,t[163].value),(0,n.tZ)("th",null,t[164].value),(0,n.tZ)("th",null,t[165].value),(0,n.tZ)("th",null,t[166].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[167].value),(0,n.tZ)("td",null,t[168].value),(0,n.tZ)("td",null,(0,n.tZ)(l.rU,{to:"#itemtype"},t[169].value)),(0,n.tZ)("td",null,t[170].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[171].value),(0,n.tZ)("td",null,t[172].value),(0,n.tZ)("td",null,t[173].value),(0,n.tZ)("td",null,t[174].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[175].value),(0,n.tZ)("td",null,t[176].value),(0,n.tZ)("td",null,t[177].value),(0,n.tZ)("td",null,t[178].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[179].value),(0,n.tZ)("td",null,t[180].value),(0,n.tZ)("td",null,t[181].value),(0,n.tZ)("td",null,t[182].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[183].value),(0,n.tZ)("td",null,t[184].value),(0,n.tZ)("td",null,t[185].value),(0,n.tZ)("td",null,t[186].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[187].value),(0,n.tZ)("td",null,t[188].value,(0,n.tZ)("code",null,t[189].value),t[190].value),(0,n.tZ)("td",null,t[191].value),(0,n.tZ)("td",null,t[192].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[193].value),(0,n.tZ)("td",null,t[194].value,(0,n.tZ)("code",null,t[195].value),t[196].value),(0,n.tZ)("td",null,t[197].value),(0,n.tZ)("td",null,t[198].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[199].value),(0,n.tZ)("td",null,t[200].value),(0,n.tZ)("td",null,t[201].value),(0,n.tZ)("td",null,t[202].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[203].value),(0,n.tZ)("td",null,t[204].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[205].value),t[206].value,(0,n.tZ)("code",null,t[207].value)),(0,n.tZ)("td",null,t[208].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h4",{id:"menuitemgrouptype"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#menuitemgrouptype"},(0,n.tZ)("span",{className:"icon icon-link"})),"MenuItemGroupType"),(0,n.tZ)("p",null,t[209].value,(0,n.tZ)("code",null,t[210].value),t[211].value),(0,n.tZ)(i.Z,{lang:"ts"},t[212].value),(0,n.tZ)(u.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[213].value),(0,n.tZ)("th",null,t[214].value),(0,n.tZ)("th",null,t[215].value),(0,n.tZ)("th",null,t[216].value),(0,n.tZ)("th",null,t[217].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[218].value),(0,n.tZ)("td",null,t[219].value),(0,n.tZ)("td",null,(0,n.tZ)(l.rU,{to:"#menuitemtype"},t[220].value)),(0,n.tZ)("td",null,t[221].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[222].value),(0,n.tZ)("td",null,t[223].value),(0,n.tZ)("td",null,t[224].value),(0,n.tZ)("td",null,t[225].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h4",{id:"menudividertype"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#menudividertype"},(0,n.tZ)("span",{className:"icon icon-link"})),"MenuDividerType"),(0,n.tZ)("p",null,t[226].value,(0,n.tZ)("code",null,t[227].value),t[228].value),(0,n.tZ)(i.Z,{lang:"ts"},t[229].value),(0,n.tZ)(u.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[230].value),(0,n.tZ)("th",null,t[231].value),(0,n.tZ)("th",null,t[232].value),(0,n.tZ)("th",null,t[233].value),(0,n.tZ)("th",null,t[234].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[235].value),(0,n.tZ)("td",null,t[236].value),(0,n.tZ)("td",null,t[237].value),(0,n.tZ)("td",null,t[238].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h2",{id:"faq"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,n.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,n.tZ)("h3",{id:"\u4E3A\u4F55-menu-\u7684\u5B50\u5143\u7D20\u4F1A\u6E32\u67D3\u4E24\u6B21"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4F55-menu-\u7684\u5B50\u5143\u7D20\u4F1A\u6E32\u67D3\u4E24\u6B21"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4E3A\u4F55 Menu \u7684\u5B50\u5143\u7D20\u4F1A\u6E32\u67D3\u4E24\u6B21\uFF1F"),(0,n.tZ)("p",null,t[239].value,(0,n.tZ)("a",{href:"https://github.com/react-component/menu/blob/f4684514096d6b7123339cbe72e7b0f68db0bce2/src/Menu.tsx#L543"},t[240].value),t[241].value),(0,n.tZ)("h3",{id:"\u5728-flex-\u5E03\u5C40\u4E2Dmenu-\u6CA1\u6709\u6309\u7167\u9884\u671F\u54CD\u5E94\u5F0F\u7701\u7565\u83DC\u5355"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5728-flex-\u5E03\u5C40\u4E2Dmenu-\u6CA1\u6709\u6309\u7167\u9884\u671F\u54CD\u5E94\u5F0F\u7701\u7565\u83DC\u5355"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u5728 Flex \u5E03\u5C40\u4E2D\uFF0CMenu \u6CA1\u6709\u6309\u7167\u9884\u671F\u54CD\u5E94\u5F0F\u7701\u7565\u83DC\u5355\uFF1F"),(0,n.tZ)("p",null,t[242].value,(0,n.tZ)("a",{href:"https://codesandbox.io/s/ding-bu-dao-hang-antd-4-21-7-forked-5e3imy?file=/demo.js"},t[243].value),t[244].value),(0,n.tZ)(i.Z,{lang:"jsx"},t[245].value))))}a.default=m}}]);