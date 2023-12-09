import PDFViewerFrame from "@/components/PDFViewerFrame";

export default function page() {
  return (
    <div className="wrapper">
        <PDFViewerFrame src='/magistral.pdf' />
    </div>
  )
}
