import Image from 'next/image'
import PDFViewerFrame from '@/components/PDFViewerFrame'

export default function Home() {
  return (
    <main>
      <PDFViewerFrame src='/reajuste.pdf' />
    </main>
  )
}
