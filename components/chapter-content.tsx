"use client"

import { ScrollArea } from "@/components/ui/scroll-area"

// Define the chapter content structure
type ChapterContent = {
  number: number
  title: string
  subtitle: string
  verses: {
    number: string
    sanskrit: string
    transliteration: string
    translation: string
    explanation: string
  }[]
  summary: string
}

const chapters = [
  { title: "Arjuna Vishada Yoga", subtitle: "The Yoga of Arjuna's Grief" },
  { title: "Sankhya Yoga", subtitle: "The Yoga of Knowledge" },
  { title: "Karma Yoga", subtitle: "The Yoga of Action" },
  { title: "Jnana Yoga", subtitle: "The Yoga of Knowledge" },
  { title: "Karma Sanyasa Yoga", subtitle: "The Yoga of Renunciation" },
  { title: "Dhyana Yoga", subtitle: "The Yoga of Meditation" },
  { title: "Jnana Vijnana Yoga", subtitle: "The Yoga of Wisdom" },
  { title: "Akshara Brahma Yoga", subtitle: "The Yoga of the Imperishable Brahman" },
  { title: "Raja Vidya Raja Guhya Yoga", subtitle: "The Yoga of the King of Knowledge" },
  { title: "Vibhuti Yoga", subtitle: "The Yoga of Divine Glories" },
  { title: "Vishvarupa Darshana Yoga", subtitle: "The Yoga of the Vision of the Cosmic Form" },
  { title: "Bhakti Yoga", subtitle: "The Yoga of Devotion" },
  { title: "Kshetra Kshetrajna Vibhaga Yoga", subtitle: "The Yoga of Distinguishing the Field and the Knower" },
  { title: "Gunatraya Vibhaga Yoga", subtitle: "The Yoga of the Three Gunas" },
  { title: "Purushottama Yoga", subtitle: "The Yoga of the Supreme Person" },
  { title: "Daivasura Sampad Vibhaga Yoga", subtitle: "The Yoga of Divine and Demonic Qualities" },
  { title: "Shraddha Traya Vibhaga Yoga", subtitle: "The Yoga of the Three Kinds of Faith" },
  { title: "Moksha Sanyasa Yoga", subtitle: "The Yoga of Liberation" },
]

