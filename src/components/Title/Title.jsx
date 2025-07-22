function Title({ color, title, lineColor }) {
  const finalLineColor = lineColor || "#ffffff"; // fallback to white

  return (
    <>
      <h1 className='fw-bold text-uppercase mb-4' style={{ color: color }}>
        {title}
      </h1>
      <div className='d-flex align-items-center justify-content-center mb-4'>
        <div
          className='mx-2'
          style={{
            height: "4px",
            width: "90px",
            backgroundColor: finalLineColor,
          }}></div>
        <div className='px-2 fs-4' style={{ color: finalLineColor }}>
          ★
        </div>
        <div
          className='mx-2'
          style={{
            height: "4px",
            width: "90px",
            backgroundColor: finalLineColor,
          }}></div>
      </div>
    </>
  );
}

export default Title;
