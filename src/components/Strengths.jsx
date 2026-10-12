import './Strengths.css'

export default function Strengths() {
  const strengths = [
    {
      icon: 'brand',
      title: '品牌设计',
      subtitle: 'Brand Design',
      description: '从品牌策略到视觉识别系统的全链路设计，打造独特且富有辨识度的品牌形象，让品牌在市场中脱颖而出。',
      tags: ['Logo设计', 'VI系统', '品牌手册', '品牌策略'],
    },
    {
      icon: 'ai',
      title: 'AI 创意设计',
      subtitle: 'AI Creative',
      description: '熟练运用 AI 工具拓展创意边界，将人工智能与设计思维结合，探索更多视觉可能性与高效工作流。',
      tags: ['AI绘画', '智能辅助', '创意探索', '效率提升'],
    },
    {
      icon: 'visual',
      title: '视觉传达',
      subtitle: 'Visual Design',
      description: '海报、包装、插画等多元化视觉表达能力，精准把控画面节奏与视觉张力，有效传递信息与情感。',
      tags: ['海报设计', '包装设计', '插画设计', '排版设计'],
    },
    {
      icon: 'ui',
      title: 'UI 设计',
      subtitle: 'UI / UX',
      description: '注重用户体验与界面美学的平衡，从用户需求出发，打造易用且赏心悦目的数字产品界面。',
      tags: ['界面设计', '交互设计', '用户研究', '原型设计'],
    },
    {
      icon: '3d',
      title: '三维设计',
      subtitle: '3D Design',
      description: '掌握 C4D 与 Blender 等三维工具，具备产品可视化与空间设计能力，为项目增添立体视觉层次。',
      tags: ['C4D', 'Blender', '产品渲染', '场景构建'],
    },
    {
      icon: 'motion',
      title: '动态设计',
      subtitle: 'Motion Design',
      description: '运用 After Effects 赋予静态设计以生命，通过动效增强用户体验与视觉冲击力，让设计更具表现力。',
      tags: ['AE动效', 'MG动画', '动态海报', '视频剪辑'],
    },
  ]

  const getIcon = (type) => {
    const icons = {
      brand: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
      ai: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="3"></rect>
          <path d="M8 12h8"></path>
          <path d="M12 8v8"></path>
          <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"></circle>
        </svg>
      ),
      visual: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <path d="M21 15l-5-5L5 21"></path>
        </svg>
      ),
      ui: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      '3d': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      motion: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      ),
    }
    return icons[type] || icons.brand
  }

  return (
    <section className="strengths section" id="strengths">
      <div className="container">
        <div className="strengths__header">
          <span className="section-label">个人优势</span>
          <h2 className="section-title">
            多维度<strong>设计能力</strong>
          </h2>
          <p className="strengths__intro">
            从平面到三维，从静态到动态，从传统设计到 AI 创意，
            构建全面且深入的设计能力矩阵。
          </p>
        </div>

        <div className="strengths__grid">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="strength-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="strength-card__icon">
                {getIcon(strength.icon)}
              </div>
              <div className="strength-card__content">
                <div className="strength-card__head">
                  <h3 className="strength-card__title">{strength.title}</h3>
                  <span className="strength-card__subtitle">{strength.subtitle}</span>
                </div>
                <p className="strength-card__description">{strength.description}</p>
                <div className="strength-card__tags">
                  {strength.tags.map((tag, i) => (
                    <span key={i} className="strength-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="strength-card__number">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="strength-card__glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
