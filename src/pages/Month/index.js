import { NavBar, DatePicker } from "antd-mobile"
import './index.scss'
import { useState } from "react"
import classNames from "classnames"

const Month = () => {
  const [dateVisible,setDateVisible] =useState(false)
  const onConfirm = () => {
    setDateVisible(false)
  }
  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          <div className="date" onClick={() => setDateVisible(true)}>
            <span className="text">
              2023 | 3月帳單
            </span>
            <span className={classNames('arrow', dateVisible && 'expand')}></span>
          </div>
          <div className="twoLineOverview">
            <div className="item">
              <span className="money">{100}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">結餘</span>
            </div>
          </div>
          <DatePicker
            className="kaDate"
            title="記帳日期"
            precision="month"
            visible={dateVisible}
            onCancel={() => setDateVisible(false)}
            onConfirm={onConfirm}
            onClose={() => setDateVisible(false)}
            max={new Date()}
          />
        </div>
      </div>
    </div>
  )
}

export default Month