// Sample content for a few key chapters
const chapterContents: Record<number, ChapterContent> = {
  1: {
    number: 1,
    title: "Arjuna Vishada Yoga",
    subtitle: "The Yoga of Arjuna's Grief",
    summary:
      "The first chapter sets the scene on the battlefield of Kurukshetra. Arjuna, seeing his relatives, teachers and friends on the opposing side, is overcome with grief and moral dilemma. He expresses his concerns about the consequences of the war to Krishna.",
    verses: [
      {
        number: "1.1",
        sanskrit: "धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||",
        transliteration:
          "dhṛtarāṣṭra uvāca | dharmakṣetre kurukṣetre samavetā yuyutsavaḥ | māmakāḥ pāṇḍavāścaiva kimakurvata sañjaya ||",
        translation:
          "Dhritarashtra said: O Sanjaya, what did my sons and the sons of Pandu do when they assembled on the holy field of Kurukshetra, eager for battle?",
        explanation:
          "The Bhagavad Gita begins with King Dhritarashtra asking his secretary Sanjaya about the battle between his sons (the Kauravas) and their cousins (the Pandavas) on the sacred field of Kurukshetra, which is also known as Dharmakshetra, the field of dharma or righteousness.",
      },
      {
        number: "1.21-22",
        sanskrit:
          "अर्जुन उवाच | सेनयोरुभयोर्मध्ये रथं स्थापय मेऽच्युत || यावदेतान्निरीक्षेऽहं योद्धुकामानवस्थितान् | कैर्मया सह योद्धव्यमस्मिन् रणसमुद्यमे ||",
        transliteration:
          "arjuna uvāca | senayor ubhayor madhye rathaṃ sthāpaya me 'cyuta || yāvad etān nirīkṣe 'haṃ yoddhu-kāmān avasthitān | kair mayā saha योद्धव्यमस्मिन् रणसमुद्यमे ||",
        translation:
          "Arjuna said: O infallible one, please draw my chariot between the two armies so that I may observe those who stand here eager for battle and with whom I must engage in this act of war.",
        explanation:
          "Arjuna asks Krishna, who is serving as his charioteer, to position his chariot between the two armies so he can see who he will be fighting against. This request sets the stage for Arjuna's crisis of conscience when he recognizes his relatives and teachers in the opposing army.",
      },
      {
        number: "1.47",
        sanskrit: "सञ्जय उवाच | एवमुक्त्वार्जुनः संख्ये रथोपस्थ उपाविशत् | विसृज्य सशरं चापं शोकसंविग्नमानसः ||",
        transliteration:
          "sañjaya uvāca | evam uktvārjunaḥ saṅkhye rathopastha upāviśat | visṛjya saśaraṃ cāpaṃ śoka-saṃvigna-mānasaḥ ||",
        translation:
          "Sanjaya said: Having spoken thus on the battlefield, Arjuna cast aside his bow and arrows and sat down on the chariot, his mind overwhelmed with grief.",
        explanation:
          "This verse marks the end of the first chapter, showing Arjuna completely overcome with grief and unwilling to fight. His dropping of his weapons symbolizes his refusal to participate in the battle, setting the stage for Krishna's teachings in the following chapters.",
      },
    ],
  },
  2: {
    number: 2,
    title: "Sankhya Yoga",
    subtitle: "The Yoga of Knowledge",
    summary:
      "In this pivotal chapter, Krishna begins his teachings by explaining the immortality of the soul, the temporary nature of the body, and the concept of duty (dharma). He introduces key philosophical concepts that form the foundation of the Gita's wisdom.",
    verses: [
      {
        number: "2.11",
        sanskrit: "श्रीभगवानुवाच | अशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे | गतासूनगतासूंश्च नानुशोचन्ति पण्डिताः ||",
        transliteration:
          "śrī bhagavān uvāca | aśocyān anvaśocas tvaṃ prajñā-vādāṃś ca bhāṣase | gatāsūn agatāsūṃś ca nānuśocanti paṇḍitāḥ ||",
        translation:
          "The Blessed Lord said: While speaking learned words, you are mourning for what is not worthy of grief. Those who are wise lament neither for the living nor for the dead.",
        explanation:
          "Krishna begins his teachings by pointing out that Arjuna's grief is misplaced. The truly wise understand the eternal nature of the soul and do not mourn for the physical body, which is temporary. This verse introduces the fundamental concept of the immortality of the soul.",
      },
      {
        number: "2.20",
        sanskrit: "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः | अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे ||",
        transliteration:
          "na jāyate mriyate vā kadācin nāyaṃ bhūtvā bhavitā vā na bhūyaḥ | ajo nityaḥ śāśvato 'yaṃ purāṇo na hanyate hanyamāne śarīre ||",
        translation:
          "The soul is never born nor does it die at any time. It does not come into being, or cease to exist. It is unborn, eternal, ever-existing, and primeval. The soul is not slain when the body is slain.",
        explanation:
          "This is one of the most famous verses of the Gita, clearly stating the eternal nature of the soul (Atman). Krishna explains that the soul never dies when the body dies, emphasizing the distinction between the temporary physical body and the eternal soul.",
      },
      {
        number: "2.47",
        sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन | मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||",
        transliteration:
          "karmaṇy evādhikāras te mā phaleṣu kadācana | mā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi ||",
        translation:
          "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, and never be attached to inaction.",
        explanation:
          "This verse introduces the concept of Karma Yoga - performing one's duties without attachment to the results. Krishna advises Arjuna to focus on his actions (dharma) without being concerned about the outcome, while also avoiding inaction. This teaching forms the core principle of selfless action.",
      },
    ],
  },
  12: {
    number: 12,
    title: "Bhakti Yoga",
    subtitle: "The Yoga of Devotion",
    summary:
      "This chapter focuses on the path of devotion (Bhakti Yoga). Krishna explains that devotion to God is the most direct and accessible path to spiritual realization. He describes the qualities of a true devotee and how devotional service leads to the highest spiritual attainment.",
    verses: [
      {
        number: "12.8",
        sanskrit: "मय्येव मन आधत्स्व मयि बुद्धिं निवेशय | निवसिष्यसि मय्येव अत ऊर्ध्वं न संशयः ||",
        transliteration:
          "mayy eva mana ādhatsva mayi buddhiṃ niveśaya | nivasiṣyasi mayy eva ata ūrdhvaṃ na saṃśayaḥ ||",
        translation:
          "Fix your mind on Me alone, place your intellect in Me. You will always live in Me alone, of this there is no doubt.",
        explanation:
          "Krishna instructs Arjuna to focus his mind and intellect completely on the Divine. This single-pointed devotion leads to union with God. Krishna assures that one who practices this devotion will dwell in Him eternally.",
      },
      {
        number: "12.13-14",
        sanskrit:
          "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च | निर्ममो निरहङ्कारः समदुःखसुखः क्षमी || सन्तुष्टः सततं योगी यतात्मा दृढनिश्चयः | मय्यर्पितमनोबुद्धिर्यो मद्भक्तः स मे प्रियः ||",
        transliteration:
          "adveṣṭā sarva-bhūtānāṃ maitraḥ karuṇa eva ca | nirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣamī || santuṣṭaḥ satataṃ yogī yatātmā dṛḍha-niścayaḥ | mayy arpita-mano-buddhir yo mad-bhaktaḥ sa me priyaḥ ||",
        translation:
          "One who is not envious but is a kind friend to all living entities, who does not think himself a proprietor and is free from false ego, who is equal in both happiness and distress, who is forgiving, always satisfied, self-controlled, and engaged in devotional service with determination, his mind and intelligence fixed on Me—such a devotee of Mine is very dear to Me.",
        explanation:
          "These verses describe the qualities of a true devotee who is dear to Krishna. Such a devotee is free from hatred, friendly to all beings, humble, equanimous in pleasure and pain, forgiving, content, self-controlled, and firmly dedicated to God. These qualities represent the spiritual and ethical ideals that devotees should aspire to cultivate.",
      },
    ],
  },
}

