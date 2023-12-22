import { Button } from 'antd-mobile'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Outlet />
      Layout
      <Button color="primary">測試全局</Button>
      <div className="puple">
        <Button color="primary">測試局部</Button>
      </div>
    </div>
  )
}

export default Layout