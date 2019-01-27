import React from 'react'
import { Link } from "gatsby"

export const BreadcrumbsPills = ({ pill, link }) => (
  <li style={{
    marginRight: 5,
    display: 'inline-block',
    lineHeight: 1,
    verticalAlign: 'baseline',
    backgroundColor: 'white',
    padding: '.3833em .633em',
    textTransform: 'none',
    fontWeight: 500,
    color: 'white',
    border: '1px solid snow',
    boxShadow: '1px 2px 1px #f3f3f3',
    borderRadius: '.28571429rem', }}>
    <Link to={link}>
      {pill}
    </Link>
  </li >
)

export default BreadcrumbsPills