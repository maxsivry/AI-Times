import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg">
        {/* Newspaper Header */}
        <header className="border-b border-gray-200">
          {/* Red bar */}
          <div className="h-2 bg-red-600"></div>

          {/* Masthead */}
          <div className="py-6 text-center border-b border-gray-300">
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">THE AI TIMES</h1>
            <div className="flex justify-between items-center px-4 text-xs mt-2">
              <span>www.aitimes.com</span>
              <span className="font-serif">THE WORLD'S LEADING AI NEWSPAPER</span>
              <span>Since 2025</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 md:p-8">
          {/* Main Headline */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              BREAKTHROUGH IN NEURAL NETWORKS TRANSFORMS AI LANDSCAPE
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Main Image - Takes up 1/3 of the width */}
              <div className="md:col-span-1">
                <div className="relative h-64 w-full border border-gray-300">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Neural network visualization"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs italic mt-1">New neural architecture visualization</p>
              </div>

              {/* Main Article Text - Takes up 2/3 of the width */}
              <div className="md:col-span-2 text-sm leading-tight space-y-3">
                <p className="font-bold first-letter:text-xl first-letter:font-bold">
                  Researchers at the Institute of Advanced AI have unveiled a revolutionary neural network architecture
                  that promises to transform how machines learn and process information.
                </p>
                <p>
                  The breakthrough, announced yesterday at the International Conference on Machine Learning,
                  demonstrates a 40% improvement in efficiency while reducing computational requirements by half. "This
                  is the most significant advancement we've seen in the field in the past decade," said Dr. Elena
                  Rodriguez, lead researcher on the project.
                </p>
                <p>
                  Industry experts are already predicting wide-ranging implications across sectors from healthcare to
                  autonomous transportation. The new architecture, dubbed "DeepFlow," incorporates novel approaches to
                  information processing that more closely mimic human cognitive patterns.
                </p>
                <p>
                  "What makes this particularly exciting is how it bridges the gap between traditional deep learning and
                  neuromorphic computing," explained Dr. James Chen, who was not involved in the research but has
                  reviewed the findings. "The potential applications are vast."
                </p>
                <p>
                  Initial tests show DeepFlow excelling at tasks that have traditionally challenged AI systems,
                  including contextual understanding and adaptive learning in novel environments. The research team has
                  made their code open-source, allowing developers worldwide to begin experimenting with the new
                  architecture.
                </p>
              </div>
            </div>
          </div>

          {/* Horizontal Rule */}
          <div className="border-t border-gray-300 my-6"></div>

          {/* Secondary Articles in Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Article 1 */}
            <div className="border-r border-gray-300 pr-6">
              <h3 className="text-xl font-serif font-bold mb-3">ETHICS COUNCIL PROPOSES NEW AI GOVERNANCE FRAMEWORK</h3>
              <div className="text-sm leading-tight space-y-2">
                <p>
                  The International AI Ethics Council has proposed a comprehensive governance framework aimed at
                  ensuring responsible development and deployment of artificial intelligence technologies.
                </p>
                <p>
                  The framework, which addresses issues ranging from bias mitigation to transparency requirements, comes
                  after months of consultation with stakeholders across industry, academia, and civil society
                  organizations.
                </p>
                <p>
                  "As AI becomes increasingly integrated into critical systems, we need clear guidelines that protect
                  human interests while enabling innovation," said Council Chair Dr. Amara Okafor.
                </p>
                <p>
                  The proposal has received mixed reactions, with some tech companies expressing concerns about
                  implementation costs while advocacy groups have largely welcomed the initiative as a step in the right
                  direction.
                </p>
                <p>
                  Public consultations on the framework will begin next month, with final recommendations expected
                  before year-end.
                </p>
              </div>
            </div>

            {/* Article 2 */}
            <div>
              <h3 className="text-xl font-serif font-bold mb-3">AI ASSISTANTS RESHAPE WORKPLACE DYNAMICS</h3>
              <div className="text-sm leading-tight space-y-2">
                <p>
                  A new study from the Future of Work Institute reveals that AI assistants are fundamentally reshaping
                  workplace dynamics across industries, with both positive and challenging implications.
                </p>
                <p>
                  The research, which surveyed over 5,000 workers across diverse sectors, found that 78% reported
                  increased productivity when using AI tools, while 42% expressed concerns about skill atrophy and
                  over-reliance on automated systems.
                </p>
                <p>
                  "We're seeing a significant shift in how teams operate," explained lead researcher Dr. Marcus Wei.
                  "The most successful organizations are those that thoughtfully integrate AI assistants while
                  preserving human creativity and critical thinking."
                </p>
                <p>
                  The study also highlighted emerging job categories specifically focused on human-AI collaboration,
                  suggesting that the future workforce will need new skills centered around effective partnership with
                  intelligent systems.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Small Article 1 */}
            <div className="text-xs leading-tight">
              <h4 className="font-serif font-bold mb-2">QUANTUM COMPUTING MILESTONE ACHIEVED</h4>
              <p>
                Scientists at Quantum Frontiers Lab have achieved a significant milestone in quantum error correction,
                bringing fault-tolerant quantum computing one step closer to reality. The breakthrough could accelerate
                AI training processes by orders of magnitude.
              </p>
            </div>

            {/* Small Article 2 */}
            <div className="text-xs leading-tight">
              <h4 className="font-serif font-bold mb-2">NEW REGULATION ON AI TRANSPARENCY</h4>
              <p>
                The European Commission has introduced new regulations requiring AI developers to provide detailed
                documentation on training data sources and algorithmic decision-making processes. Industry leaders are
                scrambling to ensure compliance before the January deadline.
              </p>
            </div>

            {/* Small Article 3 */}
            <div className="text-xs leading-tight">
              <h4 className="font-serif font-bold mb-2">AI ART EXHIBITION DRAWS RECORD CROWDS</h4>
              <p>
                The "Minds and Machines" exhibition at the Metropolitan Museum of Modern Art has attracted record
                attendance in its opening week. The controversial showcase features works created through human-AI
                collaboration, sparking debate about the nature of creativity.
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 p-4 text-center text-xs border-t border-gray-300">
          <p>© {new Date().getFullYear()} AI Times. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
