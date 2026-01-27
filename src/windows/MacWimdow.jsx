import React from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"
import "./global.scss"

const MacWindow = ({ children, width = "52vw", height = "60vh", windowname, setWindowsState }) => {
  return (
    <div className="mac-window-container">
      <Rnd
        default={{
          width: width,
          height: height,
          x: 50,
          y: 50
        }}
        // minWidth={300}
        // minHeight={400}
        // bounds="parent"
        enableResizing={{
          top: false,
          right: true,
          bottom: true,
          left: false,
          topRight: false,
          bottomRight: true,
          bottomLeft: false,
          topLeft: false
        }}
        resizeHandleClasses={{
          right: 'resize-handle-right',
          bottom: 'resize-handle-bottom',
          bottomRight: 'resize-handle-bottom-right'
        }}
        resizeHandleStyles={{
          right: { width: '10px', right: '-5px' },
          bottom: { height: '10px', bottom: '-5px' },
          bottomRight: {
            width: '20px',
            height: '20px',
            right: '-10px',
            bottom: '-10px',
            cursor: 'se-resize'
          }
        }}
        style={{
          position: 'absolute',
          zIndex: 1000,
        }}
      >
        <div className="window">
          <div className="nav">
            <div className="dots">
              <div
                className="dot red"
                onClick={() => {
                  setWindowsState(state => ({ ...state, [windowname]: false }))
                }}
              ></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="title"><p>dhruvalwindow -zsh</p></div>
          </div>
          <div className="main-content">
            {children}
          </div>
        </div>
      </Rnd>
    </div>
  )
}

export default MacWindow