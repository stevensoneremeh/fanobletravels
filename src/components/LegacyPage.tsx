import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LegacyContent from '@/components/LegacyContent'
import type {LegacyPageKey} from '@/lib/legacy-content'

export default function LegacyPage({source}:{source:LegacyPageKey}) {
  return <>
    <Header />
    <main><LegacyContent source={source} mode="complete" /></main>
    <Footer />
  </>
}
