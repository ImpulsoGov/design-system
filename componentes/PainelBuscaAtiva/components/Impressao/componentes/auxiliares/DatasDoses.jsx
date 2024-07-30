export const DatasDoses = ({value})=> {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      fontSize: "8px",
      fontWeight: "500",
      lineHeight: "10.5px",
    }}>
      {value.map((item) => (
        <span>{item}</span>
      ))}
    </div>
  )
}
