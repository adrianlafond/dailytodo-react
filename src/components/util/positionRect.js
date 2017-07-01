
export default function positionRect(rect) {
  return {
    left:   `${rect.x}px`,
    top:    `${rect.y}px`,
    width:  `${rect.width}px`,
    height: `${rect.height}px`,
  };
}
