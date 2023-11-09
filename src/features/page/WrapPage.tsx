'use client'

import React, { FC, ReactNode } from 'react'
import {MyThemeWrap} from "@/features/page/style";

interface IProps {
    children: ReactNode
}

export const WrapPage: FC<IProps> = ({ children }) => {
    return  <MyThemeWrap>{children}</MyThemeWrap>
}
