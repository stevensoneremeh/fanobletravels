import { getLegacySections, type LegacyContentMode, type LegacyPageKey } from '@/lib/legacy-content'

export default function LegacyContent({source, mode='main'}:{source:LegacyPageKey;mode?:LegacyContentMode}) {
  const sections = getLegacySections(source, mode)
  return <div className={`legacy-native legacy-native-${mode}`}>
    {sections.map((html, index) => <div className="legacy-native-section" key={`${source}-${index}`} dangerouslySetInnerHTML={{__html: html}} />)}
  </div>
}
