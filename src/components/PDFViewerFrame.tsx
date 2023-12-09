type Props = {
  src: string
}

const PDFViewerFrame = (props: Props) => {
  return (
    <div className="wrapper">
      <iframe 
        src={props.src}
        className="pdf__viewer"
      />
    </div>
  )
}

export default PDFViewerFrame