// Create content for all 18 chapters
for (let i = 3; i <= 18; i++) {
  if (!chapterContents[i]) {
    chapterContents[i] = {
      number: i,
      title: chapters[i - 1].title,
      subtitle: chapters[i - 1].subtitle,
      summary: `Chapter ${i} explores the philosophical and spiritual teachings related to ${chapters[i - 1].subtitle.toLowerCase()}. Lord Krishna continues to guide Arjuna through the complexities of spiritual wisdom and practical action.`,
      verses: [
        {
          number: `${i}.1`,
          sanskrit: "॥ श्रीमद्भगवद्गीता ॥",
          transliteration: "|| śrīmadbhagavadgītā ||",
          translation: `This is a key verse from Chapter ${i} of the Bhagavad Gita.`,
          explanation: `In this verse, Lord Krishna explains an important aspect of ${chapters[i - 1].subtitle.toLowerCase()} to Arjuna, helping him understand the deeper spiritual truths.`,
        },
        {
          number: `${i}.20`,
          sanskrit: "॥ श्रीमद्भगवद्गीता ॥",
          transliteration: "|| śrīmadbhagavadgītā ||",
          translation: `Another significant teaching from Chapter ${i}.`,
          explanation: `Krishna elaborates on the nature of reality and the path to spiritual realization through ${chapters[i - 1].title}.`,
        },
      ],
    }
  }
}

interface ChapterContentProps {
  chapterNumber: number
}

export function ChapterContent({ chapterNumber }: ChapterContentProps) {
  const chapter = chapterContents[chapterNumber]

  if (!chapter) {
    return (
      <div className="p-6 text-center">
        <p>Chapter content is being prepared. Please check back later.</p>
      </div>
    )
  }

  return (
    <ScrollArea className="h-full w-full">
      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-amber-300">
            Chapter {chapter.number}: {chapter.title}
          </h1>
          <h2 className="text-xl italic text-amber-400">{chapter.subtitle}</h2>
        </div>

        <div className="bg-amber-900/30 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-amber-300 mb-2">Summary</h3>
          <p className="text-amber-100">{chapter.summary}</p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-amber-300">Key Verses</h3>

          {chapter.verses.map((verse) => (
            <div key={verse.number} className="border border-amber-800 rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-amber-300">Verse {verse.number}</h4>
                <span className="text-xs bg-amber-800/50 text-amber-200 px-2 py-1 rounded-full">Shloka</span>
              </div>

              <div className="space-y-2">
                <p className="text-amber-100 font-medium">{verse.sanskrit}</p>
                <p className="text-amber-400 italic text-sm">{verse.transliteration}</p>
                <div className="pt-2 border-t border-amber-100 border-amber-800">
                  <p className="text-amber-100">{verse.translation}</p>
                </div>
                <div className="pt-2 border-t border-amber-100 border-amber-800">
                  <p className="text-sm text-amber-400">{verse.explanation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  )
}

