import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import {App} from "../../App.css"

export const BreadCrumb = () => {
  return (
    <Breadcrumb className='mb-0'>
    
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>

      <Breadcrumb.Item href="#">
        Library
      </Breadcrumb.Item>

      <Breadcrumb.Item active>Data</Breadcrumb.Item>

    </Breadcrumb>
  )
}
