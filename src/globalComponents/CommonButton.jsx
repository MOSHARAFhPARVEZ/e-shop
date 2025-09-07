import { Button } from 'antd'
import React from 'react'

const CommonButton = ({ className , onClick , loading = false , disabled = false , children }) => {
  return (
    <Button className={className} onClick={onClick} loading={loading} disabled={disabled || loading} >
        {children}
    </Button>
  )
}

export default CommonButton