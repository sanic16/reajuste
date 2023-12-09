import PDFViewerFrame from "@/components/PDFViewerFrame";

export default function page() {
  return (
    <div className="wrapper">
        <PDFViewerFrame src='/lab.pdf' />
    </div>
  )
}
