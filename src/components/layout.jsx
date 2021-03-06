/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Navbar from "./Navbar"
import "./layout.css"
import { KeyboardStyles } from "./Keyboard/KeyboardStyles"
import { ToggleMacOrWindowsLinux } from "../components/ToggleMacOrWindowsLinux"
import styled from "styled-components/macro"
import { COLORS, Z_INDICES } from "../utils/constants"
import { useStore } from "../utils/store"

const LayoutStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 1.45rem;
  main {
    flex-grow: 1;
  }
  footer {
    color: hsla(0, 0%, 40%);
    padding: 3rem 2rem 1rem;
  }
  a {
    text-decoration: none;
    position: relative;
    color: ${COLORS.BLUE_LINK};
    &:after {
      transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      content: "";
      position: absolute;
      bottom: -2px;
      height: 2px;
      left: 50%;
      width: 0%;
      background: ${COLORS.BLUE_LINK};
    }
    &:hover {
      &:after {
        left: 0%;
        width: 100%;
      }
    }
  }
`
const Layout = ({ children }) => {
  return (
    <KeyboardStyles>
      <Navbar />
      <LayoutStyles>
        <ToggleMacOrWindowsLinux />

        <main>{children}</main>
        <Backdrop />
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </LayoutStyles>
    </KeyboardStyles>
  )
}

export default Layout

function Backdrop() {
  const isGifModalOpen = useStore(s => s.isGifModalOpen)
  const isGifModalBigOrAnimating = useStore(s => s.isGifModalBigOrAnimating)

  return (
    <BackdropStyles
      onClick={e => {
        e.preventDefault()
        e.stopPropagation()
      }}
      {...{ isGifModalOpen, isGifModalBigOrAnimating }}
    />
  )
}
const BackdropStyles = styled.div`
  pointer-events: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${p => (p.isGifModalBigOrAnimating ? Z_INDICES[5] : 0)};
  opacity: ${p => (p.isGifModalOpen ? 0.4 : 0)};
  transition: opacity 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
  background: black;
`
