import React, { useState } from 'react';

const REMOTE_GALLERY = [
  { type: 'youtube', id: 'KBcWk5OAEMA' },
  { type: 'local', src: '/assets/remotegallery/CM_AskYourCFO_Michiel_01.mp4' },
  { type: 'local', src: '/assets/remotegallery/ChooseYourHire_1920x1080_Packshot.mp4' },
  { type: 'local', src: '/assets/remotegallery/Concept01_1920x1080.mp4' },
  { type: 'local', src: '/assets/remotegallery/DancingMan_1080x1920_Packshot.mp4' },
  { type: 'local', src: '/assets/remotegallery/OffMute_1920x1080.mp4' },
  { type: 'local', src: '/assets/remotegallery/RemoteRecruit_Teaser.mp4' },
  { type: 'local', src: '/assets/remotegallery/Revamp_PresentationVideo_Post.mp4' },
];

function GalleryModal({ onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.85)',
        zIndex: 1000,
        overflowY: 'auto',
        padding: '2rem 1rem',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ color: '#fff', fontSize: '18px', fontWeight: 500, margin: 0 }}>Work at Remote</h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#aaa',
              fontSize: '24px',
              cursor: 'pointer',
              lineHeight: 1,
              padding: '0.25rem',
            }}
          >
            ×
          </button>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: '1rem',
          }}
        >
          {REMOTE_GALLERY.map((item, i) => (
            <div key={i} style={{ borderRadius: '6px', overflow: 'hidden', background: '#111' }}>
              {item.type === 'youtube' ? (
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${item.id}${item.start ? `?start=${item.start}` : ''}`}
                    title={`Remote video ${i + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  />
                </div>
              ) : (
                <video src={item.src} controls style={{ width: '100%', display: 'block' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const Section = ({ id, title, subtitle, children, isOpen }) => (
    <div
      style={{
        marginBottom: '3rem',
        borderLeft: '2px solid rgba(0, 0, 0, 0.1)',
        paddingLeft: '1.75rem',
      }}
    >
      <button
        onClick={() => toggleSection(id)}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          textAlign: 'left',
          width: '100%',
        }}
      >
        <h2
          style={{
            fontSize: '20px',
            fontWeight: 500,
            margin: '0 0 0.25rem 0',
            color: '#1a1a1a',
            letterSpacing: '-0.01em',
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{
              fontSize: '14px',
              color: '#666',
              margin: 0,
              fontWeight: 400,
            }}
          >
            {subtitle}
          </p>
        )}
      </button>
      {isOpen && (
        <div
          style={{
            marginTop: '1.25rem',
            fontSize: '15px',
            lineHeight: '1.7',
            color: '#333',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );

  const CaseStudyCard = ({ title, insight, role, youtubeId, youtubeVideos, localVideos }) => (
    <div
      style={{
        background: '#fafafa',
        border: '1px solid #e5e5e5',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '1rem',
      }}
    >
      <h3
        style={{
          fontSize: '16px',
          fontWeight: 500,
          margin: '0 0 0.75rem 0',
          color: '#1a1a1a',
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: '14px',
          color: '#555',
          margin: '0 0 1rem 0',
          fontStyle: 'italic',
          lineHeight: '1.6',
        }}
      >
        "{insight}"
      </p>
      <p
        style={{
          fontSize: '14px',
          color: '#777',
          margin: 0,
          lineHeight: '1.6',
        }}
      >
        {role}
      </p>
      {(youtubeId || (youtubeVideos && youtubeVideos.length > 0)) && (
        <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            ...(youtubeId ? [{ id: youtubeId }] : []),
            ...(youtubeVideos || []),
          ].map((yt, i) => (
            <div
              key={i}
              style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                borderRadius: '6px',
                overflow: 'hidden',
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${yt.id}${yt.start ? `?start=${yt.start}` : ''}`}
                title={`YouTube video ${i + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
              />
            </div>
          ))}
        </div>
      )}
      {localVideos && localVideos.length > 0 && (
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {localVideos.map((src, i) => (
            <video
              key={i}
              src={src}
              controls
              style={{
                width: '100%',
                borderRadius: '6px',
                display: 'block',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );


  return (
    <>
    {galleryOpen && <GalleryModal onClose={() => setGalleryOpen(false)} />}
    <div
      style={{
        background: '#fff',
        minHeight: '100vh',
        padding: '3rem 1.5rem',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '720px',
          margin: '0 auto',
        }}
      >
        {/* INTRO */}
        <div
          style={{
            marginBottom: '4rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid #e5e5e5',
          }}
        >
          <h1
            style={{
              fontSize: '32px',
              fontWeight: 500,
              margin: '0 0 0.75rem 0',
              color: '#1a1a1a',
              letterSpacing: '-0.02em',
            }}
          >
            Dimi
          </h1>
          <p
            style={{
              fontSize: '16px',
              color: '#555',
              margin: '0 0 1rem 0',
              lineHeight: '1.7',
              fontWeight: 400,
            }}
          >
            I direct video at scale. Most recently, developing a creative vision for video at Remote where strategy and execution are inseparable - every video feels intentional, unmistakably on-brand. Built a multi-talented team that brings that vision to life across brand, social, product, performance marketing.
          </p>
          <p
            style={{
              fontSize: '14px',
              color: '#777',
              margin: 0,
              lineHeight: '1.7',
            }}
          >
            Leading video at <a href="https://remote.com" style={{ color: 'inherit', textDecoration: 'underline' }}>Remote</a> and <a href="https://youtube.com/phaktv" style={{ color: 'inherit', textDecoration: 'underline' }}>ΦΑΚ</a> (independent production channel). Before: <a href="https://dcodeit.com" style={{ color: 'inherit', textDecoration: 'underline' }}>d:code:it</a> (fintech, JP Morgan, BAML), <a href="https://kompanycreative.com" style={{ color: 'inherit', textDecoration: 'underline' }}>Kompany</a> (commercial video production).
          </p>
        </div>

        {/* CASE STUDIES */}
        <Section
          id="campaigns"
          title="Three campaigns"
          subtitle="Strategic thinking in practice"
          isOpen={expandedSection === 'campaigns'}
        >
          <CaseStudyCard
            title="Big things start like this"
            insight="Everyone celebrates the billion-dollar valuation. Nobody talks about the Tuesday morning when the founder couldn't make payroll."
            role="Full production: concept, writing, and direction through delivery. Established the strategic and creative brief that governed all in-house video production — motion, editing, sound. One unified approach across Remote's entire product range, from startup positioning to enterprise scale."
            youtubeId="Dgf55Ydmy-E"
            localVideos={[
              '/assets/OOH_StartAnywhere_02_YT_15s.mp4',
              '/assets/OOH_StartAnywhere_03_YT_6s.mp4',
            ]}
          />

          <CaseStudyCard
            title="Work on what really matters"
            insight="We too often focus on the how (automate, get leaner, go faster). Yet no one's talking about the what — what will you actually do with all that time our tools will free up?"
            role="Producer and strategic lead. Identified the positioning gap in Remote's messaging, designed a scalable video template system with clear flexibility guardrails. A modular approach safeguarded the hundreds of iterations across Remote's products and provided the ability to test hooks, CTAs and approaches easily. Built production pipeline and documentation to execute at volume across multiple products."
            localVideos={[
              '/assets/what really matters/WorkOnWhatReallyMatters_Payroll_9-16.mp4',
              '/assets/what really matters/WhatReallyMatters_Payroll_Text_9x16.mp4',
            ]}
          />

          <CaseStudyCard
            title="A launch at Remote"
            insight="A launch isn't one video. It's a system of videos, each doing a different job — together they make an announcement feel like a moment."
            role="Three formats, one launch. A CEO piece where script and edit carry the weight of the announcement. A motion graphics film built on campaign key visuals, translating brand into motion. An external production for reach and polish. Each format serves a different context; all of them speak the same visual language."
            youtubeVideos={[
              { id: 'VAHr3zLpbzs' },
              { id: 'cIUHczkp8aY' },
              { id: 'TaWdzrCnrdI', start: 42 },
            ]}
          />

          <p
            style={{
              fontSize: '14px',
              color: '#777',
              marginTop: '1.75rem',
              fontStyle: 'italic',
            }}
          >
            Three campaigns, same pattern: strategic insight → system design → production excellence.
          </p>
        </Section>

        {/* BUILDING AT REMOTE */}
        <Section
          id="remote"
          title="Building at Remote"
          subtitle="Video at scale: the Remote way"
          isOpen={expandedSection === 'remote'}
        >
          <p style={{ fontSize: '15px', lineHeight: '1.7', margin: '0 0 1.25rem 0', color: '#555' }}>
            Built a creative vision where strategy and execution are inseparable. Every video is intentional, on-brand, unmistakably Remote.
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.7', margin: '0 0 1.25rem 0', color: '#555' }}>
            The system: motion templates (logos, CTAs, typography), custom easing libraries, reusable compositions. Tiered for self-serve and specialists. Built frameworks for how projects get created—documentation, workflows, collaboration patterns that actually work at scale.
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.7', margin: '0 0 1.25rem 0', color: '#555' }}>
            AI as amplification: script writing agent that democratizes the process for people without video experience. Performance evaluation tool built on Google's ABCD criteria—producers get feedback before shipping, not after. Custom plugins to amplify team capability.
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.7', margin: '0 0 1.5rem 0', color: '#555' }}>
            Result: a multi-talented team executing one clear vision. Output increased every year. What was impossible before is now routine. A small, high-performing video function that punches far above its size.
          </p>
          <button
            onClick={() => setGalleryOpen(true)}
            style={{
              background: 'none',
              border: '1px solid #1a1a1a',
              borderRadius: '4px',
              padding: '0.5rem 1rem',
              fontSize: '14px',
              color: '#1a1a1a',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            View work at Remote →
          </button>
        </Section>

        {/* PHILOSOPHY */}
        <Section
          id="philosophy"
          title="How I think"
          subtitle="What matters in creative operations"
          isOpen={expandedSection === 'philosophy'}
        >
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}
          >
            {[
              "Systems serve strategy. Build once, scale forever.",
              "Democratize without lowering the floor. Templates enable, they don't constrain.",
              "Technology augments humans, never replaces them.",
              "Clear processes reduce friction and protect quality.",
              "Write well before you shoot. Strategy crystallizes in the script.",
              "Trust the right people in the right positions — outcomes follow.",
              "Document everything. Institutional knowledge shouldn't live in one person's head.",
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: '15px',
                  lineHeight: '1.7',
                  marginBottom: '1.25rem',
                  paddingLeft: '1.5rem',
                  position: 'relative',
                  color: '#555',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    color: '#ccc',
                  }}
                >
                  •
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* CREDIBILITY */}
        <Section
          id="credibility"
          title="Background"
          subtitle="Where I come from"
          isOpen={expandedSection === 'credibility'}
        >
          {[
            'I bring stories to life through motion.',
            'For the past decade, I\'ve worked at the intersection of video, motion design, and brand - helping tech organizations express who they are through how they move on screen.',
            'My focus has always been on building systems that scale creativity: motion frameworks, production workflows, visual languages that make complex stories feel effortless. The goal is to democratize without lowering the floor - templates that enable, never constrain. And bespoke when needed.',
            'What I\'ve learned is simple: great creative work respects attention, has something original to say, and rests on a solid foundation. The kind that makes ideas not just aesthetically pleasing, but believable. That\'s what I chase - in strategy, in execution, in every frame.',
            'You can\'t make great work without good environments. I make sure my teams are inspired, communication is clear, and that people have the space to be the best creative professionals they can be. That\'s where the real work happens.',
          ].map((text, i) => (
            <p key={i} style={{ fontSize: '15px', lineHeight: '1.7', margin: '0 0 1.25rem 0', color: '#555' }}>
              {text}
            </p>
          ))}

          {[
            {
              title: 'Remote — Video & Content Production Manager (2022–Present)',
              body: 'Scaled video production for a 2000-person organization. Built systems, motion frameworks, and AI tooling to enable teams across brand, social, product, and performance marketing.',
            },
            {
              title: 'd:code:it, London (5+ years)',
              body: 'Built and led video production for fintech. Worked with JP Morgan, Bank of America, and other heavily regulated clients where precision and compliance aren\'t negotiable. Learned that strong process protects both quality and sanity.',
              video: '/assets/Visuals-for-d_code_it-stand--Fintech-Connect_720.mp4',
            },
            {
              title: 'Kompany, Nicosia & London',
              body: 'Creative director and writer on commercial video campaigns for Lidl, Lay\'s, Snack A Jacks. Conceptualized and directed work from brief through delivery.',
            },
            {
              title: 'ΦΑΚ, Cyprus (co-founder, 2013–present)',
              body: 'Built an online video production house from scratch. Grew a loyal audience organically, got featured across Greek media and at festivals. Proved you can balance original content with commercial work while building a strong collaborator network.',
            },
            {
              title: 'Vungle Creative Labs, London',
              body: 'Created advertising for leading mobile games and apps. Work was used as case studies for effective mobile ad engagement.',
            },
          ].map(({ title, body, video }, i, arr) => (
            <div key={i} style={{ marginBottom: i < arr.length - 1 ? '1.75rem' : 0 }}>
              <h3 style={{ fontSize: '15px', fontWeight: 500, margin: '0 0 0.5rem 0', color: '#1a1a1a' }}>
                {title}
              </h3>
              <p style={{ fontSize: '14px', color: '#777', margin: 0, lineHeight: '1.7' }}>
                {body}
              </p>
              {video && (
                <video
                  src={video}
                  controls
                  style={{ width: '100%', borderRadius: '6px', display: 'block', marginTop: '0.75rem' }}
                />
              )}
            </div>
          ))}

          <div style={{ marginTop: '2.5rem' }}>
            <h3
              style={{
                fontSize: '13px',
                fontWeight: 600,
                margin: '0 0 1rem 0',
                color: '#1a1a1a',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Education
            </h3>
            {[
              'Goldsmiths, MA Image & Communication (Distinction)',
              'UEL, BA Digital Arts with Moving Image (2:1)',
            ].map((item, i) => (
              <p key={i} style={{ fontSize: '14px', color: '#777', margin: '0 0 0.5rem 0', lineHeight: '1.7' }}>
                {item}
              </p>
            ))}
          </div>

          <video
            src="/assets/2021-reel.mp4"
            controls
            style={{ width: '100%', borderRadius: '6px', display: 'block', marginTop: '2rem' }}
          />
        </Section>

        {/* FOOTER */}
        <div
          style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid #e5e5e5',
          }}
        >
          <p
            style={{
              fontSize: '14px',
              color: '#777',
              margin: '0 0 0.5rem 0',
              lineHeight: '1.7',
            }}
          >
            Get in touch to build something together worth watching. All rights reserved Dimi 2026.
          </p>
          <p
            style={{
              fontSize: '14px',
              color: '#777',
              margin: 0,
              lineHeight: '1.7',
            }}
          >
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/thisisdimi/"
              style={{
                color: '#1a1a1a',
                textDecoration: 'underline',
              }}
            >
              thisisdimi
            </a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
